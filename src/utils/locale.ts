import { BigDecimal, isValidNumber, sanitizeDecimalString, sanitizeExponentialNumberString } from "./number";
import { createObserver } from "./observers";
import { closestElementCrossShadowBoundary } from "./dom";

export const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-CH",
  "el",
  "en",
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "nb",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];

const allDecimalsExceptLast = new RegExp(`[.](?=.*[.])`, "g");
const everythingExceptNumbersDecimalsAndMinusSigns = new RegExp("[^0-9-.]", "g");
const defaultGroupSeparator = new RegExp(",", "g");

const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
const defaultNumberingSystem = browserNumberingSystem === "arab" ? "latn" : browserNumberingSystem;

export function createLocaleNumberFormatter(
  locale: string,
  numberingSystem = defaultNumberingSystem,
  signDisplay: "auto" | "never" | "always" | "exceptZero" = "auto"
): Intl.NumberFormat {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
    numberingSystem,
    signDisplay
  } as Intl.NumberFormatOptions);
}

export function delocalizeNumberString(numberString: string, locale: string): string {
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString: string): string => {
    const delocalizedNumberString = nonExpoNumString
      .replace(getMinusSign(locale), "-")
      .replace(getGroupSeparator(locale), "")
      .replace(getDecimalSeparator(locale), ".")
      .replace(allDecimalsExceptLast, "")
      .replace(everythingExceptNumbersDecimalsAndMinusSigns, "");

    return isValidNumber(delocalizedNumberString) ? delocalizedNumberString : nonExpoNumString;
  });
}

export function getGroupSeparator(locale: string): string {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(1234567);
  const value = parts.find((part) => part.type === "group").value;
  // change whitespace group characters that don't render correctly
  return value.trim().length === 0 ? " " : value;
}

export function getDecimalSeparator(locale: string): string {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(1.1);
  return parts.find((part) => part.type === "decimal").value;
}

export function getMinusSign(locale: string): string {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(-9);
  return parts.find((part) => part.type === "minusSign").value;
}

export function localizeNumberString(
  numberString: string,
  locale: string,
  displayGroupSeparator = false,
  numberingSystem?: string
): string {
  locale = getSupportedLocale(locale);

  return sanitizeExponentialNumberString(numberString, (nonExpoNumString: string): string => {
    if (nonExpoNumString) {
      const sanitizedNumberString = sanitizeDecimalString(nonExpoNumString.replace(defaultGroupSeparator, ""));
      if (isValidNumber(sanitizedNumberString)) {
        const parts = new BigDecimal(sanitizedNumberString).formatToParts(locale, numberingSystem);

        const localizedNumberString = parts
          .map(({ type, value }) => {
            switch (type) {
              case "group":
                return displayGroupSeparator ? getGroupSeparator(locale) : "";
              case "decimal":
                return getDecimalSeparator(locale);
              case "minusSign":
                return getMinusSign(locale);
              default:
                return value;
            }
          })
          .reduce((string, part) => string + part);
        return localizedNumberString;
      }
    }
    return nonExpoNumString;
  });
}

export function getSupportedLocale(locale: string): string {
  if (locales.indexOf(locale) > -1) {
    return locale;
  }

  locale = locale.toLowerCase();

  // we support both 'nb' and 'no' (BCP 47) for Norwegian
  if (locale === "nb") {
    return "no";
  }

  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);

    if (!locales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }

  return locales.includes(locale) ? locale : "en";
}

/**
 * This interface is for components that need to determine locale from the lang attribute.
 */
export interface LocalizedComponent {
  el: HTMLElement;

  /**
   * BCP 47 language tag for desired language and country format
   *
   * **Note**: this prop was added exclusively for backwards-compatibility
   *
   * @deprecated set the global `lang` attribute on the element instead.
   * @mdn [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
   */
  locale?: string;

  /**
   * Used to store the effective locale to avoid multiple lookups.
   *
   * This is an internal prop and should:
   *
   * - use the `@Prop({ mutable: true })` decorator (made mutable)
   * - be initialized to ""
   * - use the @internal JSDoc tag
   *
   * Components should watch this prop to ensure messages are updated.
   *
   * @Watch("effectiveLocale")
   * effectiveLocaleChange(): void {
   *   updateMessages(this, this.effectiveLocale);
   * }
   *
   * This property should only be set by composite components for all supporting `LocalizedComponent`s.
   */
  effectiveLocale: string;
}

const connectedComponents = new Set<LocalizedComponent>();

/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
export function connectLocalized(component: LocalizedComponent): void {
  updateEffectiveLocale(component);

  if (connectedComponents.size === 0) {
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
      subtree: true
    });
  }

  connectedComponents.add(component);
}

/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
export function updateEffectiveLocale(component: LocalizedComponent): void {
  component.effectiveLocale = getLocale(component);
}

/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
export function disconnectLocalized(component: LocalizedComponent): void {
  connectedComponents.delete(component);

  if (connectedComponents.size === 0) {
    mutationObserver.disconnect();
  }
}

const mutationObserver = createObserver("mutation", (records) => {
  records.forEach((record) => {
    const el = record.target as HTMLElement;

    connectedComponents.forEach((component) => {
      if (component.locale || (component.el.lang && el !== component.el) || !el.contains(component.el)) {
        return;
      }

      const closestLangEl = closestElementCrossShadowBoundary<HTMLElement>(component.el, "[lang]");

      if (closestLangEl !== el) {
        return;
      }

      component.effectiveLocale = closestLangEl.lang;
    });
  });
});

/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component: LocalizedComponent): string {
  return (
    component.el.lang ||
    component.locale ||
    closestElementCrossShadowBoundary<HTMLElement>(component.el, "[lang]")?.lang ||
    document.documentElement.lang ||
    "en"
  );
}
