import { boolean, select, text } from "@storybook/addon-knobs";
import {
  Attribute,
  handleComponentAttributes,
  Attributes,
  createComponentHTML as create,
  darkBackground
} from "../../../.storybook/utils";
import readme from "./readme.md";
import { TEXT } from "./resources";
import { ATTRIBUTES } from "../../../.storybook/resources";
import { placeholderImage } from "../../tests/utils";

export default {
  title: "Components/Tips/Tip",
  parameters: {
    backgrounds: darkBackground,
    notes: readme
  }
};

const createAttributes: (options?: { exceptions: string[] }) => Attributes = ({ exceptions } = { exceptions: [] }) => {
  const { dir, theme } = ATTRIBUTES;

  return handleComponentAttributes(
    [
      {
        name: "dir",
        commit(): Attribute {
          this.value = select("dir", dir.values, dir.defaultValue);
          delete this.build;
          return this;
        }
      },
      {
        name: "dismissed",
        commit(): Attribute {
          this.value = boolean("dismissed", false);
          delete this.build;
          return this;
        }
      },
      {
        name: "non-dismissible",
        commit(): Attribute {
          this.value = boolean("nonDismissible", false);
          delete this.build;
          return this;
        }
      },
      {
        name: "heading",
        commit(): Attribute {
          this.value = text("heading", "My Tip");
          delete this.build;
          return this;
        }
      },
      {
        name: "intl-close",
        commit(): Attribute {
          this.value = text("intlClose", TEXT.close);
          delete this.build;
          return this;
        }
      },
      {
        name: "theme",
        commit(): Attribute {
          this.value = select("theme", theme.values, theme.defaultValue);
          delete this.build;
          return this;
        }
      }
    ],
    exceptions
  );
};

const html = `<img slot="thumbnail" src="${placeholderImage({
  width: 1000,
  height: 600
})}" alt="This is an image." />Enim nascetur erat faucibus ornare varius arcu fames bibendum habitant felis elit ante. Nibh morbi massa curae; leo semper diam aenean congue taciti eu porta. Varius faucibus ridiculus donec. Montes sit ligula purus porta ante lacus habitasse libero cubilia purus! In quis congue arcu maecenas felis cursus pellentesque nascetur porta donec non. Quisque, rutrum ligula pharetra justo habitasse facilisis rutrum neque. Magnis nostra nec nulla dictumst taciti consectetur. Non porttitor tempor orci dictumst magna porta vitae. </div><a href="http://www.esri.com">This is a link</a>.`;

export const basic = (): string => create("calcite-tip", createAttributes(), html);
export const darkThemeRTL = (): string =>
  create(
    "calcite-tip",
    createAttributes({ exceptions: ["dir", "theme"] }).concat([
      { name: "dir", value: "rtl" },
      { name: "theme", value: "dark" }
    ]),
    html
  );
