import { p as l } from "./placeholder-image.js";
import { b as n, m as J } from "./utils.js";
import { h as e } from "./formatting.js";
import { A as K } from "./resources14.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const {
  shellDisplayMode: I,
  position: i,
  scale: V
} = K, oe = {
  title: "Components/Shell",
  args: {
    collapsed: !1,
    displayMode: I.defaultValue,
    leadingPanelPosition: i.values[0],
    trailingPanelPosition: i.values[1],
    resizable: !0,
    detached: !1,
    heightScale: V.values[0],
    shellCenterRowPosition: i.values[1]
  },
  argTypes: {
    displayMode: {
      options: I.values,
      control: {
        type: "select"
      }
    },
    leadingPanelPosition: {
      options: i.values.filter((t) => t !== "top" && t !== "bottom"),
      control: {
        type: "select"
      }
    },
    trailingPanelPosition: {
      options: i.values.filter((t) => t !== "top" && t !== "bottom"),
      control: {
        type: "select"
      }
    },
    heightScale: {
      options: V.values,
      control: {
        type: "select"
      }
    },
    shellCenterRowPosition: {
      options: i.values.filter((t) => t !== "top" && t !== "bottom"),
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    chromatic: {
      delay: 1e3
    },
    layout: "fullscreen"
  }
}, X = e`
  <calcite-action-group>
    <calcite-action text="Add" label="Add Item" icon="plus"></calcite-action>
    <calcite-action text="Save" label="Save Item" icon="save"></calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Layers" label="View Layers" icon="layers"></calcite-action>
  </calcite-action-group>
`, ee = e`
  <calcite-action-group>
    <calcite-action text="Idea" label="Add Item" icon="lightbulb"></calcite-action>
    <calcite-action text="Information" label="Save Item" icon="information"></calcite-action>
  </calcite-action-group>
  <calcite-action-group>
    <calcite-action text="Question" label="View Layers" icon="question"></calcite-action>
  </calcite-action-group>
`, G = e`
  <calcite-action-bar class="calcite-mode-dark" slot="action-bar"> ${X} </calcite-action-bar>
`, Z = e`
  <calcite-action-bar slot="action-bar"> ${ee} </calcite-action-bar>
`, j = e`
  ${G}
  <calcite-panel heading="Leading panel content">
    <div>Content</div>
  </calcite-panel>
`, c = e`
  <calcite-panel heading="Center row content">
    <div>Content</div>
  </calcite-panel>
`, te = e`
  <calcite-panel heading="Panel bottom content">
    <div>Content</div>
  </calcite-panel>
`, ce = e`
  <calcite-action-bar slot="action-bar">
    <calcite-action-group>
      <calcite-action text="Save" icon="save" indicator> </calcite-action>
      <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
      <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action icon="layers" text="Layers" active> </calcite-action>
      <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
      <calcite-action icon="legend" text="Legend"> </calcite-action>
      <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
    </calcite-action-group>
    <calcite-action-group>
      <calcite-action text="Share" icon="share"></calcite-action>
      <calcite-action text="Print" icon="print"></calcite-action>
    </calcite-action-group>
    <calcite-action-group slot="actions-end">
      <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
      <calcite-action text="What's next" icon="mega-phone"></calcite-action>
    </calcite-action-group>
  </calcite-action-bar>
  <calcite-panel heading="Center row content">Panel</calcite-panel>
`, Y = e`
  ${Z}
  <calcite-panel heading="Trailing panel content">
    <div>Content</div>
  </calcite-panel>
`, q = e`
  <header slot="header">
    <h2>My Shell Header</h2>
  </header>
`, D = '<footer slot="footer">My Shell Footer</footer>', d = e(`
  <div
    style="
    width:100%;
    height:100%;
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  "
  ></div>
`), Q = e(`
  <calcite-tip-manager slot="center-row">
    <calcite-tip-group group-title="Astronomy">
      <calcite-tip heading="The Red Rocks and Blue Water">
        <img slot="thumbnail" src="${l({
  width: 1e3,
  height: 600
})}" alt="This is an image." />
        <p>
          This tip is how a tip should really look. It has a landscape or square image and a small amount of text
          content. This paragraph is in an "info" slot.
        </p>
        <p>
          This is another paragraph in a subsequent "info" slot. In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful
          content (also called greeking). Replacing the actual content with placeholder text allows designers to design
          the form of the content before the content itself has been produced.
        </p>
        <a href="http://www.esri.com">This is the "link" slot.</a>
      </calcite-tip>
      <calcite-tip heading="The Long Trees">
        <img slot="thumbnail" src="${l({
  width: 1e3,
  height: 600
})}" alt="This is an image." />
        <p>This tip has an image that is a pretty tall. And the text will run out before the end of the image.</p>
        <p>In astronomy, the terms object and body are often used interchangeably.</p>
        <a href="http://www.esri.com">View Esri</a>
      </calcite-tip>
    </calcite-tip-group>
    <calcite-tip heading="Square Nature">
      <img slot="thumbnail" src="${l({
  width: 1e3,
  height: 1e3
})}" alt="This is an image." />
      <p>This tip has an image that is square. And the text will run out before the end of the image.</p>
      <p>In astronomy, the terms object and body are often used interchangeably.</p>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
        of a document without relying on meaningful content (also called greeking). Replacing the actual content with
        placeholder text allows designers to design the form of the content before the content itself has been produced.
      </p>
      <a href="http://www.esri.com">View Esri</a>
    </calcite-tip>
    <calcite-tip heading="The lack of imagery">
      <p>This tip has no image. As such, the content area will take up the entire width of the tip.</p>
      <p>
        This is the next paragraph and should show how wide the content area is now. Of course, the width of the overall
        tip will affect things. In astronomy, the terms object and body are often used interchangeably.
      </p>
      <a href="http://www.esri.com">View Esri</a>
    </calcite-tip>
  </calcite-tip-manager>
`), O = e(`
  ${G}
  <calcite-panel heading="Advanced panel example">
  <calcite-block collapsible open heading="Start Content" summary="This is the primary.">
    <calcite-block-content>
      <calcite-action text="Play" text-enabled indicator icon="play"></calcite-action>
      <calcite-action text="Extent" text-enabled icon="extent"></calcite-action>
      <calcite-action text="Chart" text-enabled icon="arrow-up-right"></calcite-action>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="Another Block" summary="This is the primary.">
    <calcite-block-content>
      <div style="height: 300px;">
        <p>Cool thing.</p>
      </div>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="Additional Block" summary="This is the primary.">
    <calcite-block-content>
      <div style="height: 300px;">
        <p>Cool thing.</p>
      </div>
    </calcite-block-content>
  </calcite-block>
  <calcite-block collapsible open heading="More Block" summary="This is the primary.">
    <calcite-block-content>
      <div style="height: 300px;">
        <p>Cool thing.</p>
        <p>Cool thing.</p>
      </div>
    </calcite-block-content>
  </calcite-block>
  </calcite-panel>
`), N = e(`
  ${Z}
  <calcite-flow>
    <calcite-flow-item heading="Layer settings">
      <calcite-action slot="header-menu-actions" text="Cool thing" text-enabled></calcite-action>
      <calcite-action slot="header-menu-actions" text="Cool thing" text-enabled></calcite-action>
      <calcite-action slot="header-menu-actions" text="Cool thing" text-enabled></calcite-action>
      <calcite-block collapsible open heading="End Content" summary="Select goodness">
        <calcite-block-content>
          <img alt="demo" src="${l({
  width: 640,
  height: 480
})}" width="100%" />
          <calcite-block-section text="Cool things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
          <calcite-block-section text="Neat things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
        </calcite-block-content>
      </calcite-block>
      <calcite-button slot="footer" width="half" appearance="outline">Cancel</calcite-button>
      <calcite-button slot="footer" width="half">Save</calcite-button>
    </calcite-flow-item>
    <calcite-flow-item heading="Deeper flow item">
      <calcite-block collapsible open heading="End Content" summary="Select goodness">
        <calcite-block-content>
          <calcite-block-section text="Cool things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
          <img alt="demo" src="${l({
  width: 640,
  height: 480
})}" width="100%" />
          <calcite-block-section text="Neat things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
        </calcite-block-content>
      </calcite-block>
      <calcite-block collapsible open heading="Even more content" summary="Select goodness">
        <calcite-block-content>
          <calcite-block-section text="Cool things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
          <img alt="demo" src="${l({
  width: 640,
  height: 480
})}" width="100%" />
          <calcite-block-section text="Neat things">
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
            <calcite-action text="Cool thing" text-enabled></calcite-action>
          </calcite-block-section>
        </calcite-block-content>
      </calcite-block>
      <calcite-button slot="footer" width="half" appearance="outline">Cancel</calcite-button>
      <calcite-button slot="footer" width="half">Save</calcite-button>
    </calcite-flow-item>
  </calcite-flow>
`), h = (t) => e`
  <calcite-shell>
    ${q}
    <calcite-shell-panel
      slot="panel-start"
      ${n("collapsed", t.collapsed)}
      displayMode="${t.displayMode}"
      position="${t.leadingPanelPosition}"
      ${n("resizable", t.resizable)}
    >
      ${O}
    </calcite-shell-panel>
    ${d}
    <calcite-shell-center-row
      ${n("detached", t.detached)}
      height-scale="${t.heightScale}"
      position="${t.shellCenterRowPosition}"
      slot="center-row"
    >
      ${c}
    </calcite-shell-center-row>
    ${Q}
    <calcite-shell-panel
      slot="panel-end"
      ${n("collapsed", t.collapsed)}
      displayMode="${t.displayMode}"
      position="${t.trailingPanelPosition}"
      ${n("resizable", t.resizable)}
    >
      ${N}
    </calcite-shell-panel>
    ${D}
  </calcite-shell>
`, o = () => e`
  <calcite-shell dir="rtl" class="calcite-mode-dark">
    ${q}
    <calcite-shell-panel slot="panel-start" displayMode="dock" position="start">
      ${O}
    </calcite-shell-panel>
    ${d}
    <calcite-shell-center-row height-scale="s" position="end" slot="center-row">
      ${c}
    </calcite-shell-center-row>
    ${d} ${Q}
    <calcite-shell-panel slot="panel-end" displayMode="dock" position="end">
      ${N}
    </calcite-shell-panel>
    ${D}
  </calcite-shell>
`;
o.parameters = {
  themes: J
};
const R = [];
["float", "float-content"].forEach((t, a) => {
  R[a] = e(`<calcite-shell content-behind>
    <calcite-shell-panel slot="panel-start" display-mode="${t}">
      <calcite-action-bar slot="action-bar">
        <calcite-action data-action-id="layers" icon="layers" text="Layers"></calcite-action>
        <calcite-action data-action-id="basemaps" icon="basemap" text="Basemaps"></calcite-action>
        <calcite-action data-action-id="legend" icon="legend" text="Legend"></calcite-action>
        <calcite-action data-action-id="bookmarks" icon="bookmark" text="Bookmarks"></calcite-action>
        <calcite-action data-action-id="print" icon="print" text="Print"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading="Layers" height-scale="l" data-panel-id="layers" closable closed>
        <div id="layers-container"></div>
      </calcite-panel>
      <calcite-panel heading="Basemaps" height-scale="l" data-panel-id="basemaps" closable closed>
        <div id="basemaps-container"></div>
      </calcite-panel>
      <calcite-panel heading="Legend" height-scale="l" data-panel-id="legend" closable closed>
        <div id="legend-container"></div>
      </calcite-panel>
      <calcite-panel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" closable closed>
        <div id="bookmarks-container"></div>
      </calcite-panel>
      <calcite-panel heading="Print" height-scale="l" data-panel-id="print" closable closed>
        <div id="print-container"></div>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`);
});
const u = () => R[0], b = () => R[1], _ = [];
["float", "float-content"].forEach((t, a) => {
  _[a] = e(`<calcite-shell content-behind>
    <header slot="header">
      <h2>My Shell Header</h2>
    </header>
    <div
      style="
width:100%;
height:100%;
background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
  linear-gradient(-45deg, #ccc 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #ccc 75%),
  linear-gradient(-45deg, transparent 75%, #ccc 75%);
background-size: 20px 20px;
background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
"
    ></div>
    <calcite-shell-panel slot="panel-end" position="end" display-mode="${t}">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Idea" label="Add Item" icon="lightbulb" appearance="solid" scale="m"></calcite-action>
          <calcite-action
            text="Information"
            label="Save Item"
            icon="information"
            appearance="solid"
            scale="m"
          ></calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action
            text="Question"
            label="View Layers"
            icon="question"
            appearance="solid"
            scale="m"
          ></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow>
        <calcite-flow-item heading="Layer settings">
          <calcite-action
            slot="header-menu-actions"
            text="Cool thing"
            text-enabled
            appearance="solid"
            scale="m"
          ></calcite-action>
          <calcite-action
            slot="header-menu-actions"
            text="Cool thing"
            text-enabled
            appearance="solid"
            scale="m"
          ></calcite-action>
          <calcite-action
            slot="header-menu-actions"
            text="Cool thing"
            text-enabled
            appearance="solid"
            scale="m"
          ></calcite-action>
          <calcite-block collapsible open heading="End Content" summary="Select goodness">
            <calcite-block-content>
              <img
                alt="demo"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                width="100%"
              />
              <calcite-block-section text="Cool things" toggle-display="button">
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
              </calcite-block-section>
              <calcite-block-section text="Neat things" toggle-display="button">
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
              </calcite-block-section>
            </calcite-block-content>
          </calcite-block>
          <calcite-button
            slot="footer"
            width="half"
            appearance="outline"
            alignment="center"
            kind="brand"
            scale="m"
          >
            Cancel
          </calcite-button>
          <calcite-button
            slot="footer"
            width="half"
            alignment="center"
            appearance="solid"
            kind="brand"
            scale="m"
          >
            Save
          </calcite-button>
        </calcite-flow-item>
        <calcite-flow-item heading="Deeper flow item" show-back-button>
          <calcite-block collapsible open heading="End Content" summary="Select goodness">
            <calcite-block-content>
              <calcite-block-section text="Cool things" toggle-display="button">
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
              </calcite-block-section>
              <img
                alt="demo"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                width="100%"
              />
              <calcite-block-section text="Neat things" toggle-display="button">
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
              </calcite-block-section>
            </calcite-block-content>
          </calcite-block>
          <calcite-block collapsible open heading="Even more content" summary="Select goodness">
            <calcite-block-content>
              <calcite-block-section text="Cool things" toggle-display="button">
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
              </calcite-block-section>
              <img
                alt="demo"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22640%22%20height%3D%22480%22%20viewBox%3D%220%200%20640%20480%22%3E%20%3Crect%20fill%3D%22%23ddd%22%20width%3D%22640%22%20height%3D%22480%22%2F%3E%20%3Ctext%20fill%3D%22rgba%280%2C0%2C0%2C0.5%29%22%20font-family%3D%22sans-serif%22%20font-size%3D%2296%22%20dy%3D%2233.599999999999994%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3E640%C3%97480%3C%2Ftext%3E%20%3C%2Fsvg%3E"
                width="100%"
              />
              <calcite-block-section text="Neat things" toggle-display="button">
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
                <calcite-action text="Cool thing" text-enabled appearance="solid" scale="m"></calcite-action>
              </calcite-block-section>
            </calcite-block-content>
          </calcite-block>
          <calcite-button
            slot="footer"
            width="half"
            appearance="outline"
            alignment="center"
            kind="brand"
            scale="m"
          >
            Cancel
          </calcite-button>
          <calcite-button
            slot="footer"
            width="half"
            alignment="center"
            appearance="solid"
            kind="brand"
            scale="m"
          >
            Save
          </calcite-button>
        </calcite-flow-item>
      </calcite-flow>
    </calcite-shell-panel>
    <footer slot="footer">My Shell Footer</footer>
  </calcite-shell>`);
});
const m = () => _[0], g = () => _[1], x = () => e(`
  <main>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Other page content outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </p>
    <calcite-shell
      style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
    >
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-modal open slot="modals" docked><span slot="header">Modal slotted in Shell</span></calcite-modal>
      <calcite-alert open slot="alerts" placement="top-end"
        ><span slot="title">Alert slotted in Shell</span>
      </calcite-alert>
      <calcite-shell-panel id="primary-panel" slot="panel-start" position="start">
        <calcite-action-bar slot="action-bar">
          <calcite-action-group>
            <calcite-action text="Save" icon="save" indicator> </calcite-action>
            <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
          <calcite-action-group>
            <calcite-action icon="layers" text="Layers" active> </calcite-action>
            <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
            <calcite-action icon="legend" text="Legend"> </calcite-action>
            <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-panel heading="Panel">
          <div class="padded-content">Panel content<br />Padding is fake.</div>
        </calcite-panel>
      </calcite-shell-panel>
      <calcite-shell-panel slot="panel-end" position="end">
        <calcite-action-bar slot="action-bar">
          <calcite-tooltip slot="expand-tooltip" label="tooltip" disable-pointer>Add layers</calcite-tooltip>
          <calcite-action-group>
            <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
            <calcite-action text="Styles" icon="shapes"> </calcite-action>
            <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
            <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
            <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
            </calcite-action>
            <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-flow>
          <calcite-flow-item heading="Flow 01">
            <div class="padded-content">Flow 01 content<br />Padding is fake.</div>
          </calcite-flow-item>
          <calcite-flow-item heading="Flow 02">
            <div class="padded-content">Flow 02 content<br />Padding is fake.</div>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel>
      <calcite-panel heading="Main content">
        <div class="padded-content">The borders are only applied to "known" components.<br />Padding is fake.</div>
      </calcite-panel>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Notice outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
    </p>
  </main>`), v = () => e(`
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Other page content outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </p>
    <calcite-shell
      style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
    >
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-sheet open slot="sheets" label="libero nunc" position="inline-start" display-mode="overlay">
            <calcite-panel closable heading="Ultrices neque"
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <calcite-button slot="footer" width="half" appearance="outline">tincidunt lobortis</calcite-button>
              <calcite-button slot="footer" width="half" appearance="outline">amet porttitor</calcite-button>
            </calcite-panel>
          </calcite-sheet>
      <calcite-shell-panel id="primary-panel" slot="panel-start" position="start">
        <calcite-action-bar slot="action-bar">
          <calcite-action-group>
            <calcite-action text="Save" icon="save" indicator> </calcite-action>
            <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
          <calcite-action-group>
            <calcite-action icon="layers" text="Layers" active> </calcite-action>
            <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
            <calcite-action icon="legend" text="Legend"> </calcite-action>
            <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-panel heading="Panel">
          <div class="padded-content">Panel content<br />Padding is fake.</div>
        </calcite-panel>
      </calcite-shell-panel>
      <calcite-shell-panel slot="panel-end" position="end">
        <calcite-action-bar slot="action-bar">
          <calcite-tooltip slot="expand-tooltip" label="tooltip" disable-pointer>Add layers</calcite-tooltip>
          <calcite-action-group>
            <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
            <calcite-action text="Styles" icon="shapes"> </calcite-action>
            <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
            <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
            <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
            </calcite-action>
            <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-flow>
          <calcite-flow-item heading="Flow 01">
            <div class="padded-content">Flow 01 content<br />Padding is fake.</div>
          </calcite-flow-item>
          <calcite-flow-item heading="Flow 02">
            <div class="padded-content">Flow 02 content<br />Padding is fake.</div>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel>
      <calcite-panel heading="Main content">
        <div class="padded-content">The borders are only applied to "known" components.<br />Padding is fake.</div>
      </calcite-panel>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Notice outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
    </p>
    <script>
    document.addEventListener("calcitePanelClose", () => {
      document.querySelector("calcite-sheet").open = false;
    });
  <\/script>
`), W = [];
["float", "float-content"].forEach((t, a) => {
  W[a] = e(`
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Other page content outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </p>
    <calcite-shell
      style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
    >
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-sheet open slot="sheets" label="libero nunc" position="inline-start" display-mode="${t}">
            <calcite-panel closable heading="Ultrices neque"
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <calcite-button slot="footer" width="half" appearance="outline">tincidunt lobortis</calcite-button>
              <calcite-button slot="footer" width="half" appearance="outline">amet porttitor</calcite-button>
            </calcite-panel>
          </calcite-sheet>
      <calcite-shell-panel id="primary-panel" slot="panel-start" position="start">
        <calcite-action-bar slot="action-bar">
          <calcite-action-group>
            <calcite-action text="Save" icon="save" indicator> </calcite-action>
            <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
          <calcite-action-group>
            <calcite-action icon="layers" text="Layers" active> </calcite-action>
            <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
            <calcite-action icon="legend" text="Legend"> </calcite-action>
            <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-panel heading="Panel">
          <div class="padded-content">Panel content<br />Padding is fake.</div>
        </calcite-panel>
      </calcite-shell-panel>
      <calcite-shell-panel slot="panel-end" position="end">
        <calcite-action-bar slot="action-bar">
          <calcite-tooltip slot="expand-tooltip" label="tooltip" disable-pointer>Add layers</calcite-tooltip>
          <calcite-action-group>
            <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
            <calcite-action text="Styles" icon="shapes"> </calcite-action>
            <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
            <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
            <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
            </calcite-action>
            <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-flow>
          <calcite-flow-item heading="Flow 01">
            <div class="padded-content">Flow 01 content<br />Padding is fake.</div>
          </calcite-flow-item>
          <calcite-flow-item heading="Flow 02">
            <div class="padded-content">Flow 02 content<br />Padding is fake.</div>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel>
      <calcite-panel heading="Main content">
        <div class="padded-content">The borders are only applied to "known" components.<br />Padding is fake.</div>
      </calcite-panel>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Notice outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
    </p>
    <script>
    document.addEventListener("calcitePanelClose", () => {
      document.querySelector("calcite-sheet").open = false;
    });
  <\/script>
`);
});
const y = () => W[0], f = () => W[1], k = () => e(`<calcite-shell content-behind>
  ${q}
  <calcite-shell-panel slot="panel-start">${j}</calcite-shell-panel>
  ${d}
  <calcite-shell-center-row slot="center-row">${c}</calcite-shell-center-row>
  <calcite-shell-panel slot="panel-end">${Y}</calcite-shell-panel>
  ${D}
</calcite-shell>`), w = () => e(`<calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
  >
      <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
    <div class="global-nav" slot="header">Header Example</div>
    <calcite-shell-center-row slot="panel-top">${c}</calcite-shell-center-row>
    <footer slot="footer">Footer Example</footer>
  </calcite-shell>
`), U = [];
["float", "float-content"].forEach((t, a) => {
  U[a] = e(`
    <calcite-shell
      content-behind
      style="
      width:700px;
      height:700px;
      position:relative;
      "
    >
        <div
        style="
        width:100%;
        height:100%;
        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
        linear-gradient(-45deg, #ccc 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #ccc 75%),
        linear-gradient(-45deg, transparent 75%, #ccc 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
        <calcite-shell-panel slot="panel-bottom" display-mode="${t}" layout="horizontal">${te}</calcite-shell-panel>
      </calcite-shell>
    `);
});
const C = () => U[0], L = () => U[1], S = () => e(`
  <calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
  >
      <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-shell-center-row slot="panel-bottom">${c}</calcite-shell-center-row>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
  `), T = () => e(`
  <calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
  >
      <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
    <div class="global-nav" slot="header">Header Example</div>
    <calcite-shell-center-row slot="panel-top">${c}</calcite-shell-center-row>
    <calcite-shell-center-row slot="panel-bottom">${c}</calcite-shell-center-row>
    <footer slot="footer">Footer Example</footer>
  </calcite-shell>
`), P = () => e(`
  <calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    ">
    <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
    <div class="global-nav" slot="header">Header Example</div>
    <calcite-shell-panel
      slot="panel-start"
      displayMode="dock"
      position="start"
      display-mode="dock"
      width-scale="m"
      layout="vertical"
    >
      ${O}
    </calcite-shell-panel>
    <calcite-shell-panel
      slot="panel-end"
      displayMode="dock"
      position="end"
      display-mode="dock"
      width-scale="m"
      layout="vertical"
    >
      ${N}
    </calcite-shell-panel>
    <calcite-shell-center-row slot="panel-top">${c}</calcite-shell-center-row>
    <calcite-shell-center-row slot="panel-bottom">${c}</calcite-shell-center-row>
    <footer slot="footer">Footer Example</footer>
  </calcite-shell>
`), M = () => e(`<calcite-shell content-behind>
  ${q}
  <calcite-shell-panel slot="panel-start">${j}</calcite-shell-panel>
  ${d}
  <calcite-shell-center-row slot="center-row">${ce}</calcite-shell-center-row>
  <calcite-shell-panel slot="panel-end">${Y}</calcite-shell-panel>
  ${D}
</calcite-shell>`), s = () => e` <calcite-shell
    style="
height:400px;
position:relative;
"
  >
    <calcite-shell-panel slot="panel-start" position="start" collapsed>
      <calcite-action-bar slot="action-bar">
        <calcite-tooltip open slot="expand-tooltip">Expand</calcite-tooltip>
      </calcite-action-bar>
    </calcite-shell-panel>
    <calcite-shell-center-row slot="panel-bottom">
      <div style="height: 100%; width: 600px; background-color: black;"></div>
    </calcite-shell-center-row>
  </calcite-shell>`;
s.parameters = {
  chromatic: {
    delay: 800
  }
};
const r = () => e`<calcite-shell
    style="
width:100%;
height:500px;
max-height:80%;
position:relative;
"
  >
    <calcite-shell-panel resizable slot="panel-start" position="start">
      <calcite-action-bar slot="action-bar" class="calcite-mode-dark">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Layers"><p>Start Panel</p></calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel resizable slot="panel-end" position="end">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
          <calcite-action text="Styles" icon="shapes"> </calcite-action>
          <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
          <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
          <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
          </calcite-action>
          <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="search" text="Search"></calcite-action>
          <calcite-action icon="measure" text="Measure"></calcite-action>
          <calcite-action text-enabled icon="road-sign" text="Directions" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="point" text="Location" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="pencil-square" text="Edit" disabled slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="clock" text="Time" disabled slot="menu-actions"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Tips" id="tip-manager-button">
            <calcite-icon icon="lightbulb" scale="s"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow id="flow">
        <calcite-flow-item
          heading="Configure popup"
          description="Popular Demographics in the United States (Beta) - County"
        >
          <p>End Panel</p>
        </calcite-flow-item>
      </calcite-flow>
    </calcite-shell-panel>
    <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"
    ></div>
    <calcite-shell-panel resizable layout="horizontal" slot="panel-top" position="start">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p>Top Panel</p>
    </calcite-shell-panel>
    <calcite-shell-panel resizable layout="horizontal" slot="panel-bottom" position="end">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p>Bottom Panel</p>
    </calcite-shell-panel>
  </calcite-shell>`;
r.parameters = {
  chromatic: {
    delay: 500
  }
};
const p = () => e`<calcite-shell
    style="
width:800px;
height:600px;
position:relative;
"
  >
    <calcite-shell-panel display-mode="overlay" resizable id="primary-panel" slot="panel-start" position="start">
      <calcite-action-bar slot="action-bar" class="calcite-mode-dark">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Layers" height-scale="l" width-scale="m">
        <calcite-fab slot="fab" id="layer-fab" text="Add layers"></calcite-fab>
        <calcite-tooltip label="tooltip" reference-element="layer-fab" pointer-disabled>Add layers</calcite-tooltip>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel display-mode="overlay" resizable slot="panel-end" position="end">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
          <calcite-action text="Styles" icon="shapes"> </calcite-action>
          <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
          <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
          <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
          </calcite-action>
          <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="search" text="Search"></calcite-action>
          <calcite-action icon="measure" text="Measure"></calcite-action>
          <calcite-action text-enabled icon="road-sign" text="Directions" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="point" text="Location" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="pencil-square" text="Edit" disabled slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="clock" text="Time" disabled slot="menu-actions"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Tips" id="tip-manager-button">
            <calcite-icon icon="lightbulb" scale="s"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow id="flow">
        <calcite-flow-item
          heading="Configure popup"
          description="Popular Demographics in the United States (Beta) - County"
          width-scale="m"
        >
          <calcite-action slot="header-actions-end" icon="x" text="Close"> </calcite-action>
          <calcite-block heading="Title" summary="County: {NAME}" collapsible>
            <calcite-icon icon="title" scale="m" slot="icon"></calcite-icon>
            <div class="combo-control">
              <div class="combo-button">
                <button class="combo-button__main">County: {NAME}</button>
                <calcite-action label="code icon" class="combo-action" scale="s" icon="code"></calcite-action>
              </div>
            </div>
          </calcite-block>
          <calcite-sortable-list>
            <calcite-block drag-handle heading="Attributes" summary="2/98" collapsible>
              <calcite-icon icon="feature-details" scale="m" slot="icon"></calcite-icon>
              <calcite-action label="ellipsis" slot="control" icon="ellipsis" scale="m"></calcite-action>
              <calcite-list drag-enabled>
                <calcite-list-item
                  label="2018 Total Households (Esri)"
                  value="Households"
                  description="{TOTHH_CY}"
                ></calcite-list-item>
                <calcite-list-item
                  label="2018 Average Household Size (Esri)"
                  value="Household"
                  description="{AVGHHSZ_CY}"
                ></calcite-list-item>
              </calcite-list>
              <div class="row">
                <calcite-button id="attribute-add" round icon="plus" scale="s" width="full" kind="neutral"
                  >Select attributes</calcite-button
                >
              </div>
            </calcite-block>
            <calcite-block drag-handle heading="Image" collapsible>
              <calcite-icon icon="image" scale="m" slot="icon"></calcite-icon>
              <calcite-action label="ellipsis" slot="control" icon="ellipsis" scale="m"></calcite-action>
              <section class="form-section">
                <label>
                  URL
                  <input type="text" value="https://ca-times.brightspotcdn.com/dims4/default/" />
                </label>
              </section>
              <calcite-block-section text="Options">
                <section class="form-section">
                  <label>
                    Title
                    <input type="text" placeholder="My cool title" />
                  </label>
                  <label>
                    Caption
                    <input type="text" placeholder="My cool caption" />
                  </label>
                  <label>
                    State
                    <select placeholder="My cool caption">
                      <option value="Denial">Denial</option>
                      <option value="Grace">Grace</option>
                      <option value="Confusion">Confusion</option>
                    </select>
                  </label>
                </section>
              </calcite-block-section>
              <calcite-block-section text="Advanced options">
                <section class="form-section">
                  <label>
                    Title
                    <input type="text" placeholder="My cool title" />
                  </label>
                  <label>
                    Caption
                    <input type="text" placeholder="My cool caption" />
                  </label>
                  <label>
                    State
                    <select placeholder="My cool caption">
                      <option value="Denial">Denial</option>
                      <option value="Grace">Grace</option>
                      <option value="Confusion">Confusion</option>
                    </select>
                  </label>
                </section>
              </calcite-block-section>
            </calcite-block>
            <calcite-block drag-handle heading="Text" summary="Cool. he {expression/..." collapsible>
              <calcite-icon icon="image" scale="m" slot="icon"></calcite-icon>
              <calcite-action label="ellipsis" slot="control" icon="ellipsis" scale="m"></calcite-action>
              <button class="multiline-button">Cool. he {expression/expr1} population is {expression/expr2}%...</button>
            </calcite-block>
          </calcite-sortable-list>
          <calcite-fab slot="fab" id="label-fab" text="Add label class"></calcite-fab>
          <calcite-tooltip label="tooltip" reference-element="label-fab" pointer-disabled>
            Add label class
          </calcite-tooltip>
        </calcite-flow-item>
      </calcite-flow>
    </calcite-shell-panel>
    <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"
    ></div>
    <calcite-shell-panel
      collapsed
      display-mode="overlay"
      resizable
      layout="horizontal"
      slot="panel-top"
      position="start"
    >
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Example"> Example </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel
      collapsed
      display-mode="overlay"
      resizable
      layout="horizontal"
      slot="panel-bottom"
      position="end"
    >
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Example"> Example </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`;
p.parameters = {
  chromatic: {
    delay: 500
  }
};
const A = () => e`<calcite-shell>
    <calcite-shell-panel slot="panel-end" width-scale="l" position="start" display-mode="block" resizable>
      <calcite-action-bar slot="action-bar">
        <calcite-action text="Save" icon="save" indicator></calcite-action>
        <calcite-action active icon="map" text="Map"></calcite-action>
        <calcite-action icon="layer" text="Layer"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading="Map Options">
        <calcite-button width="half" slot="footer"> Next </calcite-button>
        <calcite-block collapsible heading="Layer effects" description="Adjust blur, highlight, and more">
          <calcite-icon scale="s" slot="icon" icon="effects"></calcite-icon>
          <calcite-notice open>
            <div slot="message">Use layer effects sparingly, for emphasis</div>
          </calcite-notice>
        </calcite-block>
        <calcite-block collapsible heading="Symbology" description="Select type, color, and transparency">
          <calcite-icon scale="s" slot="icon" icon="map-pin"></calcite-icon>
          <calcite-notice open>
            <div slot="message">The viewers are going to love this</div>
          </calcite-notice>
        </calcite-block>
        <calcite-fab slot="fab"></calcite-fab>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`, $ = () => e`<calcite-shell>
    <calcite-shell-panel
      layout="horizontal"
      slot="panel-top"
      position="start"
      display-mode="float-all"
      width-scale="m"
      calcite-hydrated=""
    >
      <calcite-action-bar
        slot="action-bar"
        expand-disabled=""
        layout="horizontal"
        overlay-positioning="absolute"
        calcite-hydrated=""
      >
        <calcite-action-group layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Save" icon="save" indicator="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="map" text="New" appearance="solid" scale="m" calcite-hydrated=""> </calcite-action>
          <calcite-action icon="collection" text="Open" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action icon="layers" text="Layers" active="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="basemap" text="Basemaps" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="legend" text="Legend" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Share" icon="share" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
          <calcite-action text="Print" icon="print" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end" layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action
            text="Feedback"
            icon="speech-bubble-plus"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
          <calcite-action
            text="What's next"
            icon="mega-phone"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel
        heading="Example"
        closable=""
        id="panel-top"
        overlay-positioning="absolute"
        scale="m"
        calcite-hydrated=""
      >
        <calcite-block open="" heading="Preview display-mode" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-chip-group id="chip-group-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="dock" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >dock</calcite-chip
            >
            <calcite-chip value="float-content" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >float content</calcite-chip
            >
            <calcite-chip value="overlay" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >overlay</calcite-chip
            >
            <calcite-chip value="float-all" appearance="solid" kind="neutral" scale="m" calcite-hydrated="" selected=""
              >float all</calcite-chip
            >
          </calcite-chip-group>
          <calcite-chip-group id="chip-layout-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="vertical" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >Vertical</calcite-chip
            >
            <calcite-chip selected="" value="horizontal" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >Horizontal</calcite-chip
            >
          </calcite-chip-group>
          <div class="tall-content-example" style="display: none"></div>
        </calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`, F = () => e`<calcite-shell>
    <calcite-shell-panel
      layout="vertical"
      slot="panel-top"
      position="start"
      display-mode="float-all"
      width-scale="m"
      calcite-hydrated=""
    >
      <calcite-action-bar
        slot="action-bar"
        expand-disabled=""
        layout="vertical"
        overlay-positioning="absolute"
        calcite-hydrated=""
      >
        <calcite-action-group layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Save" icon="save" indicator="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action
            icon="map"
            text="New"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
          <calcite-action
            icon="collection"
            text="Open"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action icon="layers" text="Layers" active="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action
            icon="basemap"
            text="Basemaps"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
          <calcite-action
            icon="legend"
            text="Legend"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
          <calcite-action
            icon="bookmark"
            text="Bookmarks"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Share" icon="share" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
          <calcite-action text="Print" icon="print" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end" layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action
            text="Feedback"
            icon="speech-bubble-plus"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
          <calcite-action
            text="What's next"
            icon="mega-phone"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel
        heading="Example"
        closable=""
        id="panel-top"
        overlay-positioning="absolute"
        scale="m"
        calcite-hydrated=""
      >
        <calcite-block open="" heading="Preview display-mode" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-chip-group id="chip-group-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="dock" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >dock</calcite-chip
            >
            <calcite-chip value="float-content" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >float content</calcite-chip
            >
            <calcite-chip value="overlay" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >overlay</calcite-chip
            >
            <calcite-chip value="float-all" appearance="solid" kind="neutral" scale="m" calcite-hydrated="" selected=""
              >float all</calcite-chip
            >
          </calcite-chip-group>
          <calcite-chip-group id="chip-layout-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="vertical" appearance="solid" kind="neutral" scale="m" calcite-hydrated="" selected=""
              >Vertical</calcite-chip
            >
            <calcite-chip value="horizontal" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >Horizontal</calcite-chip
            >
          </calcite-chip-group>
          <div class="tall-content-example" style="display: none"></div>
        </calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`, E = () => e` <calcite-shell>
    <calcite-shell-panel id="panel-start" slot="panel-start" position="start" resizable>
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator></calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Panel 1">
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-panel heading="Main content"></calcite-panel>
    <calcite-shell-panel id="panel-end" slot="panel-end" position="end" resizable>
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator></calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Panel 1">
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`, z = () => e`<calcite-shell>
    <calcite-shell-panel slot="panel-start" position="start" id="shell-panel-start">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" icon="plus"></calcite-action>
          <calcite-action active text="Layers" indicator icon="layers"></calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Undo" icon="undo"></calcite-action>
          <calcite-action text="Redo" indicator icon="redo"></calcite-action>
          <calcite-action text="Save" disabled icon="save"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="bottom-actions">
          <calcite-action text="Tips" icon="question"></calcite-action>
          <calcite-action text="Settings" indicator icon="gear"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Layers" id="panel-start" closable>
        <calcite-block
          collapsible
          heading="Symbology"
          description="Select type, color, and transparency"
          icon-start="map-pin"
        >
          <calcite-notice open>
            <div slot="message">The viewers are going to love this</div>
          </calcite-notice>
        </calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel slot="panel-bottom" position="end" layout="horizontal">
      <calcite-panel heading="Content">
        <calcite-tabs>
          <calcite-tab-nav slot="title-group">
            <calcite-tab-title selected> Watercraft </calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
          </calcite-tab-nav>
          <calcite-tab selected>
            <calcite-notice icon="embark" open>
              <div slot="message">Recommended for coastal use</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
        </calcite-tabs>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel slot="panel-end" position="end" layout="vertical">
      <calcite-panel heading="Content">
        <calcite-tabs>
          <calcite-tab-nav slot="title-group">
            <calcite-tab-title selected> Watercraft </calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
          </calcite-tab-nav>
          <calcite-tab selected>
            <calcite-notice icon="embark" open>
              <div slot="message">Recommended for coastal use</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
        </calcite-tabs>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>`, H = () => e` <style>
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: gray;
      }
    </style>
    <calcite-shell content-behind>
      <div id="viewDiv"></div>
      <calcite-shell-panel slot="panel-start"></calcite-shell-panel>
      <calcite-shell-panel slot="panel-end">
        <calcite-flow>
          <calcite-flow-item heading="panel header">
            <calcite-button id="button" style="margin-top:20px">open popover</calcite-button>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel> </calcite-shell
    ><calcite-popover open reference-element="button" offset-distance="-50" offset-skidding="15" style="z-index: 100">
      <calcite-panel height-scale="m" heading="popover panel header" style="height: 400px;"> </calcite-panel
    ></calcite-popover>`, B = () => e`<calcite-shell>
    <calcite-shell-panel slot="panel-start" position="start" id="shell-panel-start">
      <calcite-action-bar slot="action-bar">
        <calcite-action id="target-element" text="Save" icon="save" indicator></calcite-action>
        <calcite-action active icon="map" text="Map"></calcite-action>
        <calcite-action icon="layer" text="Layer"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading="Map" id="panel-start">
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>

    <!--  Popover here  -->
    <calcite-popover overlay-positioning="fixed" reference-element="target-element" open
      ><p>This is a popover</p></calcite-popover
    >

    <calcite-shell-panel slot="panel-end" position="end" id="shell-panel-end" collapsed>
      <calcite-action-bar slot="action-bar">
        <calcite-action text="Layer" icon="sliders-horizontal"></calcite-action>
        <calcite-action text="Styles" icon="shapes"></calcite-action>
        <calcite-action text="Filter" icon="layer-filter"></calcite-action>
        <calcite-action text="Configure" icon="popup"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading id="panel-end" closable closed>
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-panel heading="Content"></calcite-panel>
  </calcite-shell>`;
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `(args: ShellStoryArgs): string => html\`
  <calcite-shell>
    \${headerHTML}
    <calcite-shell-panel
      slot="panel-start"
      \${boolean("collapsed", args.collapsed)}
      displayMode="\${args.displayMode}"
      position="\${args.leadingPanelPosition}"
      \${boolean("resizable", args.resizable)}
    >
      \${advancedLeadingPanelHTML}
    </calcite-shell-panel>
    \${contentHTML}
    <calcite-shell-center-row
      \${boolean("detached", args.detached)}
      height-scale="\${args.heightScale}"
      position="\${args.shellCenterRowPosition}"
      slot="center-row"
    >
      \${centerRowHTML}
    </calcite-shell-center-row>
    \${centerRowAdvancedHTML}
    <calcite-shell-panel
      slot="panel-end"
      \${boolean("collapsed", args.collapsed)}
      displayMode="\${args.displayMode}"
      position="\${args.trailingPanelPosition}"
      \${boolean("resizable", args.resizable)}
    >
      \${advancedTrailingPanelHTMl}
    </calcite-shell-panel>
    \${footerHTML}
  </calcite-shell>
\``,
      ...h.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(): string => html\`
  <calcite-shell dir="rtl" class="calcite-mode-dark">
    \${headerHTML}
    <calcite-shell-panel slot="panel-start" displayMode="dock" position="start">
      \${advancedLeadingPanelHTML}
    </calcite-shell-panel>
    \${contentHTML}
    <calcite-shell-center-row height-scale="s" position="end" slot="center-row">
      \${centerRowHTML}
    </calcite-shell-center-row>
    \${contentHTML} \${centerRowAdvancedHTML}
    <calcite-shell-panel slot="panel-end" displayMode="dock" position="end">
      \${advancedTrailingPanelHTMl}
    </calcite-shell-panel>
    \${footerHTML}
  </calcite-shell>
\``,
      ...o.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: "(): string => closedPanelsHtml[0]",
      ...u.parameters?.docs?.source
    }
  }
};
b.parameters = {
  ...b.parameters,
  docs: {
    ...b.parameters?.docs,
    source: {
      originalSource: "(): string => closedPanelsHtml[1]",
      ...b.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: "(): string => endPanelHtml[0]",
      ...m.parameters?.docs?.source
    }
  }
};
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: "(): string => endPanelHtml[1]",
      ...g.parameters?.docs?.source
    }
  }
};
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `(): string => html(\`
  <main>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Other page content outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </p>
    <calcite-shell
      style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
    >
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-modal open slot="modals" docked><span slot="header">Modal slotted in Shell</span></calcite-modal>
      <calcite-alert open slot="alerts" placement="top-end"
        ><span slot="title">Alert slotted in Shell</span>
      </calcite-alert>
      <calcite-shell-panel id="primary-panel" slot="panel-start" position="start">
        <calcite-action-bar slot="action-bar">
          <calcite-action-group>
            <calcite-action text="Save" icon="save" indicator> </calcite-action>
            <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
          <calcite-action-group>
            <calcite-action icon="layers" text="Layers" active> </calcite-action>
            <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
            <calcite-action icon="legend" text="Legend"> </calcite-action>
            <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-panel heading="Panel">
          <div class="padded-content">Panel content<br />Padding is fake.</div>
        </calcite-panel>
      </calcite-shell-panel>
      <calcite-shell-panel slot="panel-end" position="end">
        <calcite-action-bar slot="action-bar">
          <calcite-tooltip slot="expand-tooltip" label="tooltip" disable-pointer>Add layers</calcite-tooltip>
          <calcite-action-group>
            <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
            <calcite-action text="Styles" icon="shapes"> </calcite-action>
            <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
            <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
            <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
            </calcite-action>
            <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-flow>
          <calcite-flow-item heading="Flow 01">
            <div class="padded-content">Flow 01 content<br />Padding is fake.</div>
          </calcite-flow-item>
          <calcite-flow-item heading="Flow 02">
            <div class="padded-content">Flow 02 content<br />Padding is fake.</div>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel>
      <calcite-panel heading="Main content">
        <div class="padded-content">The borders are only applied to "known" components.<br />Padding is fake.</div>
      </calcite-panel>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Notice outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
    </p>
  </main>\`)`,
      ...x.parameters?.docs?.source
    }
  }
};
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
    source: {
      originalSource: `(): string => html(\`
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Other page content outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum 
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </p>
    <calcite-shell
      style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
    >
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-sheet open slot="sheets" label="libero nunc" position="inline-start" display-mode="overlay">
            <calcite-panel closable heading="Ultrices neque"
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <calcite-button slot="footer" width="half" appearance="outline">tincidunt lobortis</calcite-button>
              <calcite-button slot="footer" width="half" appearance="outline">amet porttitor</calcite-button>
            </calcite-panel>
          </calcite-sheet>
      <calcite-shell-panel id="primary-panel" slot="panel-start" position="start">
        <calcite-action-bar slot="action-bar">
          <calcite-action-group>
            <calcite-action text="Save" icon="save" indicator> </calcite-action>
            <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
          <calcite-action-group>
            <calcite-action icon="layers" text="Layers" active> </calcite-action>
            <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
            <calcite-action icon="legend" text="Legend"> </calcite-action>
            <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-panel heading="Panel">
          <div class="padded-content">Panel content<br />Padding is fake.</div>
        </calcite-panel>
      </calcite-shell-panel>
      <calcite-shell-panel slot="panel-end" position="end">
        <calcite-action-bar slot="action-bar">
          <calcite-tooltip slot="expand-tooltip" label="tooltip" disable-pointer>Add layers</calcite-tooltip>
          <calcite-action-group>
            <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
            <calcite-action text="Styles" icon="shapes"> </calcite-action>
            <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
            <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
            <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
            </calcite-action>
            <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
            <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
          </calcite-action-group>
        </calcite-action-bar>
        <calcite-flow>
          <calcite-flow-item heading="Flow 01">
            <div class="padded-content">Flow 01 content<br />Padding is fake.</div>
          </calcite-flow-item>
          <calcite-flow-item heading="Flow 02">
            <div class="padded-content">Flow 02 content<br />Padding is fake.</div>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel>
      <calcite-panel heading="Main content">
        <div class="padded-content">The borders are only applied to "known" components.<br />Padding is fake.</div>
      </calcite-panel>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
    <p class="padded-content">
      <calcite-notice width="full" open><span slot="title">Notice outside of shell</span></calcite-notice>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
    </p>
    <script>
    document.addEventListener("calcitePanelClose", () => {
      document.querySelector("calcite-sheet").open = false;
    });
  <\/script>
\`)`,
      ...v.parameters?.docs?.source
    }
  }
};
y.parameters = {
  ...y.parameters,
  docs: {
    ...y.parameters?.docs,
    source: {
      originalSource: "(): string => slottedSheetHtml[0]",
      ...y.parameters?.docs?.source
    }
  }
};
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: "(): string => slottedSheetHtml[1]",
      ...f.parameters?.docs?.source
    }
  }
};
k.parameters = {
  ...k.parameters,
  docs: {
    ...k.parameters?.docs,
    source: {
      originalSource: '(): string => html(`<calcite-shell content-behind>\n  ${headerHTML}\n  <calcite-shell-panel slot="panel-start">${leadingPanelHTML}</calcite-shell-panel>\n  ${contentHTML}\n  <calcite-shell-center-row slot="center-row">${centerRowHTML}</calcite-shell-center-row>\n  <calcite-shell-panel slot="panel-end">${trailingPanelHTML}</calcite-shell-panel>\n  ${footerHTML}\n</calcite-shell>`)',
      ...k.parameters?.docs?.source
    }
  }
};
w.parameters = {
  ...w.parameters,
  docs: {
    ...w.parameters?.docs,
    source: {
      originalSource: `(): string => html(\`<calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
  >
      <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
    <div class="global-nav" slot="header">Header Example</div>
    <calcite-shell-center-row slot="panel-top">\${centerRowHTML}</calcite-shell-center-row>
    <footer slot="footer">Footer Example</footer>
  </calcite-shell>
\`)`,
      ...w.parameters?.docs?.source
    }
  }
};
C.parameters = {
  ...C.parameters,
  docs: {
    ...C.parameters?.docs,
    source: {
      originalSource: "(): string => contentBehindPanelBottomHtml[0]",
      ...C.parameters?.docs?.source
    }
  }
};
L.parameters = {
  ...L.parameters,
  docs: {
    ...L.parameters?.docs,
    source: {
      originalSource: "(): string => contentBehindPanelBottomHtml[1]",
      ...L.parameters?.docs?.source
    }
  }
};
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `(): string => html(\`
  <calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
  >
      <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
      <div class="global-nav" slot="header">Header Example</div>
      <calcite-shell-center-row slot="panel-bottom">\${centerRowHTML}</calcite-shell-center-row>
      <footer slot="footer">Footer Example</footer>
    </calcite-shell>
  \`)`,
      ...S.parameters?.docs?.source
    }
  }
};
T.parameters = {
  ...T.parameters,
  docs: {
    ...T.parameters?.docs,
    source: {
      originalSource: `(): string => html(\`
  <calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    "
  >
      <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
    <div class="global-nav" slot="header">Header Example</div>
    <calcite-shell-center-row slot="panel-top">\${centerRowHTML}</calcite-shell-center-row>
    <calcite-shell-center-row slot="panel-bottom">\${centerRowHTML}</calcite-shell-center-row>
    <footer slot="footer">Footer Example</footer>
  </calcite-shell>
\`)`,
      ...T.parameters?.docs?.source
    }
  }
};
P.parameters = {
  ...P.parameters,
  docs: {
    ...P.parameters?.docs,
    source: {
      originalSource: `(): string => html(\`
  <calcite-shell
    style="
    width:100%;
    height:500px;
    max-height:80%;
    position:relative;
    ">
    <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
    <div class="global-nav" slot="header">Header Example</div>
    <calcite-shell-panel
      slot="panel-start"
      displayMode="dock"
      position="start"
      display-mode="dock"
      width-scale="m"
      layout="vertical"
    >
      \${advancedLeadingPanelHTML}
    </calcite-shell-panel>
    <calcite-shell-panel
      slot="panel-end"
      displayMode="dock"
      position="end"
      display-mode="dock"
      width-scale="m"
      layout="vertical"
    >
      \${advancedTrailingPanelHTMl}
    </calcite-shell-panel>
    <calcite-shell-center-row slot="panel-top">\${centerRowHTML}</calcite-shell-center-row>
    <calcite-shell-center-row slot="panel-bottom">\${centerRowHTML}</calcite-shell-center-row>
    <footer slot="footer">Footer Example</footer>
  </calcite-shell>
\`)`,
      ...P.parameters?.docs?.source
    }
  }
};
M.parameters = {
  ...M.parameters,
  docs: {
    ...M.parameters?.docs,
    source: {
      originalSource: '(): string => html(`<calcite-shell content-behind>\n  ${headerHTML}\n  <calcite-shell-panel slot="panel-start">${leadingPanelHTML}</calcite-shell-panel>\n  ${contentHTML}\n  <calcite-shell-center-row slot="center-row">${centerRowWithActionBarHTML}</calcite-shell-center-row>\n  <calcite-shell-panel slot="panel-end">${trailingPanelHTML}</calcite-shell-panel>\n  ${footerHTML}\n</calcite-shell>`)',
      ...M.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(): string => html\` <calcite-shell
    style="
height:400px;
position:relative;
"
  >
    <calcite-shell-panel slot="panel-start" position="start" collapsed>
      <calcite-action-bar slot="action-bar">
        <calcite-tooltip open slot="expand-tooltip">Expand</calcite-tooltip>
      </calcite-action-bar>
    </calcite-shell-panel>
    <calcite-shell-center-row slot="panel-bottom">
      <div style="height: 100%; width: 600px; background-color: black;"></div>
    </calcite-shell-center-row>
  </calcite-shell>\``,
      ...s.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell
    style="
width:100%;
height:500px;
max-height:80%;
position:relative;
"
  >
    <calcite-shell-panel resizable slot="panel-start" position="start">
      <calcite-action-bar slot="action-bar" class="calcite-mode-dark">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Layers"><p>Start Panel</p></calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel resizable slot="panel-end" position="end">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
          <calcite-action text="Styles" icon="shapes"> </calcite-action>
          <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
          <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
          <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
          </calcite-action>
          <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="search" text="Search"></calcite-action>
          <calcite-action icon="measure" text="Measure"></calcite-action>
          <calcite-action text-enabled icon="road-sign" text="Directions" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="point" text="Location" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="pencil-square" text="Edit" disabled slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="clock" text="Time" disabled slot="menu-actions"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Tips" id="tip-manager-button">
            <calcite-icon icon="lightbulb" scale="s"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow id="flow">
        <calcite-flow-item
          heading="Configure popup"
          description="Popular Demographics in the United States (Beta) - County"
        >
          <p>End Panel</p>
        </calcite-flow-item>
      </calcite-flow>
    </calcite-shell-panel>
    <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"
    ></div>
    <calcite-shell-panel resizable layout="horizontal" slot="panel-top" position="start">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p>Top Panel</p>
    </calcite-shell-panel>
    <calcite-shell-panel resizable layout="horizontal" slot="panel-bottom" position="end">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <p>Bottom Panel</p>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...r.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell
    style="
width:800px;
height:600px;
position:relative;
"
  >
    <calcite-shell-panel display-mode="overlay" resizable id="primary-panel" slot="panel-start" position="start">
      <calcite-action-bar slot="action-bar" class="calcite-mode-dark">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Layers" height-scale="l" width-scale="m">
        <calcite-fab slot="fab" id="layer-fab" text="Add layers"></calcite-fab>
        <calcite-tooltip label="tooltip" reference-element="layer-fab" pointer-disabled>Add layers</calcite-tooltip>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel display-mode="overlay" resizable slot="panel-end" position="end">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Layer properties" icon="sliders-horizontal"> </calcite-action>
          <calcite-action text="Styles" icon="shapes"> </calcite-action>
          <calcite-action text="Filter" icon="layer-filter"> </calcite-action>
          <calcite-action text="Configure pop-ups" icon="popup" active> </calcite-action>
          <calcite-action text-enabled text="Configure attributes" icon="feature-details" slot="menu-actions">
          </calcite-action>
          <calcite-action text-enabled text="Labels" icon="label" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled text="Table" icon="table" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="search" text="Search"></calcite-action>
          <calcite-action icon="measure" text="Measure"></calcite-action>
          <calcite-action text-enabled icon="road-sign" text="Directions" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="point" text="Location" slot="menu-actions"></calcite-action>
          <calcite-action text-enabled icon="pencil-square" text="Edit" disabled slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="clock" text="Time" disabled slot="menu-actions"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Tips" id="tip-manager-button">
            <calcite-icon icon="lightbulb" scale="s"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow id="flow">
        <calcite-flow-item
          heading="Configure popup"
          description="Popular Demographics in the United States (Beta) - County"
          width-scale="m"
        >
          <calcite-action slot="header-actions-end" icon="x" text="Close"> </calcite-action>
          <calcite-block heading="Title" summary="County: {NAME}" collapsible>
            <calcite-icon icon="title" scale="m" slot="icon"></calcite-icon>
            <div class="combo-control">
              <div class="combo-button">
                <button class="combo-button__main">County: {NAME}</button>
                <calcite-action label="code icon" class="combo-action" scale="s" icon="code"></calcite-action>
              </div>
            </div>
          </calcite-block>
          <calcite-sortable-list>
            <calcite-block drag-handle heading="Attributes" summary="2/98" collapsible>
              <calcite-icon icon="feature-details" scale="m" slot="icon"></calcite-icon>
              <calcite-action label="ellipsis" slot="control" icon="ellipsis" scale="m"></calcite-action>
              <calcite-list drag-enabled>
                <calcite-list-item
                  label="2018 Total Households (Esri)"
                  value="Households"
                  description="{TOTHH_CY}"
                ></calcite-list-item>
                <calcite-list-item
                  label="2018 Average Household Size (Esri)"
                  value="Household"
                  description="{AVGHHSZ_CY}"
                ></calcite-list-item>
              </calcite-list>
              <div class="row">
                <calcite-button id="attribute-add" round icon="plus" scale="s" width="full" kind="neutral"
                  >Select attributes</calcite-button
                >
              </div>
            </calcite-block>
            <calcite-block drag-handle heading="Image" collapsible>
              <calcite-icon icon="image" scale="m" slot="icon"></calcite-icon>
              <calcite-action label="ellipsis" slot="control" icon="ellipsis" scale="m"></calcite-action>
              <section class="form-section">
                <label>
                  URL
                  <input type="text" value="https://ca-times.brightspotcdn.com/dims4/default/" />
                </label>
              </section>
              <calcite-block-section text="Options">
                <section class="form-section">
                  <label>
                    Title
                    <input type="text" placeholder="My cool title" />
                  </label>
                  <label>
                    Caption
                    <input type="text" placeholder="My cool caption" />
                  </label>
                  <label>
                    State
                    <select placeholder="My cool caption">
                      <option value="Denial">Denial</option>
                      <option value="Grace">Grace</option>
                      <option value="Confusion">Confusion</option>
                    </select>
                  </label>
                </section>
              </calcite-block-section>
              <calcite-block-section text="Advanced options">
                <section class="form-section">
                  <label>
                    Title
                    <input type="text" placeholder="My cool title" />
                  </label>
                  <label>
                    Caption
                    <input type="text" placeholder="My cool caption" />
                  </label>
                  <label>
                    State
                    <select placeholder="My cool caption">
                      <option value="Denial">Denial</option>
                      <option value="Grace">Grace</option>
                      <option value="Confusion">Confusion</option>
                    </select>
                  </label>
                </section>
              </calcite-block-section>
            </calcite-block>
            <calcite-block drag-handle heading="Text" summary="Cool. he {expression/..." collapsible>
              <calcite-icon icon="image" scale="m" slot="icon"></calcite-icon>
              <calcite-action label="ellipsis" slot="control" icon="ellipsis" scale="m"></calcite-action>
              <button class="multiline-button">Cool. he {expression/expr1} population is {expression/expr2}%...</button>
            </calcite-block>
          </calcite-sortable-list>
          <calcite-fab slot="fab" id="label-fab" text="Add label class"></calcite-fab>
          <calcite-tooltip label="tooltip" reference-element="label-fab" pointer-disabled>
            Add label class
          </calcite-tooltip>
        </calcite-flow-item>
      </calcite-flow>
    </calcite-shell-panel>
    <div
      style="
      width:100%;
      height:100%;
      background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"
    ></div>
    <calcite-shell-panel
      collapsed
      display-mode="overlay"
      resizable
      layout="horizontal"
      slot="panel-top"
      position="start"
    >
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Example"> Example </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel
      collapsed
      display-mode="overlay"
      resizable
      layout="horizontal"
      slot="panel-bottom"
      position="end"
    >
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator> </calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"> </calcite-action>
          <calcite-action text-enabled icon="collection" text="Open" slot="menu-actions"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action icon="layers" text="Layers" active> </calcite-action>
          <calcite-action icon="basemap" text="Basemaps"> </calcite-action>
          <calcite-action icon="legend" text="Legend"> </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks"> </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Share" icon="share"></calcite-action>
          <calcite-action text="Print" icon="print"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end">
          <calcite-action text="Feedback" icon="speech-bubble-plus"></calcite-action>
          <calcite-action text="What's next" icon="mega-phone"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Example"> Example </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...p.parameters?.docs?.source
    }
  }
};
A.parameters = {
  ...A.parameters,
  docs: {
    ...A.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell>
    <calcite-shell-panel slot="panel-end" width-scale="l" position="start" display-mode="block" resizable>
      <calcite-action-bar slot="action-bar">
        <calcite-action text="Save" icon="save" indicator></calcite-action>
        <calcite-action active icon="map" text="Map"></calcite-action>
        <calcite-action icon="layer" text="Layer"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading="Map Options">
        <calcite-button width="half" slot="footer"> Next </calcite-button>
        <calcite-block collapsible heading="Layer effects" description="Adjust blur, highlight, and more">
          <calcite-icon scale="s" slot="icon" icon="effects"></calcite-icon>
          <calcite-notice open>
            <div slot="message">Use layer effects sparingly, for emphasis</div>
          </calcite-notice>
        </calcite-block>
        <calcite-block collapsible heading="Symbology" description="Select type, color, and transparency">
          <calcite-icon scale="s" slot="icon" icon="map-pin"></calcite-icon>
          <calcite-notice open>
            <div slot="message">The viewers are going to love this</div>
          </calcite-notice>
        </calcite-block>
        <calcite-fab slot="fab"></calcite-fab>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...A.parameters?.docs?.source
    }
  }
};
$.parameters = {
  ...$.parameters,
  docs: {
    ...$.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell>
    <calcite-shell-panel
      layout="horizontal"
      slot="panel-top"
      position="start"
      display-mode="float-all"
      width-scale="m"
      calcite-hydrated=""
    >
      <calcite-action-bar
        slot="action-bar"
        expand-disabled=""
        layout="horizontal"
        overlay-positioning="absolute"
        calcite-hydrated=""
      >
        <calcite-action-group layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Save" icon="save" indicator="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="map" text="New" appearance="solid" scale="m" calcite-hydrated=""> </calcite-action>
          <calcite-action icon="collection" text="Open" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action icon="layers" text="Layers" active="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="basemap" text="Basemaps" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="legend" text="Legend" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action icon="bookmark" text="Bookmarks" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Share" icon="share" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
          <calcite-action text="Print" icon="print" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end" layout="horizontal" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action
            text="Feedback"
            icon="speech-bubble-plus"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
          <calcite-action
            text="What's next"
            icon="mega-phone"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel
        heading="Example"
        closable=""
        id="panel-top"
        overlay-positioning="absolute"
        scale="m"
        calcite-hydrated=""
      >
        <calcite-block open="" heading="Preview display-mode" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-chip-group id="chip-group-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="dock" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >dock</calcite-chip
            >
            <calcite-chip value="float-content" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >float content</calcite-chip
            >
            <calcite-chip value="overlay" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >overlay</calcite-chip
            >
            <calcite-chip value="float-all" appearance="solid" kind="neutral" scale="m" calcite-hydrated="" selected=""
              >float all</calcite-chip
            >
          </calcite-chip-group>
          <calcite-chip-group id="chip-layout-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="vertical" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >Vertical</calcite-chip
            >
            <calcite-chip selected="" value="horizontal" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >Horizontal</calcite-chip
            >
          </calcite-chip-group>
          <div class="tall-content-example" style="display: none"></div>
        </calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...$.parameters?.docs?.source
    }
  }
};
F.parameters = {
  ...F.parameters,
  docs: {
    ...F.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell>
    <calcite-shell-panel
      layout="vertical"
      slot="panel-top"
      position="start"
      display-mode="float-all"
      width-scale="m"
      calcite-hydrated=""
    >
      <calcite-action-bar
        slot="action-bar"
        expand-disabled=""
        layout="vertical"
        overlay-positioning="absolute"
        calcite-hydrated=""
      >
        <calcite-action-group layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Save" icon="save" indicator="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action
            icon="map"
            text="New"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
          <calcite-action
            icon="collection"
            text="Open"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action icon="layers" text="Layers" active="" appearance="solid" scale="m" calcite-hydrated="">
          </calcite-action>
          <calcite-action
            icon="basemap"
            text="Basemaps"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
          <calcite-action
            icon="legend"
            text="Legend"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
          <calcite-action
            icon="bookmark"
            text="Bookmarks"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
            text-enabled=""
            slot="menu-actions"
          >
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action text="Share" icon="share" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
          <calcite-action text="Print" icon="print" appearance="solid" scale="m" calcite-hydrated=""></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="actions-end" layout="vertical" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-action
            text="Feedback"
            icon="speech-bubble-plus"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
          <calcite-action
            text="What's next"
            icon="mega-phone"
            appearance="solid"
            scale="m"
            calcite-hydrated=""
          ></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel
        heading="Example"
        closable=""
        id="panel-top"
        overlay-positioning="absolute"
        scale="m"
        calcite-hydrated=""
      >
        <calcite-block open="" heading="Preview display-mode" overlay-positioning="absolute" calcite-hydrated="">
          <calcite-chip-group id="chip-group-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="dock" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >dock</calcite-chip
            >
            <calcite-chip value="float-content" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >float content</calcite-chip
            >
            <calcite-chip value="overlay" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >overlay</calcite-chip
            >
            <calcite-chip value="float-all" appearance="solid" kind="neutral" scale="m" calcite-hydrated="" selected=""
              >float all</calcite-chip
            >
          </calcite-chip-group>
          <calcite-chip-group id="chip-layout-panel-top" selection-mode="single-persist" scale="m" calcite-hydrated="">
            <calcite-chip value="vertical" appearance="solid" kind="neutral" scale="m" calcite-hydrated="" selected=""
              >Vertical</calcite-chip
            >
            <calcite-chip value="horizontal" appearance="solid" kind="neutral" scale="m" calcite-hydrated=""
              >Horizontal</calcite-chip
            >
          </calcite-chip-group>
          <div class="tall-content-example" style="display: none"></div>
        </calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...F.parameters?.docs?.source
    }
  }
};
E.parameters = {
  ...E.parameters,
  docs: {
    ...E.parameters?.docs,
    source: {
      originalSource: `(): string => html\` <calcite-shell>
    <calcite-shell-panel id="panel-start" slot="panel-start" position="start" resizable>
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator></calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Panel 1">
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-panel heading="Main content"></calcite-panel>
    <calcite-shell-panel id="panel-end" slot="panel-end" position="end" resizable>
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Save" icon="save" indicator></calcite-action>
          <calcite-action text-enabled icon="map" text="New" slot="menu-actions"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Panel 1">
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...E.parameters?.docs?.source
    }
  }
};
z.parameters = {
  ...z.parameters,
  docs: {
    ...z.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell>
    <calcite-shell-panel slot="panel-start" position="start" id="shell-panel-start">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" icon="plus"></calcite-action>
          <calcite-action active text="Layers" indicator icon="layers"></calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Undo" icon="undo"></calcite-action>
          <calcite-action text="Redo" indicator icon="redo"></calcite-action>
          <calcite-action text="Save" disabled icon="save"></calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="bottom-actions">
          <calcite-action text="Tips" icon="question"></calcite-action>
          <calcite-action text="Settings" indicator icon="gear"></calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-panel heading="Layers" id="panel-start" closable>
        <calcite-block
          collapsible
          heading="Symbology"
          description="Select type, color, and transparency"
          icon-start="map-pin"
        >
          <calcite-notice open>
            <div slot="message">The viewers are going to love this</div>
          </calcite-notice>
        </calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel slot="panel-bottom" position="end" layout="horizontal">
      <calcite-panel heading="Content">
        <calcite-tabs>
          <calcite-tab-nav slot="title-group">
            <calcite-tab-title selected> Watercraft </calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
          </calcite-tab-nav>
          <calcite-tab selected>
            <calcite-notice icon="embark" open>
              <div slot="message">Recommended for coastal use</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
        </calcite-tabs>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-shell-panel slot="panel-end" position="end" layout="vertical">
      <calcite-panel heading="Content">
        <calcite-tabs>
          <calcite-tab-nav slot="title-group">
            <calcite-tab-title selected> Watercraft </calcite-tab-title>
            <calcite-tab-title>Automobiles</calcite-tab-title>
            <calcite-tab-title>Aircraft</calcite-tab-title>
          </calcite-tab-nav>
          <calcite-tab selected>
            <calcite-notice icon="embark" open>
              <div slot="message">Recommended for coastal use</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="car" open>
              <div slot="message">A good choice for inland adventure</div>
            </calcite-notice>
          </calcite-tab>
          <calcite-tab>
            <calcite-notice icon="plane" open>
              <div slot="message">Cross continents quickly</div>
            </calcite-notice>
          </calcite-tab>
        </calcite-tabs>
      </calcite-panel>
    </calcite-shell-panel>
  </calcite-shell>\``,
      ...z.parameters?.docs?.source
    }
  }
};
H.parameters = {
  ...H.parameters,
  docs: {
    ...H.parameters?.docs,
    source: {
      originalSource: `(): string => html\` <style>
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: gray;
      }
    </style>
    <calcite-shell content-behind>
      <div id="viewDiv"></div>
      <calcite-shell-panel slot="panel-start"></calcite-shell-panel>
      <calcite-shell-panel slot="panel-end">
        <calcite-flow>
          <calcite-flow-item heading="panel header">
            <calcite-button id="button" style="margin-top:20px">open popover</calcite-button>
          </calcite-flow-item>
        </calcite-flow>
      </calcite-shell-panel> </calcite-shell
    ><calcite-popover open reference-element="button" offset-distance="-50" offset-skidding="15" style="z-index: 100">
      <calcite-panel height-scale="m" heading="popover panel header" style="height: 400px;"> </calcite-panel
    ></calcite-popover>\``,
      ...H.parameters?.docs?.source
    }
  }
};
B.parameters = {
  ...B.parameters,
  docs: {
    ...B.parameters?.docs,
    source: {
      originalSource: `(): string => html\`<calcite-shell>
    <calcite-shell-panel slot="panel-start" position="start" id="shell-panel-start">
      <calcite-action-bar slot="action-bar">
        <calcite-action id="target-element" text="Save" icon="save" indicator></calcite-action>
        <calcite-action active icon="map" text="Map"></calcite-action>
        <calcite-action icon="layer" text="Layer"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading="Map" id="panel-start">
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>

    <!--  Popover here  -->
    <calcite-popover overlay-positioning="fixed" reference-element="target-element" open
      ><p>This is a popover</p></calcite-popover
    >

    <calcite-shell-panel slot="panel-end" position="end" id="shell-panel-end" collapsed>
      <calcite-action-bar slot="action-bar">
        <calcite-action text="Layer" icon="sliders-horizontal"></calcite-action>
        <calcite-action text="Styles" icon="shapes"></calcite-action>
        <calcite-action text="Filter" icon="layer-filter"></calcite-action>
        <calcite-action text="Configure" icon="popup"></calcite-action>
      </calcite-action-bar>
      <calcite-panel heading id="panel-end" closable closed>
        <calcite-block heading="Block 1" collapsible></calcite-block>
      </calcite-panel>
    </calcite-shell-panel>
    <calcite-panel heading="Content"></calcite-panel>
  </calcite-shell>\``,
      ...B.parameters?.docs?.source
    }
  }
};
const se = ["simple", "darkModeRTL_TestOnly", "closedPanelsFloat", "closedPanelsFloatContent", "endPanelFloat_TestOnly", "endPanelFloatContent_TestOnly", "slottedModalAndAlert", "slottedSheetOverlay", "slottedSheetFloat", "slottedSheetFloatContent", "contentBehind", "slottedPanelTop_TestOnly", "contentBehindPanelBottomFloat", "contentBehindPanelBottomFloatContent", "slottedPanelBottom_TestOnly", "slottedPanelTopAndBottom", "slottedPanelTopAndBottomAndSides", "shellCenterRowWithActionBar_TestOnly", "shellPanelZIndex_TestOnly", "resizableShellPanels", "overlayDisplayMode_TestOnly", "panelEndWithPositionStart_TestOnly", "panelTopFloatHorizontal_TestOnly", "panelTopFloatVertical_TestOnly", "resizeHandlePositioning", "shellPanelWithTabs", "panelWithPopoverZIndex", "popoverZIndex"];
export {
  se as __namedExportsOrder,
  u as closedPanelsFloat,
  b as closedPanelsFloatContent,
  k as contentBehind,
  C as contentBehindPanelBottomFloat,
  L as contentBehindPanelBottomFloatContent,
  o as darkModeRTL_TestOnly,
  oe as default,
  g as endPanelFloatContent_TestOnly,
  m as endPanelFloat_TestOnly,
  p as overlayDisplayMode_TestOnly,
  A as panelEndWithPositionStart_TestOnly,
  $ as panelTopFloatHorizontal_TestOnly,
  F as panelTopFloatVertical_TestOnly,
  H as panelWithPopoverZIndex,
  B as popoverZIndex,
  r as resizableShellPanels,
  E as resizeHandlePositioning,
  M as shellCenterRowWithActionBar_TestOnly,
  z as shellPanelWithTabs,
  s as shellPanelZIndex_TestOnly,
  h as simple,
  x as slottedModalAndAlert,
  S as slottedPanelBottom_TestOnly,
  T as slottedPanelTopAndBottom,
  P as slottedPanelTopAndBottomAndSides,
  w as slottedPanelTop_TestOnly,
  y as slottedSheetFloat,
  f as slottedSheetFloatContent,
  v as slottedSheetOverlay
};
