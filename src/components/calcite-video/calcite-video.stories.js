import { storiesOf } from "@storybook/html";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { darkBackground, parseReadme } from "../../../.storybook/helpers";
import readme from "./readme.md";
const notes = parseReadme(readme);

storiesOf("Video", module)
  .addDecorator(withKnobs)
  .add(
    "Simple",
    () => `
    <div style="width:400px">
    <calcite-video
    disable-scrubbing="${boolean("disable-scrubbing", false)}"
    disable-fullscreen="${boolean("disable-scrubbing", false)}"
    disable-timestamp="${boolean("disable-timestamp", false)}"
    disable-progress="${boolean("disable-progress", false)}"
    disable-controls="${boolean("disable-controls", false)}"
    play-on-hover="${boolean("play-on-hover", false)}"
    show-controls-on-hover="${boolean("show-controls-on-hover", false)}"
    loop="${boolean("loop", false)}"
    autoplay="${boolean("autoplay", false)}"
    muted="${boolean("muted", false)}"
    src="${text(
      "src",
      "https://archive.org/download/untvmi-Family_Strings_-_Billy_Strings_and_Terry_Barber_-_LIVE_2_28_2020/Family_Strings_-_Billy_Strings_and_Terry_Barber_-_LIVE_2_28_2020.mp4"
    )}"
    ></calcite-video>
    </div>
  `,
    { notes }
  )
  .add(
    "Dark theme",
    () => `
    <div style="width:400px">
    <calcite-video
    theme="dark"
    disable-scrubbing="${boolean("disable-scrubbing", false)}"
    disable-fullscreen="${boolean("disable-scrubbing", false)}"
    disable-timestamp="${boolean("disable-timestamp", false)}"
    disable-progress="${boolean("disable-progress", false)}"
    disable-controls="${boolean("disable-controls", false)}"
    play-on-hover="${boolean("play-on-hover", false)}"
    show-controls-on-hover="${boolean("show-controls-on-hover", false)}"
    loop="${boolean("loop", false)}"
    autoplay="${boolean("autoplay", false)}"
    muted="${boolean("muted", false)}"
    src="${text(
      "src",
      "https://archive.org/download/untvmi-Family_Strings_-_Billy_Strings_and_Terry_Barber_-_LIVE_2_28_2020/Family_Strings_-_Billy_Strings_and_Terry_Barber_-_LIVE_2_28_2020.mp4"
    )}"
    ></calcite-video>
    </div>
  `,
    { notes, backgrounds: darkBackground }
  )
  .add(
    "RTL",
    () => `
    <div style="width:400px" dir="rtl">
    <calcite-video
    disable-scrubbing="${boolean("disable-scrubbing", false)}"
    disable-fullscreen="${boolean("disable-scrubbing", false)}"
    disable-timestamp="${boolean("disable-timestamp", false)}"
    disable-progress="${boolean("disable-progress", false)}"
    disable-controls="${boolean("disable-controls", false)}"
    play-on-hover="${boolean("play-on-hover", false)}"
    show-controls-on-hover="${boolean("show-controls-on-hover", false)}"
    loop="${boolean("loop", false)}"
    autoplay="${boolean("autoplay", false)}"
    muted="${boolean("muted", false)}"
    src="${text(
      "src",
      "https://archive.org/download/untvmi-Family_Strings_-_Billy_Strings_and_Terry_Barber_-_LIVE_2_28_2020/Family_Strings_-_Billy_Strings_and_Terry_Barber_-_LIVE_2_28_2020.mp4"
    )}"
    ></calcite-video>
    </div>
  `,
    { notes }
  );
