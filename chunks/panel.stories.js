import { b as c, m as D } from "./utils.js";
import { h as t } from "./formatting.js";
import { A as E } from "./resources14.js";
import { a as N, p as V } from "./floating-ui.js";
import { S as i } from "./resources6.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const {
  collapseDirection: q,
  scale: l
} = E, J = {
  title: "Components/Panel",
  args: {
    menuPlacement: N,
    closed: !1,
    disabled: !1,
    closable: !1,
    collapsed: !1,
    collapsible: !1,
    collapseDirection: q.defaultValue,
    heightScale: l.defaultValue,
    scale: l.defaultValue,
    loading: !1
  },
  argTypes: {
    menuPlacement: {
      options: V,
      control: {
        type: "select"
      }
    },
    collapseDirection: {
      options: q.values,
      control: {
        type: "select"
      }
    },
    heightScale: {
      options: l.values,
      control: {
        type: "select"
      }
    },
    scale: {
      options: l.values,
      control: {
        type: "select"
      }
    }
  }
}, j = `<h3 class="heading" slot="${i.headerContent}">Heading</h3>`, n = t`
  <p>
    Enim nascetur erat faucibus ornare varius arcu fames bibendum habitant felis elit ante. Nibh morbi massa curae; leo
    semper diam aenean congue taciti eu porta. Varius faucibus ridiculus donec. Montes sit ligula purus porta ante lacus
    habitasse libero cubilia purus! In quis congue arcu maecenas felis cursus pellentesque nascetur porta donec non.
    Quisque, rutrum ligula pharetra justo habitasse facilisis rutrum neque. Magnis nostra nec nulla dictumst taciti
    consectetur. Non porttitor tempor orci dictumst magna porta vitae.
  </p>
  <p>
    Ipsum nostra tempus etiam augue ullamcorper scelerisque sapien potenti erat nisi gravida. Vehicula sem tristique
    sed. Nullam, sociis imperdiet ullamcorper? Dapibus fames primis ridiculus vulputate, habitant inceptos! Nunc
    torquent lorem urna vehicula volutpat donec nec. Orci massa eu nec donec enim fames, faucibus quam aenean. Laoreet
    tellus tempor quisque ornare lobortis praesent erat senectus natoque consectetur donec imperdiet. Quis sem cum
    gravida dictumst a pretium purus aptent amet id. Orci habitasse, praesent facilisis condimentum. Nec elit turpis
    leo.
  </p>
  <p>
    Tempus per volutpat diam tempor mauris parturient vulputate leo id libero quisque. Mattis aliquam dictum venenatis
    fringilla. Taciti venenatis, ultrices sollicitudin consequat. Sapien fusce est iaculis potenti ut auctor potenti.
    Nisi malesuada feugiat vulputate vitae porttitor. Nullam nullam nullam accumsan quis magna in. Elementum, nascetur
    gravida cras scelerisque inceptos aenean inceptos potenti. Lobortis condimentum accumsan posuere curabitur fermentum
    diam, natoque quisque. Eget placerat sed aptent orci urna fusce magnis. Vel lacus magnis nunc.
  </p>
`, e = t`
  <calcite-button slot="${i.footerStart}" width="half" appearance="outline">Footer start</calcite-button>
  <calcite-button slot="${i.footerEnd}" width="half">Footer end</calcite-button>
`, U = `${j}
  <calcite-action text="Action" label="Action" slot="${i.headerActionsStart}" icon="bluetooth"></calcite-action>
  <calcite-action text="Action" label="Action" slot="${i.headerActionsEnd}" icon="attachment"></calcite-action>
  ${n}
  ${e}`, s = (a) => t`
  <calcite-panel
    ${c("closed", a.closed)}
    ${c("disabled", a.disabled)}
    ${c("closable", a.closable)}
    ${c("collapsed", a.collapsed)}
    ${c("collapsible", a.collapsible)}
    collapseDirection="${a.collapseDirection}"
    heightScale="${a.heightScale}"
    scale="${a.scale}"
    ${c("loading", a.loading)}
    menu-placement="${a.menuPlacement}"
    heading="Heading"
    description="A great panel description"
  >
    <calcite-action text="Action" label="Action" slot="${i.headerActionsStart}" icon="bluetooth"></calcite-action>
    <calcite-action text="Action" label="Action" slot="${i.headerActionsEnd}" icon="attachment"></calcite-action>
    ${n}
    <calcite-fab slot="fab"></calcite-fab>
    ${e}
  </calcite-panel>
`, r = () => t`
  <div style="width: 300px;">
    <calcite-panel
      height-scale="s"
      heading-level="2"
      description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall."
      heading="Panel title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum"
    />
  </div>
`, d = () => t`
  <calcite-panel style="height: 100%;" heading="Heading" disabled>
    <div id="content" style="height: 100%;">${n}</div>
  </calcite-panel>
`, o = () => t`
  <calcite-panel collapse-direction="down" height-scale="m" dir="rtl" class="calcite-mode-dark">
    ${U}
  </calcite-panel>
`;
o.parameters = {
  themes: D
};
const p = () => t`
  <calcite-panel
    style="height: 100%;"
    closable
    heading="Closable with actions"
    description="A panel that can be closed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">${n}</div>
    ${e}
  </calcite-panel>
`, h = () => t`
  <calcite-panel
    style="height: 100%;"
    collapsible
    heading="Collapsible without actions"
    description="A panel that can be collapsed"
  >
    <div id="content" style="height: 100%;">${n}</div>
    ${e}
  </calcite-panel>
`, u = () => t`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">${n}</div>
    ${e}
  </calcite-panel>
`, b = () => t`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    collapse-direction="up"
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">${n}</div>
    ${e}
  </calcite-panel>
`, m = () => t`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    collapsed
    collapse-direction="up"
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">${n}</div>
    ${e}
  </calcite-panel>
`, g = () => t`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    collapsed
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">${n}</div>
    ${e}
  </calcite-panel>
`, y = () => t`<div style="width: 300px;">
    <calcite-panel height-scale="s">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" icon="plus"> </calcite-action>
          <calcite-action text="Save" icon="save"> </calcite-action>
          <calcite-action text="Layers" icon="layers"> </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <div slot="header-content">Header!</div>
      <p>Slotted content!</p>
    </calcite-panel>
  </div>`, f = () => t`<div style="width: 300px;">
    <calcite-panel height-scale="s" style="--calcite-panel-footer-padding: 20px;">
      <div slot="header-content">Header!</div>
      <p>Slotted content!</p>
      <calcite-button type="button" slot="footer">1</calcite-button>
      <calcite-button type="button" slot="footer">2</calcite-button>
      <calcite-button type="button" slot="footer-start">3</calcite-button>
      <calcite-button type="button" slot="footer-start">4</calcite-button>
      <calcite-button type="button" slot="footer-end">5</calcite-button>
      <calcite-button type="button" slot="footer-end">6</calcite-button>
      <calcite-button type="button" slot="footer-actions">7</calcite-button>
      <calcite-button type="button" slot="footer-actions">8</calcite-button>
    </calcite-panel>
  </div>`, v = () => t`<h2>footer-actions (Deprecated): Auto width</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-actions">1</calcite-button>
        <calcite-button type="button" slot="footer-actions">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-actions (Deprecated): Full width</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer-actions">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer-actions">2</calcite-button>
      </calcite-panel>
    </div>`, x = () => t`<h2>footer</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start only</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-start">1</calcite-button>
        <calcite-button type="button" slot="footer-start">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-end only</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-end">1</calcite-button>
        <calcite-button type="button" slot="footer-end">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start and footer-end auto width</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-start">1</calcite-button>
        <calcite-button type="button" slot="footer-start">2</calcite-button>
        <calcite-button type="button" slot="footer-end">3</calcite-button>
        <calcite-button type="button" slot="footer-end">4</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start and footer-end full width single</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer-start">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer-end">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start and footer-end full width multiple</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer-start">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer-start">2</calcite-button>
        <calcite-button width="full" type="button" slot="footer-end">3</calcite-button>
        <calcite-button width="full" type="button" slot="footer-end">4</calcite-button>
      </calcite-panel>
    </div>`, w = () => t`<calcite-panel height-scale="s" style="width: 300px;">
    <calcite-action-bar slot="action-bar" expand-disabled>
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save"> </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <div slot="header-content">Header!</div>
    <p>Slotted content!</p>
    <p style="height: 400px">Hello world!</p>
    <p style="height: 400px">Hello world!</p>
    <p style="height: 400px">Hello world!</p>
    <p slot="footer">Footer!</p>
  </calcite-panel>`, S = () => t`<calcite-panel
    height-scale="s"
    heading="Header!"
    style="width: 300px; height:auto; --calcite-panel-header-border-block-end:none;"
  >
    <p slot="footer">Footer!</p>
  </calcite-panel>`, T = () => t`<calcite-panel
    height-scale="s"
    heading="Header!"
    style="width: 300px; height:auto; --calcite-panel-header-border-block-end:none;"
  >
    <calcite-action-bar slot="action-bar">
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save"> </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
  </calcite-panel>`, M = () => t`<calcite-panel style="width: 400px;" height-scale="s" menu-open>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <calcite-action-bar slot="action-bar">
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save">
          <calcite-tooltip open overlay-positioning="fixed" placement="top" slot="tooltip">test</calcite-tooltip>
        </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <p>Some content</p></calcite-panel
  >`, A = () => t`<calcite-panel
    height-scale="s"
    heading="Header!"
    style="width: 300px; height:auto; --calcite-panel-header-border-block-end:none;"
  >
    <calcite-action-bar slot="action-bar">
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save"> </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <p slot="footer">Footer!</p>
  </calcite-panel>`, H = () => t`<calcite-panel style="height: 300px; width: 500px" heading="My Panel"
    ><div
      style="display: flex; flex-direction: column; height: 100%; width: 100%; background-size: 16px 16px; background-color: gray; background-image: radial-gradient(
    circle,
    white 1px,
    transparent 1px
  );"
    ></div
  ></calcite-panel>`, $ = () => t`<calcite-panel style="height: 300px; width: 500px" heading="My Panel"
    ><div
      style="display: flex; flex-direction: column; height: 100%; width: 100%; background-size: 16px 16px; background-color: gray; background-image: radial-gradient(
  circle,
  white 1px,
  transparent 1px
);"
    ></div>
    <calcite-fab slot="fab"></calcite-fab
  ></calcite-panel>`, C = () => t` <style>
      .container {
        max-height: 300px;
        width: 300px;
      }
    </style>
    <div class="container">
      <calcite-panel heading="My Panel">
        <calcite-list>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
        </calcite-list>
      </calcite-panel>
    </div>`, k = () => t` <calcite-panel style="max-height: 300px; height: 300px; width: 500px" heading="My Panel"
    ><div style="min-height: 500px">My Content</div>
    <calcite-fab slot="fab"></calcite-fab
  ></calcite-panel>`, O = () => t` <calcite-panel style="max-height: 300px; height: 300px; width: 500px" heading="My Panel"
    ><div>My Content</div>
    <calcite-fab slot="fab"></calcite-fab
  ></calcite-panel>`, _ = () => t`<calcite-panel height-scale="s" heading="My Panel">Slotted content!</calcite-panel>`, L = () => t`<calcite-panel style="--calcite-panel-header-border-block-end:none;" height-scale="s" heading="My Panel"
    >Slotted content!</calcite-panel
  >`, P = () => t`
  <div style="height: 350px; width: 400px; display: flex">
    <calcite-panel height-scale="s">
      <div slot="header-content">Header!</div>
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" icon="plus"> </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <div slot="content-top">Slot for a content-top.</div>
      <p>Slotted content!</p>
      <p>Hello world!</p>
      <p>Hello world!</p>
      <p>Hello world!</p>
      <div slot="content-bottom">Slot for a content-bottom.</div>
      <p slot="footer">Footer!</p>
    </calcite-panel>
  </div>
`, F = () => t`
  <calcite-panel style="height: 200px; width: 300px;">
    <div slot="header-content">header-content slot</div>
    <p>Slotted content!</p>
    <div slot="content-bottom">Slot for a content-bottom.</div>
    <calcite-button type="button" slot="footer-start" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer start</calcite-button
    >
    <calcite-button type="button" slot="footer-end" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer end</calcite-button
    >
  </calcite-panel>
`, B = () => t`
  <calcite-panel style="height: 500px; width: 800px;">
    <calcite-alert slot="alerts" open label="this is a default alert" scale="s">
      <div slot="title">Hello there!</div>
      <div slot="message">This is an alert with a general piece of information. Cool, innit?</div>
    </calcite-alert>
    <div slot="header-content">header-content slot</div>
    <p>Slotted content!</p>
    <div slot="content-bottom">Slot for a content-bottom.</div>
    <calcite-button type="button" slot="footer-start" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer start</calcite-button
    >
    <calcite-button type="button" slot="footer-end" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer end</calcite-button
    >
  </calcite-panel>
`, I = () => t`
  <calcite-panel style="height: 200px">
    <p>Slotted content!</p>
    <div slot="header-content">header-content slot</div>
    <div slot="content-bottom">Slot for a content-bottom.</div>
    <calcite-button
      type="button"
      slot="footer"
      kind="neutral"
      scale="s"
      id="card-icon-test-1"
      icon-start="check"
      width="full"
    ></calcite-button>
    ${e}
  </calcite-panel>
`, W = () => t`
  <calcite-panel
    heading="This is a heading"
    description="And that's a description"
    scale="s"
    style="height: 220px; margin: 50px;"
  >
    <div slot="content-top">Content Top</div>
    <div>Instead of the mahi-mahi, may I just get the one mahi because I’m not that hungry?</div>
    <div slot="content-bottom">Content Bottom</div>
    ${e}
  </calcite-panel>
  <calcite-panel
    heading="This is a heading"
    description="And that's a description"
    scale="m"
    style="height: 250px; margin: 50px;"
  >
    <div slot="content-top">Content Top</div>
    <div>Instead of the mahi-mahi, may I just get the one mahi because I’m not that hungry?</div>
    <div slot="content-bottom">Content Bottom</div>
    ${e}
  </calcite-panel>
  <calcite-panel
    heading="This is a heading"
    description="And that's a description"
    scale="l"
    style="height: 260px; margin: 50px;"
  >
    <div slot="content-top">Content Top</div>
    <div>Instead of the mahi-mahi, may I just get the one mahi because I’m not that hungry?</div>
    <div slot="content-bottom">Content Bottom</div>
    ${e}
  </calcite-panel>
`;
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: PanelStoryArgs): string => html\`
  <calcite-panel
    \${boolean("closed", args.closed)}
    \${boolean("disabled", args.disabled)}
    \${boolean("closable", args.closable)}
    \${boolean("collapsed", args.collapsed)}
    \${boolean("collapsible", args.collapsible)}
    collapseDirection="\${args.collapseDirection}"
    heightScale="\${args.heightScale}"
    scale="\${args.scale}"
    \${boolean("loading", args.loading)}
    menu-placement="\${args.menuPlacement}"
    heading="Heading"
    description="A great panel description"
  >
    <calcite-action text="Action" label="Action" slot="\${SLOTS.headerActionsStart}" icon="bluetooth"></calcite-action>
    <calcite-action text="Action" label="Action" slot="\${SLOTS.headerActionsEnd}" icon="attachment"></calcite-action>
    \${contentHTML}
    <calcite-fab slot="fab"></calcite-fab>
    \${footerHTML}
  </calcite-panel>
\``,
      ...s.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="width: 300px;">
    <calcite-panel
      height-scale="s"
      heading-level="2"
      description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall."
      heading="Panel title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum Tile title lorem ipsum"
    />
  </div>
\``,
      ...r.parameters?.docs?.source
    }
  }
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel style="height: 100%;" heading="Heading" disabled>
    <div id="content" style="height: 100%;">\${contentHTML}</div>
  </calcite-panel>
\``,
      ...d.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel collapse-direction="down" height-scale="m" dir="rtl" class="calcite-mode-dark">
    \${panelContent}
  </calcite-panel>
\``,
      ...o.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    style="height: 100%;"
    closable
    heading="Closable with actions"
    description="A panel that can be closed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">\${contentHTML}</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...p.parameters?.docs?.source
    }
  }
};
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    style="height: 100%;"
    collapsible
    heading="Collapsible without actions"
    description="A panel that can be collapsed"
  >
    <div id="content" style="height: 100%;">\${contentHTML}</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...h.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">\${contentHTML}</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...u.parameters?.docs?.source
    }
  }
};
b.parameters = {
  ...b.parameters,
  docs: {
    ...b.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    collapse-direction="up"
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">\${contentHTML}</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...b.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    collapsed
    collapse-direction="up"
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">\${contentHTML}</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...m.parameters?.docs?.source
    }
  }
};
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    style="height: 100%;"
    closable
    collapsible
    collapsed
    heading="Collapsible with actions"
    description="A panel that can be collapsed"
  >
    <calcite-action text="information" text-enabled icon="information" slot="header-actions-start"></calcite-action>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <div id="content" style="height: 100%;">\${contentHTML}</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...g.parameters?.docs?.source
    }
  }
};
y.parameters = {
  ...y.parameters,
  docs: {
    ...y.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<div style="width: 300px;">
    <calcite-panel height-scale="s">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" icon="plus"> </calcite-action>
          <calcite-action text="Save" icon="save"> </calcite-action>
          <calcite-action text="Layers" icon="layers"> </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <div slot="header-content">Header!</div>
      <p>Slotted content!</p>
    </calcite-panel>
  </div>\``,
      ...y.parameters?.docs?.source
    }
  }
};
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<div style="width: 300px;">
    <calcite-panel height-scale="s" style="--calcite-panel-footer-padding: 20px;">
      <div slot="header-content">Header!</div>
      <p>Slotted content!</p>
      <calcite-button type="button" slot="footer">1</calcite-button>
      <calcite-button type="button" slot="footer">2</calcite-button>
      <calcite-button type="button" slot="footer-start">3</calcite-button>
      <calcite-button type="button" slot="footer-start">4</calcite-button>
      <calcite-button type="button" slot="footer-end">5</calcite-button>
      <calcite-button type="button" slot="footer-end">6</calcite-button>
      <calcite-button type="button" slot="footer-actions">7</calcite-button>
      <calcite-button type="button" slot="footer-actions">8</calcite-button>
    </calcite-panel>
  </div>\``,
      ...f.parameters?.docs?.source
    }
  }
};
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<h2>footer-actions (Deprecated): Auto width</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-actions">1</calcite-button>
        <calcite-button type="button" slot="footer-actions">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-actions (Deprecated): Full width</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer-actions">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer-actions">2</calcite-button>
      </calcite-panel>
    </div>\``,
      ...v.parameters?.docs?.source
    }
  }
};
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<h2>footer</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start only</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-start">1</calcite-button>
        <calcite-button type="button" slot="footer-start">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-end only</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-end">1</calcite-button>
        <calcite-button type="button" slot="footer-end">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start and footer-end auto width</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button type="button" slot="footer-start">1</calcite-button>
        <calcite-button type="button" slot="footer-start">2</calcite-button>
        <calcite-button type="button" slot="footer-end">3</calcite-button>
        <calcite-button type="button" slot="footer-end">4</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start and footer-end full width single</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer-start">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer-end">2</calcite-button>
      </calcite-panel>
    </div>
    <h2>footer-start and footer-end full width multiple</h2>
    <div style="width: 300px;">
      <calcite-panel height-scale="s">
        <div slot="header-content">Header!</div>
        <p>Slotted content!</p>
        <calcite-button width="full" type="button" slot="footer-start">1</calcite-button>
        <calcite-button width="full" type="button" slot="footer-start">2</calcite-button>
        <calcite-button width="full" type="button" slot="footer-end">3</calcite-button>
        <calcite-button width="full" type="button" slot="footer-end">4</calcite-button>
      </calcite-panel>
    </div>\``,
      ...x.parameters?.docs?.source
    }
  }
};
w.parameters = {
  ...w.parameters,
  docs: {
    ...w.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel height-scale="s" style="width: 300px;">
    <calcite-action-bar slot="action-bar" expand-disabled>
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save"> </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <div slot="header-content">Header!</div>
    <p>Slotted content!</p>
    <p style="height: 400px">Hello world!</p>
    <p style="height: 400px">Hello world!</p>
    <p style="height: 400px">Hello world!</p>
    <p slot="footer">Footer!</p>
  </calcite-panel>\``,
      ...w.parameters?.docs?.source
    }
  }
};
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel
    height-scale="s"
    heading="Header!"
    style="width: 300px; height:auto; --calcite-panel-header-border-block-end:none;"
  >
    <p slot="footer">Footer!</p>
  </calcite-panel>\``,
      ...S.parameters?.docs?.source
    }
  }
};
T.parameters = {
  ...T.parameters,
  docs: {
    ...T.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel
    height-scale="s"
    heading="Header!"
    style="width: 300px; height:auto; --calcite-panel-header-border-block-end:none;"
  >
    <calcite-action-bar slot="action-bar">
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save"> </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
  </calcite-panel>\``,
      ...T.parameters?.docs?.source
    }
  }
};
M.parameters = {
  ...M.parameters,
  docs: {
    ...M.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel style="width: 400px;" height-scale="s" menu-open>
    <calcite-action text="banana" text-enabled icon="banana" slot="header-menu-actions"></calcite-action>
    <calcite-action text="measure" text-enabled icon="measure" slot="header-menu-actions"></calcite-action>
    <calcite-action-bar slot="action-bar">
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save">
          <calcite-tooltip open overlay-positioning="fixed" placement="top" slot="tooltip">test</calcite-tooltip>
        </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <p>Some content</p></calcite-panel
  >\``,
      ...M.parameters?.docs?.source
    }
  }
};
A.parameters = {
  ...A.parameters,
  docs: {
    ...A.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel
    height-scale="s"
    heading="Header!"
    style="width: 300px; height:auto; --calcite-panel-header-border-block-end:none;"
  >
    <calcite-action-bar slot="action-bar">
      <calcite-action-group>
        <calcite-action text="Add" icon="plus"> </calcite-action>
        <calcite-action text="Save" icon="save"> </calcite-action>
        <calcite-action text="Layers" icon="layers"> </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <p slot="footer">Footer!</p>
  </calcite-panel>\``,
      ...A.parameters?.docs?.source
    }
  }
};
H.parameters = {
  ...H.parameters,
  docs: {
    ...H.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel style="height: 300px; width: 500px" heading="My Panel"
    ><div
      style="display: flex; flex-direction: column; height: 100%; width: 100%; background-size: 16px 16px; background-color: gray; background-image: radial-gradient(
    circle,
    white 1px,
    transparent 1px
  );"
    ></div
  ></calcite-panel>\``,
      ...H.parameters?.docs?.source
    }
  }
};
$.parameters = {
  ...$.parameters,
  docs: {
    ...$.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-panel style="height: 300px; width: 500px" heading="My Panel"
    ><div
      style="display: flex; flex-direction: column; height: 100%; width: 100%; background-size: 16px 16px; background-color: gray; background-image: radial-gradient(
  circle,
  white 1px,
  transparent 1px
);"
    ></div>
    <calcite-fab slot="fab"></calcite-fab
  ></calcite-panel>\``,
      ...$.parameters?.docs?.source
    }
  }
};
C.parameters = {
  ...C.parameters,
  docs: {
    ...C.parameters?.docs,
    source: {
      originalSource: `(): string => html\` <style>
      .container {
        max-height: 300px;
        width: 300px;
      }
    </style>
    <div class="container">
      <calcite-panel heading="My Panel">
        <calcite-list>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
          <calcite-list-item label="My list item" description="My description"></calcite-list-item>
        </calcite-list>
      </calcite-panel>
    </div>\``,
      ...C.parameters?.docs?.source
    }
  }
};
k.parameters = {
  ...k.parameters,
  docs: {
    ...k.parameters?.docs,
    source: {
      originalSource: `(): string => html\` <calcite-panel style="max-height: 300px; height: 300px; width: 500px" heading="My Panel"
    ><div style="min-height: 500px">My Content</div>
    <calcite-fab slot="fab"></calcite-fab
  ></calcite-panel>\``,
      ...k.parameters?.docs?.source
    }
  }
};
O.parameters = {
  ...O.parameters,
  docs: {
    ...O.parameters?.docs,
    source: {
      originalSource: `(): string => html\` <calcite-panel style="max-height: 300px; height: 300px; width: 500px" heading="My Panel"
    ><div>My Content</div>
    <calcite-fab slot="fab"></calcite-fab
  ></calcite-panel>\``,
      ...O.parameters?.docs?.source
    }
  }
};
_.parameters = {
  ..._.parameters,
  docs: {
    ..._.parameters?.docs,
    source: {
      originalSource: '(): string => html`<calcite-panel height-scale="s" heading="My Panel">Slotted content!</calcite-panel>`',
      ..._.parameters?.docs?.source
    }
  }
};
L.parameters = {
  ...L.parameters,
  docs: {
    ...L.parameters?.docs,
    source: {
      originalSource: '(): string => html`<calcite-panel style="--calcite-panel-header-border-block-end:none;" height-scale="s" heading="My Panel"\n    >Slotted content!</calcite-panel\n  >`',
      ...L.parameters?.docs?.source
    }
  }
};
P.parameters = {
  ...P.parameters,
  docs: {
    ...P.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <div style="height: 350px; width: 400px; display: flex">
    <calcite-panel height-scale="s">
      <div slot="header-content">Header!</div>
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" icon="plus"> </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <div slot="content-top">Slot for a content-top.</div>
      <p>Slotted content!</p>
      <p>Hello world!</p>
      <p>Hello world!</p>
      <p>Hello world!</p>
      <div slot="content-bottom">Slot for a content-bottom.</div>
      <p slot="footer">Footer!</p>
    </calcite-panel>
  </div>
\``,
      ...P.parameters?.docs?.source
    }
  }
};
F.parameters = {
  ...F.parameters,
  docs: {
    ...F.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel style="height: 200px; width: 300px;">
    <div slot="header-content">header-content slot</div>
    <p>Slotted content!</p>
    <div slot="content-bottom">Slot for a content-bottom.</div>
    <calcite-button type="button" slot="footer-start" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer start</calcite-button
    >
    <calcite-button type="button" slot="footer-end" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer end</calcite-button
    >
  </calcite-panel>
\``,
      ...F.parameters?.docs?.source
    }
  }
};
B.parameters = {
  ...B.parameters,
  docs: {
    ...B.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel style="height: 500px; width: 800px;">
    <calcite-alert slot="alerts" open label="this is a default alert" scale="s">
      <div slot="title">Hello there!</div>
      <div slot="message">This is an alert with a general piece of information. Cool, innit?</div>
    </calcite-alert>
    <div slot="header-content">header-content slot</div>
    <p>Slotted content!</p>
    <div slot="content-bottom">Slot for a content-bottom.</div>
    <calcite-button type="button" slot="footer-start" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer start</calcite-button
    >
    <calcite-button type="button" slot="footer-end" kind="neutral" scale="s" id="card-icon-test-1" icon-start="check"
      >Footer end</calcite-button
    >
  </calcite-panel>
\``,
      ...B.parameters?.docs?.source
    }
  }
};
I.parameters = {
  ...I.parameters,
  docs: {
    ...I.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel style="height: 200px">
    <p>Slotted content!</p>
    <div slot="header-content">header-content slot</div>
    <div slot="content-bottom">Slot for a content-bottom.</div>
    <calcite-button
      type="button"
      slot="footer"
      kind="neutral"
      scale="s"
      id="card-icon-test-1"
      icon-start="check"
      width="full"
    ></calcite-button>
    \${footerHTML}
  </calcite-panel>
\``,
      ...I.parameters?.docs?.source
    }
  }
};
W.parameters = {
  ...W.parameters,
  docs: {
    ...W.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-panel
    heading="This is a heading"
    description="And that's a description"
    scale="s"
    style="height: 220px; margin: 50px;"
  >
    <div slot="content-top">Content Top</div>
    <div>Instead of the mahi-mahi, may I just get the one mahi because I’m not that hungry?</div>
    <div slot="content-bottom">Content Bottom</div>
    \${footerHTML}
  </calcite-panel>
  <calcite-panel
    heading="This is a heading"
    description="And that's a description"
    scale="m"
    style="height: 250px; margin: 50px;"
  >
    <div slot="content-top">Content Top</div>
    <div>Instead of the mahi-mahi, may I just get the one mahi because I’m not that hungry?</div>
    <div slot="content-bottom">Content Bottom</div>
    \${footerHTML}
  </calcite-panel>
  <calcite-panel
    heading="This is a heading"
    description="And that's a description"
    scale="l"
    style="height: 260px; margin: 50px;"
  >
    <div slot="content-top">Content Top</div>
    <div>Instead of the mahi-mahi, may I just get the one mahi because I’m not that hungry?</div>
    <div slot="content-bottom">Content Bottom</div>
    \${footerHTML}
  </calcite-panel>
\``,
      ...W.parameters?.docs?.source
    }
  }
};
const K = ["simple", "onlyProps", "disabledWithStyledSlot_TestOnly", "darkModeRTL_TestOnly", "closableWithActions_TestOnly", "collapsibleWithoutActions_TestOnly", "collapsibleWithActions_TestOnly", "collapseDirectionUp_TestOnly", "collapseDirectionUpCollapsed_TestOnly", "collapsedWithActions_TestOnly", "withActionBar_TestOnly", "footerPadding_TestOnly", "footerActions", "footerVariations", "actionBarBackgroundColor_TestOnly", "footerWithoutContent_TestOnly", "actionBarWithoutContent_TestOnly", "actionBarZIndex_TestOnly", "footerAndActionBarWithoutContent_TestOnly", "flexContent_TestOnly", "flexContentWithFAB_TestOnly", "overflowContent_TestOnly", "overflowContentWithFab_TestOnly", "noOverflowContentWithFab_TestOnly", "withTextContentOnly", "withNoHeaderBorderBlockEnd_TestOnly", "footerAndContentTopBottomSlots", "footerStartAndEndSlots", "withSlottedAlert", "footerSlotPrecedence", "scalesFontAndPadding"];
export {
  K as __namedExportsOrder,
  w as actionBarBackgroundColor_TestOnly,
  T as actionBarWithoutContent_TestOnly,
  M as actionBarZIndex_TestOnly,
  p as closableWithActions_TestOnly,
  m as collapseDirectionUpCollapsed_TestOnly,
  b as collapseDirectionUp_TestOnly,
  g as collapsedWithActions_TestOnly,
  u as collapsibleWithActions_TestOnly,
  h as collapsibleWithoutActions_TestOnly,
  o as darkModeRTL_TestOnly,
  J as default,
  d as disabledWithStyledSlot_TestOnly,
  $ as flexContentWithFAB_TestOnly,
  H as flexContent_TestOnly,
  v as footerActions,
  A as footerAndActionBarWithoutContent_TestOnly,
  P as footerAndContentTopBottomSlots,
  f as footerPadding_TestOnly,
  I as footerSlotPrecedence,
  F as footerStartAndEndSlots,
  x as footerVariations,
  S as footerWithoutContent_TestOnly,
  O as noOverflowContentWithFab_TestOnly,
  r as onlyProps,
  k as overflowContentWithFab_TestOnly,
  C as overflowContent_TestOnly,
  W as scalesFontAndPadding,
  s as simple,
  y as withActionBar_TestOnly,
  L as withNoHeaderBorderBlockEnd_TestOnly,
  B as withSlottedAlert,
  _ as withTextContentOnly
};
