# Calcite Design Tokens

## Getting Started

Install the design tokens module.

```bash
npm install @esri/calcite-design-tokens
```

Reference tokens in your CSS.

```css
@import '@esri/calcite-design-tokens/css';

:root {
  --my-custom-token: var(--calcite-semantic-ui-color-text-1-light);
}
```

Reference tokens in your JavaScript.

```js
import { calciteSemanticUiColorText_1Light } from '@esri/calcite-design-tokens';

export function addTextStyle(component) {
  component.style.color = calciteSemanticUiColorText_1Light;
  
  return component;
}
```

## Token assets

These are the published asset files generated by the token transformer

| Name | CSS | JavaScript (es6) |
| --- | --- | --- |
| Calcite Headless | @esri/calcite-design-tokens/css <br> @esri/calcite-design-tokens/css/headless |  @esri/calcite-design-tokens <br> @esri/calcite-design-tokens/js/headless |
| Calcite Light | @esri/calcite-design-tokens/css/calcite/light |  @esri/calcite-design-tokens/js/calcite/light |
| Calcite Dark | @esri/calcite-design-tokens/css/calcite/dark |  @esri/calcite-design-tokens/js/calcite/dark |
| Calcite Brand Light | @esri/calcite-design-tokens/css/brand/light |  @esri/calcite-design-tokens/js/brand/light |
| Calcite Brand Dark | @esri/calcite-design-tokens/css/brand/dark |  @esri/calcite-design-tokens/js/brand/dark |

For a full list of tokens and their detailes, please refer to https://developers.arcgis.com/calcite-design-system/tokens
