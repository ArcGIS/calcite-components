import { i as b } from "./helpers.js";
import { p as u } from "./placeholder-image.js";
import { b as p, m as v } from "./utils.js";
import { h as e } from "./formatting.js";
import { A as y } from "./resources14.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v3.0.0-next.100
*/
const {
  scale: m,
  appearance: h,
  kind: g
} = y, A = {
  title: "Components/Chip",
  args: {
    scale: m.defaultValue,
    appearance: h.defaultValue,
    kind: g.values[4],
    closable: !1,
    selected: !1,
    label: "My great chip"
  },
  argTypes: {
    scale: {
      options: m.values,
      control: {
        type: "select"
      }
    },
    appearance: {
      options: h.values.filter((a) => a !== "transparent"),
      control: {
        type: "select"
      }
    },
    kind: {
      options: g.values.filter((a) => a !== "danger" && a !== "info" && a !== "warning" && a !== "success"),
      control: {
        type: "select"
      }
    },
    label: {
      control: {
        type: "text"
      }
    }
  }
}, r = (a) => e`
  <div style="background-color:white;padding:100px">
    <calcite-chip
      scale="${a.scale}"
      appearance="${a.appearance}"
      kind="${a.kind}"
      label="${a.label}"
      ${p("closable", a.closable)}
      ${p("selected", a.selected)}
      >My great chip</calcite-chip
    >
  </div>
`, l = (a) => e`
  <div style="background-color:white;padding:100px">
    <calcite-chip icon="${b[0]}" scale="m" appearance="solid" kind="neutral" label="${a.label}">
      My great chip</calcite-chip
    >
  </div>
`, i = (a) => e`
  <div style="background-color:white;padding:100px">
    <calcite-chip scale="m" appearance="solid" kind="neutral" label="${a.label}">
      <img slot="image" src="${u({
  width: 50,
  height: 50
})}" />
      My great chip</calcite-chip
    >
  </div>
`, n = () => e`
    <div style="background-color:white;padding:100px">
      <calcite-chip scale="m" appearance="solid" kind="neutral" label="Username">
        <calcite-avatar
          slot="image"
          scale="m"
          user-id="25684463a00c449585dbb32a065f6b74"
          full-name="user name"
        ></calcite-avatar>
        User Name
      </calcite-chip>
    </div>
  `, t = () => e`
    <div style="background-color:white;padding:100px">
      <calcite-chip scale="m" appearance="solid" kind="neutral" icon="layer" label="Username">
        <calcite-avatar
          slot="image"
          scale="m"
          user-id="25684463a00c449585dbb32a065f6b74"
          full-name="user name"
        ></calcite-avatar>
        User Name
      </calcite-chip>
    </div>
  `, s = (a) => e`
  <div style="background-color:white;padding:100px">
    <calcite-chip icon="${b[0]}" scale="m" appearance="solid" kind="neutral" label="${a.label}" closable>
      My great chip</calcite-chip
    >
  </div>
`, o = () => e`
    <div style="background-color:white;padding:100px">
      <calcite-chip scale="m" appearance="solid" kind="neutral" label="Username" closable icon="layer">
        <calcite-avatar
          slot="image"
          scale="m"
          user-id="25684463a00c449585dbb32a065f6b74"
          full-name="user name"
        ></calcite-avatar>
        User Name
      </calcite-chip>
    </div>
  `, d = () => e`<calcite-chip icon="banana" style="--calcite-icon-color: #ac9f42" label="Banana" closable>Banana</calcite-chip>`, c = (a) => e`
  <div style="background-color:#2b2b2b;padding:100px" dir="rtl">
    <calcite-chip class="calcite-mode-dark" label="${a.label}">My great chip</calcite-chip>
  </div>
`;
c.parameters = {
  themes: v
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: ChipStoryArgs): string => html\`
  <div style="background-color:white;padding:100px">
    <calcite-chip
      scale="\${args.scale}"
      appearance="\${args.appearance}"
      kind="\${args.kind}"
      label="\${args.label}"
      \${boolean("closable", args.closable)}
      \${boolean("selected", args.selected)}
      >My great chip</calcite-chip
    >
  </div>
\``,
      ...r.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `(args: ChipStoryArgs): string => html\`
  <div style="background-color:white;padding:100px">
    <calcite-chip icon="\${iconNames[0]}" scale="m" appearance="solid" kind="neutral" label="\${args.label}">
      My great chip</calcite-chip
    >
  </div>
\``,
      ...l.parameters?.docs?.source
    }
  }
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: ChipStoryArgs): string => html\`
  <div style="background-color:white;padding:100px">
    <calcite-chip scale="m" appearance="solid" kind="neutral" label="\${args.label}">
      <img slot="image" src="\${placeholderImage({
  width: 50,
  height: 50
})}" />
      My great chip</calcite-chip
    >
  </div>
\``,
      ...i.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(): string => {
  return html\`
    <div style="background-color:white;padding:100px">
      <calcite-chip scale="m" appearance="solid" kind="neutral" label="Username">
        <calcite-avatar
          slot="image"
          scale="m"
          user-id="25684463a00c449585dbb32a065f6b74"
          full-name="user name"
        ></calcite-avatar>
        User Name
      </calcite-chip>
    </div>
  \`;
}`,
      ...n.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(): string => {
  return html\`
    <div style="background-color:white;padding:100px">
      <calcite-chip scale="m" appearance="solid" kind="neutral" icon="layer" label="Username">
        <calcite-avatar
          slot="image"
          scale="m"
          user-id="25684463a00c449585dbb32a065f6b74"
          full-name="user name"
        ></calcite-avatar>
        User Name
      </calcite-chip>
    </div>
  \`;
}`,
      ...t.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: ChipStoryArgs): string => html\`
  <div style="background-color:white;padding:100px">
    <calcite-chip icon="\${iconNames[0]}" scale="m" appearance="solid" kind="neutral" label="\${args.label}" closable>
      My great chip</calcite-chip
    >
  </div>
\``,
      ...s.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(): string => {
  return html\`
    <div style="background-color:white;padding:100px">
      <calcite-chip scale="m" appearance="solid" kind="neutral" label="Username" closable icon="layer">
        <calcite-avatar
          slot="image"
          scale="m"
          user-id="25684463a00c449585dbb32a065f6b74"
          full-name="user name"
        ></calcite-avatar>
        User Name
      </calcite-chip>
    </div>
  \`;
}`,
      ...o.parameters?.docs?.source
    }
  }
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: '(): string => html`<calcite-chip icon="banana" style="--calcite-icon-color: #ac9f42" label="Banana" closable>Banana</calcite-chip>`',
      ...d.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(args: ChipStoryArgs): string => html\`
  <div style="background-color:#2b2b2b;padding:100px" dir="rtl">
    <calcite-chip class="calcite-mode-dark" label="\${args.label}">My great chip</calcite-chip>
  </div>
\``,
      ...c.parameters?.docs?.source
    }
  }
};
const S = ["simple", "withIcon", "withImage", "withAvatar", "withAvatarAndIcon", "withClosable", "withAvatarAndIconAndClosable", "overriddenIconColor", "darkModeRTL_TestOnly"];
export {
  S as __namedExportsOrder,
  c as darkModeRTL_TestOnly,
  A as default,
  d as overriddenIconColor,
  r as simple,
  n as withAvatar,
  t as withAvatarAndIcon,
  o as withAvatarAndIconAndClosable,
  s as withClosable,
  l as withIcon,
  i as withImage
};
