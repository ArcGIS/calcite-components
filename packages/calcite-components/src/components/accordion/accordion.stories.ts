import { modesDarkDefault } from "../../../.storybook/utils";
import { placeholderImage } from "../../../.storybook/placeholderImage";
import { iconNames } from "../../../.storybook/helpers";
import { html } from "../../../support/formatting";
import { ATTRIBUTES } from "../../../.storybook/resources";
const { scale } = ATTRIBUTES;

interface Args {
  scale: string;
  appearance: string;
  selectionMode: string;
  heading: string;
  description: string;
  iconStart: string;
  iconEnd: string;
}

export default {
  title: "Components/Accordion",
  args: {
    scale: scale.defaultValue,
    appearance: "solid",
    selectionMode: "multiple",
    heading: "Heading",
    description: "Description for item",
    iconStart: "",
    iconEnd: "",
  },
  argTypes: {
    scale: {
      options: scale.values,
      control: { type: "select" },
    },
    appearance: {
      options: ["solid", "transparent"],
      control: { type: "select" },
    },
    selectionMode: {
      options: ["single", "single-persist", "multiple"],
      control: { type: "select" },
    },
    iconStart: {
      options: iconNames,
      control: { type: "select" },
    },
    iconEnd: {
      options: iconNames,
      control: { type: "select" },
    },
  },
  parameters: {
    backgrounds: {
      values: [{ name: "transparent", value: "#0000ffff" }],
    },
  },
};

const accordionItemContent = `Custom content here<br/><img src="${placeholderImage({
  width: 200,
  height: 133,
})}"><br/>More custom content here`;

export const simple = (args: Args): string => html`
  <calcite-accordion scale="${args.scale}" appearance="${args.appearance}" selection-mode="${args.selectionMode}">
    <calcite-accordion-item
      heading="${args.heading}"
      description="${args.description}"
      icon-start="${args.iconStart}"
      icon-end="${args.iconEnd}"
    >
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item
      heading="${args.heading}"
      description="${args.description}"
      icon-start="${args.iconStart}"
      icon-end="${args.iconEnd}"
    >
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item
      heading="${args.heading}"
      description="${args.description}"
      icon-start="${args.iconStart}"
      icon-end="${args.iconEnd}"
    >
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item
      heading="${args.heading}"
      description="${args.description}"
      icon-start="${args.iconStart}"
      icon-end="${args.iconEnd}"
      expanded
    >
      ${accordionItemContent}
    </calcite-accordion-item>
  </calcite-accordion>
`;

export const withActions = (): string => html`
  <calcite-accordion scale="s">
    <calcite-accordion-item scale="m" heading="Accordion Item 1">
      <calcite-action scale="s" icon="brush-tip" label="Paint" slot="actions-start"></calcite-action
      >${accordionItemContent}
      <calcite-action scale="s" icon="banana" label="Banana" slot="actions-end"></calcite-action>
      <calcite-action scale="s" icon="sound" label="Volume" slot="actions-end"></calcite-action>
    </calcite-accordion-item>
    <calcite-accordion-item scale="m" heading="Accordion Item 2" expanded>
      <calcite-action scale="s" icon="brush-tip" label="Paint" slot="actions-start"></calcite-action
      >${accordionItemContent}
      <calcite-action scale="s" icon="banana" label="Banana" slot="actions-start"></calcite-action>
      <calcite-action scale="s" icon="sound" label="Volume" slot="actions-end"></calcite-action>
    </calcite-accordion-item>
    <calcite-accordion-item scale="m" heading="Accordion Item 3">
      <calcite-action scale="s" icon="brush-tip" label="Paint" slot="actions-start"></calcite-action
      <calcite-action scale="s" icon="banana" label="Banana" slot="actions-end"></calcite-action>
      >${accordionItemContent}
      <calcite-action scale="s" icon="sound" label="Volume" slot="actions-end"></calcite-action>
    </calcite-accordion-item>
  </calcite-accordion>
`;

export const darkModeRTL_TestOnly = (): string => html`
  <calcite-accordion scale="m" appearance="solid" selection-mode="multiple" class="calcite-mode-dark" dir="rtl">
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="banana" icon-end="">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="banana" icon-end="">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="banana" icon-end="">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item
      heading="Heading"
      description="Description for item"
      icon-start="banana"
      icon-end=""
      expanded
    >
      ${accordionItemContent}
    </calcite-accordion-item>
  </calcite-accordion>
`;

darkModeRTL_TestOnly.parameters = { themes: modesDarkDefault };

export const transparentAppearance_TestOnly = (): string => html`
  <calcite-accordion scale="m" selection-mode="multiple" appearance="transparent">
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="" icon-end="">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="" icon-end="">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="" icon-end="">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="" icon-end="" expanded>
      ${accordionItemContent}
    </calcite-accordion-item>
  </calcite-accordion>
`;

export const withIconStartAndEnd_TestOnly = (): string => html`
  <calcite-accordion scale="m" selection-mode="multiple" appearance="transparent">
    <calcite-accordion-item
      heading="Heading"
      description="Description for item"
      icon-start="banana"
      icon-end=""
      expanded
    >
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="" icon-end="cars">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item heading="Heading" description="Description for item" icon-start="plane" icon-end="plane">
      ${accordionItemContent}
    </calcite-accordion-item>
    <calcite-accordion-item
      heading="Heading"
      description="Description for item"
      icon-start="biking"
      icon-end="biking"
      expanded
    >
      ${accordionItemContent}
    </calcite-accordion-item>
  </calcite-accordion>
`;

const iconHeaderUseCasesArr: { icon: string; heading: string; description: string }[] = [
  { icon: "", heading: "Simple item with heading", description: "" },
  { icon: "", heading: "Simple item with heading", description: "Simple item with description" },
  {
    icon: "embark",
    heading:
      "Embark_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_",
    description: "Extra long heading with underscores and icons m /scale l",
  },
  {
    icon: "car",
    heading: "Extra long description with underscores and icons m /scale l",
    description:
      "Car_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_Watercraft_title_is_super_long_what_do_we_do_now_",
  },
  {
    icon: "plane",
    heading: "Extra long description and icons m /scale l",
    description:
      "Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets. Planes, helicopters, and jets.",
  },
];

const accordionItemsIconHeaderUseCases = iconHeaderUseCasesArr
  .map(
    (useCase) =>
      html`<calcite-accordion-item
        icon-start="${useCase.icon}"
        icon-end="${useCase.icon}"
        scale="l"
        heading="${useCase.heading}"
        description="${useCase.description}"
      ></calcite-accordion-item>`,
  )
  .join("");

export const longHeading_MediumIconForLargeAccordionItem_TestOnly = (): string => html`
  <calcite-accordion scale="l" style="width: 600px"> ${accordionItemsIconHeaderUseCases} </calcite-accordion>
`;
