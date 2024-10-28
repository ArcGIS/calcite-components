import { E2EPage, newE2EPage, E2EElement } from "@stencil/core/testing";
import {
  getLocaleHourFormat,
  getLocalizedMeridiem,
  getLocalizedTimePartSuffix,
  getMeridiemOrder,
  localizeTimeString,
} from "../../utils/time";
import {
  accessible,
  defaults,
  disabled,
  focusable,
  formAssociated,
  hidden,
  labelable,
  reflects,
  renders,
  t9n,
} from "../../tests/commonTests";
import { getFocusedElementProp, selectText, skipAnimations, waitForAnimationFrame } from "../../tests/utils";
import { html } from "../../../support/formatting";
import { openClose } from "../../tests/commonTests";
import { supportedLocales } from "../../utils/locale";

async function getInputValue(page: E2EPage): Promise<string> {
  return page.evaluate(
    () =>
      document
        .querySelector("calcite-input-time-picker")
        .shadowRoot.querySelector("calcite-input-text")
        .shadowRoot.querySelector("input").value,
  );
}

describe("calcite-input-time-picker", () => {
  describe("renders", () => {
    renders("calcite-input-time-picker", { display: "inline-block" });

    describe("renders with en-us lowercase locale code", () => {
      renders(`<calcite-input-time-picker lang="en-us"></calcite-input-time-picker>`, { display: "inline-block" });
    });

    describe("renders with base lang when region code is unsupported", () => {
      renders(`<calcite-input-time-picker lang="nl-nl"></calcite-input-time-picker>`, { display: "inline-block" });
    });

    describe("renders with pt-PT locale", () => {
      renders(`<calcite-input-time-picker lang="pt-PT"></calcite-input-time-picker>`, { display: "inline-block" });
    });

    describe("renders with no locale", () => {
      renders(`<calcite-input-time-picker lang="no"></calcite-input-time-picker>`, { display: "inline-block" });
    });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-input-time-picker");
  });

  describe("accessible", () => {
    accessible(html`
      <calcite-label>
        Input Time Picker
        <calcite-input-time-picker name="test"></calcite-input-time-picker>
      </calcite-label>
    `);
  });

  describe("translation support", () => {
    t9n("calcite-input-time-picker");
  });

  describe("defaults", () => {
    defaults("calcite-input-time-picker", [
      { propertyName: "scale", defaultValue: "m" },
      { propertyName: "step", defaultValue: 60 },
      { propertyName: "overlayPositioning", defaultValue: "absolute" },
      { propertyName: "status", defaultValue: "idle" },
      { propertyName: "validationIcon", defaultValue: undefined },
      { propertyName: "validationMessage", defaultValue: undefined },
    ]);
  });

  describe("reflects", () => {
    reflects(`calcite-input-time-picker`, [
      { propertyName: "open", value: true },
      { propertyName: "disabled", value: true },
      { propertyName: "scale", value: "m" },
      { propertyName: "status", value: "invalid" },
      { propertyName: "validationIcon", value: true },
    ]);
  });

  describe("labelable", () => {
    labelable("calcite-input-time-picker");
  });

  describe("focusable", () => {
    focusable(`calcite-input-time-picker`, {
      shadowFocusTargetSelector: "calcite-input-text",
    });
  });

  describe("disabled", () => {
    disabled("calcite-input-time-picker");
  });

  it("resets initial value to empty when it is not a valid time value", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-input-time-picker value="invalid"></calcite-input-time-picker>`);

    const inputTimePicker = await page.find("calcite-input-time-picker");

    expect(await inputTimePicker.getProperty("value")).toBe("");
  });

  describe("openClose", () => {
    openClose("calcite-input-time-picker");

    describe.skip("initially open", () => {
      openClose.initial("calcite-input-time-picker");
    });
  });

  it("resets to previous value when default event behavior is prevented", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-input-time-picker value="14:59"></calcite-input-time-picker>`);

    const inputTimePicker = await page.find("calcite-input-time-picker");

    await page.evaluate(() => {
      const inputTimePicker = document.querySelector("calcite-input-time-picker");
      inputTimePicker.addEventListener("calciteInputTimePickerChange", (event) => {
        event.preventDefault();
      });
    });

    expect(await inputTimePicker.getProperty("value")).toBe("14:59");

    await inputTimePicker.callMethod("setFocus");
    await page.waitForChanges();
    await page.keyboard.press("Backspace");
    await page.keyboard.press("5");
    await page.keyboard.press("Enter");
    await page.waitForChanges();

    expect(await inputTimePicker.getProperty("value")).toBe("14:59");
  });

  it("when set to readOnly, element still focusable but won't display the controls or allow for changing the value", async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<calcite-input-time-picker read-only triggerDisabled={true} id="canReadOnly"></calcite-input-time-picker>`,
    );

    const component = await page.find("#canReadOnly");
    const input = await page.find("#canReadOnly >>> calcite-input-text");
    const popover = await page.find("#canReadOnly >>> calcite-popover");

    expect(await input.getProperty("value")).toBe("");

    await component.click();
    await page.waitForChanges();

    expect(await page.evaluate(() => document.activeElement.id)).toBe("canReadOnly");
    expect(await popover.getProperty("open")).toBe(false);

    await component.click();
    await page.waitForChanges();
    expect(await popover.getProperty("open")).toBe(false);

    await component.type("attention attention");
    await page.waitForChanges();

    expect(await input.getProperty("value")).toBe("");
  });

  describe("direct value setting", () => {
    it("directly changing the value reflects in the input for 24-hour (french lang)", async () => {
      const locale = "fr";
      const numberingSystem = "latn";

      const page = await newE2EPage();
      await page.setContent(
        `<calcite-input-time-picker lang="${locale}" numbering-system="${numberingSystem}" step="1"></calcite-input-time-picker>`,
      );

      const inputTimePicker = await page.find("calcite-input-time-picker");
      const input = await page.find("calcite-input-time-picker >>> calcite-input-text");

      for (let second = 0; second < 10; second++) {
        const date = new Date(0);
        date.setSeconds(second);

        const expectedValue = date.toISOString().substr(11, 8);
        const expectedInputValue = localizeTimeString({ value: expectedValue, locale, numberingSystem });

        inputTimePicker.setProperty("value", expectedValue);

        await page.waitForChanges();

        const inputValue = await input.getProperty("value");
        const inputTimePickerValue = await inputTimePicker.getProperty("value");

        expect(inputValue).toBe(expectedInputValue);
        expect(inputTimePickerValue).toBe(expectedValue);
      }

      for (let minute = 0; minute < 10; minute++) {
        const date = new Date(0);
        date.setMinutes(minute);

        const expectedValue = date.toISOString().substr(11, 8);
        const expectedInputValue = localizeTimeString({ value: expectedValue, locale, numberingSystem });

        inputTimePicker.setProperty("value", expectedValue);

        await page.waitForChanges();

        const inputValue = await input.getProperty("value");
        const inputTimePickerValue = await inputTimePicker.getProperty("value");

        expect(inputValue).toBe(expectedInputValue);
        expect(inputTimePickerValue).toBe(expectedValue);
      }

      for (let hour = 0; hour < 10; hour++) {
        const date = new Date(0);
        date.setHours(hour);

        const expectedValue = date.toISOString().substr(11, 8);
        const expectedInputValue = localizeTimeString({ value: expectedValue, locale, numberingSystem });

        inputTimePicker.setProperty("value", expectedValue);

        await page.waitForChanges();

        const inputValue = await input.getProperty("value");
        const inputTimePickerValue = await inputTimePicker.getProperty("value");

        expect(inputValue).toBe(expectedInputValue);
        expect(inputTimePickerValue).toBe(expectedValue);
      }
    });

    it("value displays correctly in the input when it is directly changed for a 12-hour language when a default value is present", async () => {
      const locale = "en";
      const numberingSystem = "latn";

      const page = await newE2EPage();
      await page.setContent(
        `<calcite-input-time-picker step="1" lang="${locale}" numbering-system="${numberingSystem}" value="11:00:00"></calcite-input-time-picker>`,
      );

      const inputTimePicker = await page.find("calcite-input-time-picker");
      const input = await page.find("calcite-input-time-picker >>> calcite-input-text");

      expect(await input.getProperty("value")).toBe("11:00:00 AM");
      expect(await inputTimePicker.getProperty("value")).toBe("11:00:00");

      const date = new Date(0);
      date.setHours(13);
      date.setMinutes(59);
      date.setSeconds(59);

      const expectedValue = date.toISOString().substr(11, 8);
      const expectedInputValue = localizeTimeString({ value: expectedValue, locale, numberingSystem });

      inputTimePicker.setProperty("value", expectedValue);

      await page.waitForChanges();

      const inputValue = await input.getProperty("value");
      const inputTimePickerValue = await inputTimePicker.getProperty("value");

      expect(inputValue).toBe(expectedInputValue);
      expect(inputTimePickerValue).toBe(expectedValue);
    });

    it("value displays correctly in the input when it is directly changed for a 24-hour language when a default value is present (arab lang/numberingSystem)", async () => {
      const locale = "ar";
      const numberingSystem = "arab";
      const initialValue = "11:00:00";

      const page = await newE2EPage();
      await page.setContent(
        `<calcite-input-time-picker step="1" lang="${locale}" numbering-system="${numberingSystem}" value=${initialValue}></calcite-input-time-picker>`,
      );

      const inputTimePicker = await page.find("calcite-input-time-picker");
      const input = await page.find("calcite-input-time-picker >>> calcite-input-text");

      const initialDisplayValue = localizeTimeString({ value: initialValue, locale, numberingSystem });
      expect(await input.getProperty("value")).toBe(initialDisplayValue);
      expect(await inputTimePicker.getProperty("value")).toBe(initialValue);

      const date = new Date(0);
      date.setHours(13);
      date.setMinutes(59);
      date.setSeconds(59);

      const expectedValue = "13:59:59";
      const expectedInputValue = localizeTimeString({ value: expectedValue, locale, numberingSystem });

      inputTimePicker.setProperty("value", expectedValue);

      await page.waitForChanges();

      const inputValue = await input.getProperty("value");
      const inputTimePickerValue = await inputTimePicker.getProperty("value");

      expect(inputValue).toBe(expectedInputValue);
      expect(inputTimePickerValue).toBe(expectedValue);
    });
  });

  describe("committing values with the keyboard", () => {
    it("attempting to commit an invalid time value with the Enter key fails, but leaves the typed value intact", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-input-time-picker step="1"></calcite-input-time-picker>`);

      const inputTimePicker = await page.find("calcite-input-time-picker");
      const changeEvent = await inputTimePicker.spyOnEvent("calciteInputTimePickerChange");

      expect(changeEvent).toHaveReceivedEventTimes(0);

      await page.keyboard.press("Tab");
      await page.keyboard.type("foo bar");
      await page.waitForChanges();

      expect(changeEvent).toHaveReceivedEventTimes(0);

      await page.keyboard.press("Enter");
      await page.waitForChanges();

      expect(changeEvent).toHaveReceivedEventTimes(0);
      expect(await inputTimePicker.getProperty("value")).toBe("");
      expect(await getInputValue(page)).toBe("foo bar");

      await page.keyboard.press("Enter");
      await page.waitForChanges();

      expect(changeEvent).toHaveReceivedEventTimes(0);

      await page.keyboard.press("Tab");

      expect(changeEvent).toHaveReceivedEventTimes(0);
      expect(await inputTimePicker.getProperty("value")).toBe("");
      expect(await getInputValue(page)).toBe("foo bar");
    });

    it("pressing enter on a cleared input sets the value to empty string", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-input-time-picker step="1" value="02:34:56"></calcite-input-time-picker>`);

      const inputTimePicker = await page.find("calcite-input-time-picker");
      const changeEvent = await inputTimePicker.spyOnEvent("calciteInputTimePickerChange");

      expect(changeEvent).toHaveReceivedEventTimes(0);

      const inputValue = await getInputValue(page);

      await inputTimePicker.callMethod("setFocus");
      inputValue.split("").forEach(async () => {
        await page.keyboard.press("Backspace");
      });
      await page.keyboard.press("Enter");
      await page.waitForChanges();

      expect(await getInputValue(page)).toBe("");
      expect(await inputTimePicker.getProperty("value")).toBe("");
      expect(changeEvent).toHaveReceivedEventTimes(1);
    });

    it("allows editing just a portion of the time value in the input for a 12-hour locale", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-input-time-picker step="1" value="14:00:00"></calcite-input-time-picker>`);

      const inputTimePicker = await page.find("calcite-input-time-picker");
      await inputTimePicker.callMethod("setFocus");
      await page.waitForChanges();
      await page.keyboard.press("ArrowLeft");
      await page.keyboard.press("ArrowLeft");
      await page.keyboard.press("ArrowLeft");
      await page.keyboard.press("ArrowLeft");
      await page.keyboard.press("ArrowLeft");
      await page.keyboard.press("ArrowLeft");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("5");

      expect(await getInputValue(page)).toBe("02:05:00 PM");
      expect(await inputTimePicker.getProperty("value")).toBe("14:00:00");

      await page.keyboard.press("Enter");
      await page.waitForChanges();

      expect(await inputTimePicker.getProperty("value")).toBe("14:05:00");
    });
  });

  describe("is form-associated", () => {
    formAssociated("calcite-input-time-picker", {
      testValue: "03:23",
      submitsOnEnter: true,
      validation: true,
      validUserInputTestValue: "03:23 AM",
      inputType: "time",
    });
  });

  describe("responds to property changes", () => {
    it("updates value appropriately as step changes", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-input-time-picker value="1:2:3"></calcite-input-time-picker>`);

      const inputTimePicker = await page.find("calcite-input-time-picker");

      expect(await inputTimePicker.getProperty("value")).toBe("01:02");
      expect(await getInputValue(page)).toBe("01:02 AM");

      inputTimePicker.setProperty("step", 1);
      await page.waitForChanges();

      expect(await inputTimePicker.getProperty("value")).toBe("01:02:00");
      expect(await getInputValue(page)).toBe("01:02:00 AM");

      inputTimePicker.setProperty("step", 60);
      await page.waitForChanges();

      expect(await inputTimePicker.getProperty("value")).toBe("01:02");
      expect(await getInputValue(page)).toBe("01:02 AM");
    });

    it("correctly relocalizes the display value when the lang and numbering systems change", async () => {
      const page = await newE2EPage();
      await page.setContent(`<calcite-input-time-picker step="1" value="14:30:25"></calcite-input-time-picker>`);
      const inputTimePicker = await page.find("calcite-input-time-picker");

      expect(await getInputValue(page)).toBe("02:30:25 PM");

      inputTimePicker.setProperty("lang", "da");
      await page.waitForChanges();
      // waiting for an additional animation frame here allows for mutation observers and other things outside of Stencil's knowledge to complete before the page is ready to test
      await waitForAnimationFrame();

      expect(await getInputValue(page)).toBe("02.30.25 PM");

      inputTimePicker.setProperty("lang", "ar");
      await page.waitForChanges();
      await waitForAnimationFrame();

      expect(await getInputValue(page)).toBe("02:30:25 م");

      inputTimePicker.setProperty("numberingSystem", "arab");
      await page.waitForChanges();
      await waitForAnimationFrame();

      expect(await getInputValue(page)).toBe("٠٢:٣٠:٢٥ م");

      inputTimePicker.setProperty("lang", "zh-HK");
      inputTimePicker.setProperty("numberingSystem", "latn");
      await page.waitForChanges();
      await waitForAnimationFrame();

      expect(await getInputValue(page)).toBe("下午02:30:25");
    });
  });

  describe("l10n", () => {
    describe("arabic", () => {
      it("localizes initial display value in arab numbering system", async () => {
        const page = await newE2EPage();
        await page.setContent(
          `<calcite-input-time-picker step="1" lang="ar" numbering-system="arab" value="14:02:30"></calcite-input-time-picker>`,
        );

        const inputTimePicker = await page.find("calcite-input-time-picker");
        const changeEvent = await inputTimePicker.spyOnEvent("calciteInputTimePickerChange");

        expect(changeEvent).toHaveReceivedEventTimes(0);
        expect(await getInputValue(page)).toBe("٠٢:٠٢:٣٠ م");
        expect(await inputTimePicker.getProperty("value")).toBe("14:02:30");
      });

      it("converts latn numbers to arab while typing", async () => {
        const page = await newE2EPage();
        await page.setContent(
          `<calcite-input-time-picker step="1" lang="ar" numbering-system="arab"></calcite-input-time-picker>`,
        );

        const inputTimePicker = await page.find("calcite-input-time-picker");

        await inputTimePicker.callMethod("setFocus");
        await page.waitForChanges();
        await page.keyboard.type("0123456789");

        expect(await getInputValue(page)).toBe("٠١٢٣٤٥٦٧٨٩");
      });

      it("committing typed value works as expected in arab numbering system", async () => {
        const page = await newE2EPage();
        await page.setContent(
          `<calcite-input-time-picker step="1" lang="ar" numbering-system="arab"></calcite-input-time-picker>`,
        );

        const inputTimePicker = await page.find("calcite-input-time-picker");
        const changeEvent = await inputTimePicker.spyOnEvent("calciteInputTimePickerChange");

        await inputTimePicker.callMethod("setFocus");
        await page.waitForChanges();
        await page.keyboard.type("2:45:30 م");
        await page.keyboard.press("Enter");

        expect(changeEvent).toHaveReceivedEventTimes(1);
        expect(await getInputValue(page)).toBe("٠٢:٤٥:٣٠ م");
        expect(await inputTimePicker.getProperty("value")).toBe("14:45:30");
      });

      it("value displays correctly in the input when it is directly changed for arabic lang and arab numberingSystem", async () => {
        const locale = "ar";
        const numberingSystem = "arab";

        const page = await newE2EPage();
        await page.setContent(
          `<calcite-input-time-picker lang="${locale}" numbering-system="${numberingSystem}" step="1"></calcite-input-time-picker>`,
        );

        const inputTimePicker = await page.find("calcite-input-time-picker");
        const input = await page.find("calcite-input-time-picker >>> calcite-input-text");

        const date = new Date(0);
        date.setHours(13);
        date.setMinutes(59);
        date.setSeconds(59);

        const expectedValue = date.toISOString().substr(11, 8);
        const expectedInputValue = localizeTimeString({ value: expectedValue, locale, numberingSystem });

        inputTimePicker.setProperty("value", expectedValue);

        await page.waitForChanges();

        const inputValue = await input.getProperty("value");
        const inputTimePickerValue = await inputTimePicker.getProperty("value");

        expect(inputValue).toBe(expectedInputValue);
        expect(inputTimePickerValue).toBe(expectedValue);
      });
    });

    supportedLocales.forEach((locale) => {
      const localizedHourSuffix = getLocalizedTimePartSuffix("hour", locale);
      const localizedMinuteSuffix = getLocalizedTimePartSuffix("minute", locale);
      const localizedSecondSuffix = getLocalizedTimePartSuffix("second", locale);
      const localeHourFormat = getLocaleHourFormat(locale);

      describe(`${locale} (${localeHourFormat}-hour)`, () => {
        it("supports localized 12-hour format", async () => {
          const page = await newE2EPage();
          await page.setContent(html`
            <calcite-label>
              ${locale}
              <calcite-input-time-picker
                hour-format="12"
                lang="${locale}"
                step="1"
                value="14:02:30"
              ></calcite-input-time-picker>
              <calcite-label> <input /> </calcite-label
            ></calcite-label>
          `);

          const input = await page.find("input");
          const inputTimePicker = await page.find("calcite-input-time-picker");
          const changeEvent = await inputTimePicker.spyOnEvent("calciteInputTimePickerChange");

          expect(changeEvent).toHaveReceivedEventTimes(0);

          const initialValue = await inputTimePicker.getProperty("value");

          expect(initialValue).toBe("14:02:30");
          if (locale === "es-MX") {
            // test environment treats es-MX as es
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(await getInputValue(page)).toBe("02:02:30 p. m.");
          } else {
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(await getInputValue(page)).toBe(
              localizeTimeString({ hour12: true, includeSeconds: true, locale, value: initialValue }),
            );
          }

          await selectText(inputTimePicker);
          await page.keyboard.press("Backspace");

          const meridiemOrder = getMeridiemOrder(locale);
          const localizedMeridiem = getLocalizedMeridiem(locale, "PM");

          let localizedTime = `2${localizedHourSuffix}30${localizedMinuteSuffix}45`;
          if (localizedSecondSuffix) {
            localizedTime += localizedSecondSuffix;
          }
          let valueToType =
            meridiemOrder === 0 ? `${localizedMeridiem} ${localizedTime}` : `${localizedTime} ${localizedMeridiem}`;

          await page.keyboard.type(valueToType);
          await page.keyboard.press("Enter");
          await page.waitForChanges();

          expect(changeEvent).toHaveReceivedEventTimes(1);

          const typedValue = await inputTimePicker.getProperty("value");
          const localizedTypedValue = localizeTimeString({
            hour12: true,
            includeSeconds: true,
            locale,
            value: typedValue,
          });

          expect(typedValue).toBe("14:30:45");
          if (locale === "es-MX") {
            // test environment treats es-MX as es
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(await getInputValue(page)).toBe("02:30:45 p. m.");
          } else {
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(await getInputValue(page)).toBe(localizedTypedValue);
          }

          await page.keyboard.press("Enter");
          await page.waitForChanges();

          if (locale !== "es-MX") {
            // test environment changes value to 02:30:45 a. m. for some reason even though this isn't happening in real browsers
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(changeEvent).toHaveReceivedEventTimes(1);
          }

          await selectText(inputTimePicker);
          await page.keyboard.press("Backspace");

          localizedTime = `4${localizedHourSuffix}15${localizedMinuteSuffix}30`;
          if (localizedSecondSuffix) {
            localizedTime += localizedSecondSuffix;
          }
          valueToType =
            meridiemOrder === 0 ? `${localizedMeridiem} ${localizedTime}` : `${localizedTime} ${localizedMeridiem}`;

          await page.keyboard.type(valueToType);
          await input.focus();
          await page.waitForChanges();

          if (locale !== "es-MX") {
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(changeEvent).toHaveReceivedEventTimes(2);
          }

          const blurredValue = await inputTimePicker.getProperty("value");
          const localizedBlurredValue = localizeTimeString({
            hour12: true,
            includeSeconds: true,
            locale,
            value: blurredValue,
          });

          expect(blurredValue).toBe("16:15:30");
          if (locale === "es-MX") {
            // test environment treats es-MX as es
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(await getInputValue(page)).toBe("04:15:30 p. m.");
          } else {
            /* eslint-disable jest/no-conditional-expect -- Using conditional logic to handle quirk with Mexican Spanish in looped test so as not to maintain a separate test. **/
            expect(await getInputValue(page)).toBe(localizedBlurredValue);
          }

          await inputTimePicker.setProperty("hourFormat", "24");
          await page.waitForChanges();

          expect(await getInputValue(page)).toBe(
            localizeTimeString({
              hour12: false,
              includeSeconds: true,
              locale,
              value: blurredValue,
            }),
          );
        });

        it("supports localized 24-hour format", async () => {
          const page = await newE2EPage();
          await page.setContent(html`
            <calcite-label>
              ${locale}
              <calcite-input-time-picker
                hour-format="24"
                lang="${locale}"
                step="1"
                value="14:02:30"
              ></calcite-input-time-picker>
            </calcite-label>
            <input />
          `);

          const inputTimePicker = await page.find("calcite-input-time-picker");
          const changeEvent = await inputTimePicker.spyOnEvent("calciteInputTimePickerChange");

          expect(changeEvent).toHaveReceivedEventTimes(0);

          const initialValue = await inputTimePicker.getProperty("value");

          expect(initialValue).toBe("14:02:30");
          expect(await getInputValue(page)).toBe(
            localizeTimeString({ hour12: false, includeSeconds: true, locale, value: initialValue }),
          );

          let localizedInputValue = `14${localizedHourSuffix}30${localizedMinuteSuffix}45`;
          if (localizedSecondSuffix) {
            localizedInputValue += localizedSecondSuffix;
          }

          await selectText(inputTimePicker);
          await page.keyboard.press("Backspace");
          await page.keyboard.type(localizedInputValue);
          await page.keyboard.press("Enter");
          await page.waitForChanges();

          expect(changeEvent).toHaveReceivedEventTimes(1);
          expect(await inputTimePicker.getProperty("value")).toBe("14:30:45");
          expect(await getInputValue(page)).toBe(localizedInputValue);

          await page.keyboard.press("Enter");
          await page.waitForChanges();

          expect(changeEvent).toHaveReceivedEventTimes(1);

          localizedInputValue = `16${localizedHourSuffix}15${localizedMinuteSuffix}30`;
          if (localizedSecondSuffix) {
            localizedInputValue += localizedSecondSuffix;
          }

          await selectText(inputTimePicker);
          await page.keyboard.press("Backspace");
          await page.keyboard.type(localizedInputValue);

          const input = await page.find("input");
          await input.focus();

          expect(changeEvent).toHaveReceivedEventTimes(2);
          expect(await inputTimePicker.getProperty("value")).toBe("16:15:30");
          expect(await getInputValue(page)).toBe(localizedInputValue);

          await inputTimePicker.setProperty("hourFormat", "12");
          await page.waitForChanges();

          if (locale === "es-MX") {
            // test environment treats es-MX as es
            expect(await getInputValue(page)).toBe("04:15:30 p. m.");
          } else {
            expect(await getInputValue(page)).toBe(
              localizeTimeString({
                hour12: true,
                includeSeconds: true,
                locale,
                value: await inputTimePicker.getProperty("value"),
              }),
            );
          }
        });
      });
    });
  });

  describe("focus trapping", () => {
    it("traps focus only when open", async () => {
      const page = await newE2EPage();
      await page.setContent(
        html`<calcite-input-time-picker></calcite-input-time-picker>
          <div id="next-sibling" tabindex="0">next sibling</div>`,
      );
      await skipAnimations(page);
      const popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      await page.keyboard.press("Tab");
      expect(await getFocusedElementProp(page, "tagName")).toBe("CALCITE-INPUT-TIME-PICKER");

      await page.keyboard.press("Tab");
      expect(await getFocusedElementProp(page, "id")).toBe("next-sibling");

      await page.keyboard.down("Shift");
      await page.keyboard.press("Tab");
      await page.keyboard.up("Shift");
      expect(await getFocusedElementProp(page, "tagName")).toBe("CALCITE-INPUT-TIME-PICKER");
      expect(await getFocusedElementProp(page, "tagName", { shadow: true })).toBe("CALCITE-INPUT-TEXT");

      await page.keyboard.press("ArrowDown");
      await page.waitForChanges();

      expect(await popover.isVisible()).toBe(true);
      expect(await getFocusedElementProp(page, "tagName", { shadow: true })).toBe("CALCITE-TIME-PICKER");

      await page.keyboard.down("Shift");
      await page.keyboard.press("Tab");
      await page.keyboard.up("Shift");
      expect(await getFocusedElementProp(page, "tagName", { shadow: true })).toBe("CALCITE-TIME-PICKER");

      await page.keyboard.press("Tab");
      expect(await getFocusedElementProp(page, "tagName", { shadow: true })).toBe("CALCITE-TIME-PICKER");

      await page.keyboard.press("Escape");
      await page.waitForChanges();

      expect(await popover.isVisible()).toBe(false);
      expect(await getFocusedElementProp(page, "tagName")).toBe("CALCITE-INPUT-TIME-PICKER");
      expect(await getFocusedElementProp(page, "tagName", { shadow: true })).toBe("CALCITE-INPUT-TEXT");

      await page.keyboard.press("Tab");
      expect(await getFocusedElementProp(page, "id")).toBe("next-sibling");
    });
  });

  describe("toggling time picker", () => {
    let page: E2EPage;
    let inputTimePicker: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent(html` <calcite-input-time-picker></calcite-input-time-picker>`);
      await skipAnimations(page);
      await page.waitForChanges();
      inputTimePicker = await page.find("calcite-input-time-picker");
    });

    it("sets the internal popover to autoClose", async () => {
      const popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.getProperty("autoClose")).toBe(true);
    });

    it("does not open the time picker on input keyboard focus", async () => {
      const popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      await page.keyboard.press("Tab");
      await page.waitForChanges();

      expect(await popover.getProperty("open")).not.toBe(true);
    });

    it("toggles the time picker when clicked", async () => {
      let popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.isVisible()).toBe(false);

      await inputTimePicker.click();
      await page.waitForChanges();
      popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.isVisible()).toBe(true);

      await inputTimePicker.click();
      await page.waitForChanges();
      popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.isVisible()).toBe(false);
    });

    it("toggles the time picker when using arrow down/escape key", async () => {
      let popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.isVisible()).toBe(false);

      await inputTimePicker.callMethod("setFocus");
      await page.waitForChanges();
      await page.keyboard.press("ArrowDown");
      await page.waitForChanges();
      popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.isVisible()).toBe(true);

      await page.keyboard.press("Escape");
      await page.waitForChanges();
      popover = await page.find("calcite-input-time-picker >>> calcite-popover");

      expect(await popover.isVisible()).toBe(false);
    });
  });
});
