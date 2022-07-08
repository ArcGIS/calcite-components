const fs = require("fs");
const path = require("path");

(async function () {
  const stylePath = path.normalize(`${__dirname}/../src/assets/styles/_hydration.scss`);
  const components = await fs.promises.readdir(path.normalize(`${__dirname}/../src/components/`), {
    withFileTypes: true
  });
  const selectors = components
    .filter((entry) => entry.isDirectory() && !entry.name.includes("calcite-"))
    .map(({ name }) => `calcite-${name}:not([calcite-hydrated])`);
  const fileContents = `// generated by support/hydrationStyles.ts
${selectors.join(",\n")} {
  visibility: hidden;
  pointer-events: none;
}`;
  await fs.promises.writeFile(stylePath, fileContents);
  process.exit(0);
})();
