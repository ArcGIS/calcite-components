import { BigDecimal, isValidNumber, sanitizeDecimalString, sanitizeExponentialNumberString } from "./number";

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
  "en-US",
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
  numberingSystem = defaultNumberingSystem
): Intl.NumberFormat {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
    numberingSystem
  } as Intl.ResolvedNumberFormatOptions);
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

export function getSupportedLang(lang: string): string {
  if (locales.indexOf(lang) > -1) {
    return lang;
  }

  lang = lang.toLowerCase();

  if (lang.includes("-")) {
    lang = lang.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);

    if (!locales.includes(lang)) {
      lang = lang.split("-")[0];
    }
  } else if (lang === "nb") {
    return "no";
  }
  return locales.includes(lang) ? lang : "en";
}
