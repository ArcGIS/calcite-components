module.exports = {
  projectRepo: "Esri/calcite-components-chrome-87",
  storybookConfigDir: ".storybook",
  storybookStaticDir: "./__docs-temp__",
  apiKey: process.env.SCREENER_API_KEY,
  commit: process.env.COMMIT_SHA,
  baseBranch: "master",
  browsers: [
    {
      browserName: "chrome"
    }
  ],
  diffOptions: {
    minLayoutDimension: 1,
    minLayoutPosition: 1
  },
  excludeRules: [/^Overview/],
  resolution: "1920x1440"
};
