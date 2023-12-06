# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.0](https://github.com/Esri/calcite-design-system/compare/@esri/calcite-design-tokens@1.1.0...@esri/calcite-design-tokens@2.0.0) (2023-12-02)

### ⚠ BREAKING CHANGES

- Change the default export to a tree-shakable list of design tokens in camelCase format rather than a JSON object (`import * as tokens from "@esri/calcite-design-tokens";`)
- Use font name in core font family tokens
- Remove unnecessary core tokens line-height, font-size, letter-spacing, paragraph-spacing as these can be exclusive to semantic and reference core size tokens
- Core size tokens now use their pixel size in their name
- Change `border-radius` to `corner-radius`
- Remove unnecessary `border-width` tokens `none`, `sm`, `md`, `lg`
- Platform output
  - Remove component tokens from global output
  - Add new platform output
    - css
      - index
      - global
      - light
      - dark
      - core
      - breakpoint
      - typography classes
    - scss
      - index
      - global
      - light
      - dark
      - core
      - breakpoints
      - typography mixins
  - Replace "headless" with "global"
  - Remove "calcite" from filenames
- Package.json exports

  - `@esri/calcite-design-tokens/css/headless` is now `@esri/calcite-design-tokens/css/global`
  - `@esri/calcite-design-tokens/scss/headless` is now `@esri/calcite-design-tokens/scss/global`
  - `@esri/calcite-design-tokens/js/headless` is now `@esri/calcite-design-tokens/js/global`
  - `@esri/calcite-design-tokens/es6/headless` is now `@esri/calcite-design-tokens/es6/global`

- Token paths and values
  - Overview
    - use t-shirt sizing to provide more usage context.
    - `breakpoints` becomes `container-size`
    - `border-radius` becomes `corner-radius`
    - Remove "ui" from output platform names in favor of "color"
    - remove core color tokens
    - remove unused component tokens
    - Light Mode and Dark Mode
      - Semantic color tokens now use the composite color scheme token type to reference "light" and "dark" mode instead of having separate light and dark tokens.
      - `.calcite-mode-light` and `.calcite-mode-dark` classes as well as the color scheme media queries are now provided via `calcite-design-tokens/css/index.css`
      - Provide light and dark mode mixins via `calcite-design-tokens/css/index.scss`

#### 2.0 Map of token changes

##### Colors

| old                                            | new                                  |
| ---------------------------------------------- | ------------------------------------ |
| --calcite-ui-brand                             | --calcite-color-brand                |
| --calcite-ui-brand-hover                       | --calcite-color-brand-hover          |
| --calcite-ui-brand-press                       | --calcite-color-brand-press          |
|                                                | --calcite-color-brand-underline      |
| --calcite-ui-background                        | --calcite-color-background           |
| --calcite-ui-foreground-1                      | --calcite-color-foreground-1         |
| --calcite-ui-foreground-2                      | --calcite-color-foreground-2         |
| --calcite-ui-foreground-3                      | --calcite-color-foreground-3         |
| --calcite-semantic-ui-color-foreground-current | --calcite-color-foreground-current   |
|                                                | --calcite-color-transparent          |
|                                                | --calcite-color-transparent-press    |
|                                                | --calcite-color-transparent-hover    |
|                                                | --calcite-color-transparent-scrim    |
|                                                | --calcite-color-transparent-tint     |
| --calcite-ui-text-1                            | --calcite-color-text-1               |
| --calcite-ui-text-2                            | --calcite-color-text-2               |
| --calcite-ui-text-3                            | --calcite-color-text-3               |
| --calcite-ui-text-inverse                      | --calcite-color-text-inverse         |
| --calcite-ui-text-link                         | --calcite-color-text-link            |
| --calcite-ui-border-1                          | --calcite-color-border-1             |
| --calcite-ui-border-2                          | --calcite-color-border-2             |
| --calcite-ui-border-3                          | --calcite-color-border-3             |
| --calcite-ui-border-input                      | --calcite-color-border-input         |
|                                                | --calcite-color-border-white         |
|                                                | --calcite-color-border-ghost         |
| --calcite-ui-info                              | --calcite-color-status-info          |
| --calcite-ui-info-hover                        | --calcite-color-status-info-hover    |
| --calcite-ui-info-press                        | --calcite-color-status-info-press    |
| --calcite-ui-success                           | --calcite-color-status-success       |
| --calcite-ui-success-hover                     | --calcite-color-status-success-hover |
| --calcite-ui-success-press                     | --calcite-color-status-success-press |
| --calcite-ui-warning                           | --calcite-color-status-warning       |
| --calcite-ui-warning-hover                     | --calcite-color-status-warning-hover |
| --calcite-ui-warning-press                     | --calcite-color-status-warning-press |
| --calcite-ui-danger                            | --calcite-color-status-danger        |
| --calcite-ui-danger-hover                      | --calcite-color-status-danger-hover  |
| --calcite-ui-danger-press                      | --calcite-color-status-danger-press  |
| --calcite-ui-inverse                           | --calcite-color-inverse              |
|                                                | --calcite-color-inverse-press        |
|                                                | --calcite-color-inverse-hover        |

##### Z-index

| old                            | new                        |
| ------------------------------ | -------------------------- |
| --calcite-app-z-index          | --calcite-z-index          |
| --calcite-app-z-index-tooltip  | --calcite-z-index-tooltip  |
| --calcite-app-z-index-popup    | --calcite-z-index-popup    |
| --calcite-app-z-index-modal    | --calcite-z-index-modal    |
| --calcite-app-z-index-overlay  | --calcite-z-index-overlay  |
| --calcite-app-z-index-dropdown | --calcite-z-index-dropdown |
| --calcite-app-z-index-toast    | --calcite-z-index-toast    |
| --calcite-app-z-index-header   | --calcite-z-index-header   |
| --calcite-app-z-index-sticky   | --calcite-z-index-sticky   |

##### Breakpoints

| old                                    | new                                    |
| -------------------------------------- | -------------------------------------- |
| --calcite-app-breakpoint-cols-lg       |                                        |
| --calcite-app-breakpoint-cols-md       |                                        |
| --calcite-app-breakpoint-cols-sm       |                                        |
| --calcite-app-breakpoint-cols-xs       |                                        |
| --calcite-app-breakpoint-content-fixed | --calcite-container-size-content-fixed |
| --calcite-app-breakpoint-content-fluid | --calcite-container-size-content-fluid |
| --calcite-app-breakpoint-width-lg      | --calcite-container-size-width-lg-max  |
| --calcite-app-breakpoint-width-md      | --calcite-container-size-width-md-max  |
| --calcite-app-breakpoint-width-sm      | --calcite-container-size-width-sm-max  |
| --calcite-app-breakpoint-width-xs      | --calcite-container-size-width-xs-max  |
| --calcite-app-breakpoint-width-xxs     | --calcite-container-size-width-xxs-max |
|                                        | --calcite-container-size-width-lg-min  |
|                                        | --calcite-container-size-width-md-min  |
|                                        | --calcite-container-size-width-sm-min  |
|                                        | --calcite-container-size-width-xs-min  |
|                                        | --calcite-container-size-width-xxs-min |

##### Spacing/Sizing

| old                        | new                    |
| -------------------------- | ---------------------- |
| --calcite-app-spacing-none |                        |
| --calcite-app-spacing-28   |                        |
| --calcite-app-spacing-27   |                        |
| --calcite-app-spacing-26   |                        |
| --calcite-app-spacing-25   |                        |
| --calcite-app-spacing-24   |                        |
| --calcite-app-spacing-23   |                        |
| --calcite-app-spacing-22   |                        |
| --calcite-app-spacing-21   |                        |
| --calcite-app-spacing-20   |                        |
| --calcite-app-spacing-19   |                        |
| --calcite-app-spacing-18   |                        |
| --calcite-app-spacing-17   |                        |
| --calcite-app-spacing-16   |                        |
| --calcite-app-spacing-15   |                        |
| --calcite-app-spacing-14   |                        |
| --calcite-app-spacing-13   |                        |
| --calcite-app-spacing-12   |                        |
| --calcite-app-spacing-11   | --calcite-spacing-xxxl |
| --calcite-app-spacing-10   |                        |
| --calcite-app-spacing-9    |                        |
| --calcite-app-spacing-8    | --calcite-spacing-xxl  |
| --calcite-app-spacing-7    | --calcite-spacing-xl   |
| --calcite-app-spacing-6    | --calcite-spacing-lg   |
| --calcite-app-spacing-5    | --calcite-spacing-md   |
| --calcite-app-spacing-4    |                        |
| --calcite-app-spacing-3    | --calcite-spacing-sm   |
| --calcite-app-spacing-2    | --calcite-spacing-xs   |
| --calcite-app-spacing-1    | --calcite-spacing-xxs  |
| --calcite-app-spacing-0    | --calcite-spacing-base |
|                            | --calcite-spacing-px   |
| --calcite-app-sizing-none  |                        |
| --calcite-app-sizing-28    |                        |
| --calcite-app-sizing-27    |                        |
| --calcite-app-sizing-26    |                        |
| --calcite-app-sizing-25    |                        |
| --calcite-app-sizing-24    |                        |
| --calcite-app-sizing-23    |                        |
| --calcite-app-sizing-22    |                        |
| --calcite-app-sizing-21    |                        |
| --calcite-app-sizing-20    |                        |
| --calcite-app-sizing-19    |                        |
| --calcite-app-sizing-18    |                        |
| --calcite-app-sizing-17    |                        |
| --calcite-app-sizing-16    |                        |
| --calcite-app-sizing-15    |                        |
| --calcite-app-sizing-14    |                        |
| --calcite-app-sizing-13    |                        |
| --calcite-app-sizing-12    |                        |
| --calcite-app-sizing-11    | --calcite-size-xxxl    |
| --calcite-app-sizing-10    |                        |
| --calcite-app-sizing-9     | --calcite-size-xxl     |
| --calcite-app-sizing-8     | --calcite-size-xl      |
| --calcite-app-sizing-7     | --calcite-size-lg      |
| --calcite-app-sizing-6     | --calcite-size-md-plus |
| --calcite-app-sizing-5     | --calcite-size-md      |
| --calcite-app-sizing-4     | --calcite-size-sm-plus |
| --calcite-app-sizing-3     | --calcite-size-sm      |
| --calcite-app-sizing-2     | --calcite-size-xs      |
| --calcite-app-sizing-1     | --calcite-size-xxs     |
| --calcite-app-sizing-0     | --calcite-size-xxxs    |
|                            | --calcite-size-px      |

##### Opacity

| new                       | old                         |
| ------------------------- | --------------------------- |
| --calcite-app-opacity-100 | --calcite-app-opacity-full  |
| --calcite-app-opacity-96  |                             |
| --calcite-app-opacity-92  |                             |
| --calcite-app-opacity-90  |                             |
| --calcite-app-opacity-85  | --calcite-app-opacity-dark  |
| --calcite-app-opacity-80  |                             |
| --calcite-app-opacity-70  |                             |
| --calcite-app-opacity-60  |                             |
| --calcite-app-opacity-50  | --calcite-app-opacity-half  |
| --calcite-app-opacity-40  | --calcite-app-opacity-light |
| --calcite-app-opacity-30  |                             |
| --calcite-app-opacity-20  |                             |
| --calcite-app-opacity-10  |                             |
| --calcite-app-opacity-8   |                             |
| --calcite-app-opacity-4   |                             |
| --calcite-app-opacity-0   |                             |

##### Border

| old                               | new                           |
| --------------------------------- | ----------------------------- |
| --calcite-app-border-width-none   | --calcite-border-width-none   |
| --calcite-app-border-width-4      |                               |
| --calcite-app-border-width-3      |                               |
| --calcite-app-border-width-2      | --calcite-border-width-lg     |
| --calcite-app-border-width-1      | --calcite-border-width-md     |
| --calcite-app-border-width-0      | --calcite-border-width-sm     |
| --calcite-app-border-radius-full  | --calcite-corner-radius-pill  |
| --calcite-app-border-radius-half: |                               |
| --calcite-app-border-radius-none  | --calcite-corner-radius-sharp |
| --calcite-app-border-radius-6     |                               |
| --calcite-app-border-radius-5     |                               |
| --calcite-app-border-radius-4     |                               |
| --calcite-app-border-radius-3     |                               |
| --calcite-app-border-radius-2     |                               |
| --calcite-app-border-radius-1     | --calcite-corner-radius-round |
| --calcite-app-border-radius-0     | --calcite-corner-radius-0     |

##### Font

| old                                             | new                                         |
| ----------------------------------------------- | ------------------------------------------- |
| --calcite-app-font-text-case-capitalize         | --calcite-font-text-case-capitalize         |
| --calcite-app-font-text-case-lowercase          | --calcite-font-text-case-lowercase          |
| --calcite-app-font-text-case-uppercase          | --calcite-font-text-case-uppercase          |
| --calcite-app-font-text-case-none               | --calcite-font-text-case-none               |
| --calcite-app-font-text-decoration-underline    | --calcite-font-text-decoration-underline    |
| --calcite-app-font-text-decoration-none         | --calcite-font-text-decoration-none         |
| --calcite-app-font-paragraph-spacing-normal     | --calcite-font-paragraph-spacing-normal     |
| --calcite-app-font-letter-spacing-wide          | --calcite-font-letter-spacing-wide          |
| --calcite-app-font-letter-spacing-normal        | --calcite-font-letter-spacing-normal        |
| --calcite-app-font-letter-spacing-tight         | --calcite-font-letter-spacing-tight         |
| --calcite-app-font-size-15:                     |                                             |
| --calcite-app-font-size-14:                     |                                             |
| --calcite-app-font-size-13:                     |                                             |
| --calcite-app-font-size-12:                     |                                             |
| --calcite-app-font-size-11:                     |                                             |
| --calcite-app-font-size-10:                     |                                             |
| --calcite-app-font-size-9:                      |                                             |
| --calcite-app-font-size-8:                      |                                             |
| --calcite-app-font-size-7:                      |                                             |
| --calcite-app-font-size-6:                      | --calcite-font-size-xxl                     |
| --calcite-app-font-size-5:                      | --calcite-font-size-xl                      |
| --calcite-app-font-size-4:                      | --calcite-font-size-lg                      |
| --calcite-app-font-size-3:                      | --calcite-font-size-md                      |
| --calcite-app-font-size-2:                      | --calcite-font-size                         |
| --calcite-app-font-size-1:                      | --calcite-font-size-sm                      |
| --calcite-app-font-size-0:                      | --calcite-font-size-xs                      |
| --calcite-app-font-line-height-relative-loose   | --calcite-font-line-height-relative-loose   |
| --calcite-app-font-line-height-relative-relaxed | --calcite-font-line-height-relative-relaxed |
| --calcite-app-font-line-height-relative-normal  | --calcite-font-line-height-relative-normal  |
| --calcite-app-font-line-height-relative-snug    | --calcite-font-line-height-relative-snug    |
| --calcite-app-font-line-height-relative-tight   | --calcite-font-line-height-relative-tight   |
| --calcite-app-font-line-height-relative         | --calcite-font-line-height-relative         |
| --calcite-app-font-line-height-fixed-12         |                                             |
| --calcite-app-font-line-height-fixed-11         |                                             |
| --calcite-app-font-line-height-fixed-10         |                                             |
| --calcite-app-font-line-height-fixed-9          |                                             |
| --calcite-app-font-line-height-fixed-8          |                                             |
| --calcite-app-font-line-height-fixed-7          |                                             |
| --calcite-app-font-line-height-fixed-6          |                                             |
| --calcite-app-font-line-height-fixed-5          |                                             |
| --calcite-app-font-line-height-fixed-4          |                                             |
| --calcite-app-font-line-height-fixed-3          | --calcite-font-line-height-fixed-xl         |
| --calcite-app-font-line-height-fixed-2          | --calcite-font-line-height-fixed-lg         |
| --calcite-app-font-line-height-fixed-1          |                                             |
| --calcite-app-font-line-height-fixed            | --calcite-font-line-height-fixed-sm         |
| --calcite-app-font-weight-heavy:                |                                             |
| --calcite-app-font-weight-black:                |                                             |
| --calcite-app-font-weight-extrabold:            |                                             |
| --calcite-app-font-weight-bold:                 | --calcite-font-weight-bold                  |
| --calcite-app-font-weight-demi:                 | --calcite-font-weight-semibold              |
| --calcite-app-font-weight-medium-italic         |                                             |
| --calcite-app-font-weight-medium:               | --calcite-font-weight-medium                |
| --calcite-app-font-weight-regular:              | --calcite-font-weight-regular               |
|                                                 | --calcite-font-weight-normal                |
| --calcite-app-font-weight-light:                | --calcite-font-weight-light                 |
| --calcite-app-font-weight-thin:                 |                                             |
| --calcite-app-font-weight-ultralight:           |                                             |
| --calcite-app-font-family-code:                 | --calcite-font-family-code                  |
| --calcite-app-font-family-secondary:            |                                             |
| --calcite-app-font-family-primary:              | --calcite-font-family-primary               |

### Features

- Add json to design token output ([#8290](https://github.com/Esri/calcite-design-system/issues/8290)) ([753061f](https://github.com/Esri/calcite-design-system/commit/753061f6fc35d95472c7bfb3ec956a89624d6d43))
- Reduce global design tokens in calcite.css ([#8215](https://github.com/Esri/calcite-design-system/issues/8215)) ([335d010](https://github.com/Esri/calcite-design-system/commit/335d0106ef0f9d0ce71bda8d2c826bccfedc4995))
- Update default main file output for design tokens ([#8299](https://github.com/Esri/calcite-design-system/issues/8299)) ([4050a91](https://github.com/Esri/calcite-design-system/commit/4050a913d37fca76b79dfe97956a9ce2beef948c))
- Update json shape for docs ([#8308](https://github.com/Esri/calcite-design-system/issues/8308)) ([6fac3e9](https://github.com/Esri/calcite-design-system/commit/6fac3e98b802232385aaf65d54417bea1e9d65c8))

### Bug Fixes

- Align tokens with figma variables ([#8311](https://github.com/Esri/calcite-design-system/issues/8311)) ([8d7cf3f](https://github.com/Esri/calcite-design-system/commit/8d7cf3f9bca3e908c1b0383209b348640c623084))

## [1.1.0](https://github.com/Esri/calcite-design-system/compare/@esri/calcite-design-tokens@1.0.0...@esri/calcite-design-tokens@1.1.0) (2023-10-30)

### Features

- Add icon tokens ([#8008](https://github.com/Esri/calcite-design-system/issues/8008)) ([3623df1](https://github.com/Esri/calcite-design-system/commit/3623df1bbd5413bf5198fb343b342030ee1d40b8))
- Add js platform formats to calcite-design-tokens ([#8044](https://github.com/Esri/calcite-design-system/issues/8044)) ([0e1fefb](https://github.com/Esri/calcite-design-system/commit/0e1fefbd93bc37bad7006b1c15d1ed633bfb454e))
- Add xxs breakpoint to tokens ([#7992](https://github.com/Esri/calcite-design-system/issues/7992)) ([05512b6](https://github.com/Esri/calcite-design-system/commit/05512b6e5b58d4391972dfc9bbf559503301a025))
- Reorganize breakpoints ([#7994](https://github.com/Esri/calcite-design-system/issues/7994)) ([c64a059](https://github.com/Esri/calcite-design-system/commit/c64a059f9b4f9865bc7234ad6892570ed419d779))

## [1.0.0](2023-05-11)

### Features

- Uses @token-studio tokens format
- Add css platform
- Add scss platform
