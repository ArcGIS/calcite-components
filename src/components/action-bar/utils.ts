import { forceUpdate } from "@stencil/core";
import { SLOTS as ACTION_MENU_SLOTS } from "../action-menu/resources";
import { SLOTS as ACTION_GROUP_SLOTS } from "../action-group/resources";
import { Layout } from "../interfaces";

export const overflowActionsDebounceInMs = 150;
const groupBufferPx = 2;

const arrayMax = (array: number[]) => array.reduce((a, b) => Math.max(a, b));

export const geActionDimensions = (
  actions: HTMLCalciteActionElement[]
): { actionWidth: number; actionHeight: number } => {
  return {
    actionWidth: arrayMax(actions.map((action) => action.clientWidth)),
    actionHeight: arrayMax(actions.map((action) => action.clientHeight))
  };
};

const getMaxActionCount = ({
  width,
  actionWidth,
  layout,
  height,
  actionHeight,
  groupCount
}: {
  layout: Extract<"horizontal" | "vertical", Layout>;
  height: number;
  actionWidth: number;
  width: number;
  actionHeight: number;
  groupCount: number;
}): number => {
  const maxPx = layout === "horizontal" ? width : height;
  const itemPx = layout === "horizontal" ? actionWidth : actionHeight;
  return Math.floor((maxPx - groupCount * groupBufferPx) / itemPx);
};

export const getOverflowCount = ({
  layout,
  actionCount,
  actionWidth,
  width,
  actionHeight,
  height,
  groupCount
}: {
  layout: Extract<"horizontal" | "vertical", Layout>;
  actionCount: number;
  actionWidth: number;
  width: number;
  actionHeight: number;
  height: number;
  groupCount: number;
}): number => {
  return Math.max(actionCount - getMaxActionCount({ width, actionWidth, layout, height, actionHeight, groupCount }), 0);
};

export const queryActions = (el: HTMLElement): HTMLCalciteActionElement[] => {
  return Array.from(el.querySelectorAll("calcite-action")).filter((action) =>
    action.closest("calcite-action-menu") ? action.slot === ACTION_MENU_SLOTS.trigger : true
  );
};

export const overflowActions = ({
  actionGroups,
  expanded,
  overflowCount
}: {
  actionGroups: HTMLCalciteActionGroupElement[];
  expanded: boolean;
  overflowCount: number;
}): void => {
  let needToSlotCount = overflowCount;
  actionGroups.reverse().forEach((group) => {
    let slottedWithinGroupCount = 0;

    const groupActions = queryActions(group).reverse();

    groupActions.forEach((groupAction) => {
      if (groupAction.slot === ACTION_GROUP_SLOTS.menuActions) {
        groupAction.removeAttribute("slot");
        groupAction.textEnabled = expanded;
      }
    });

    if (needToSlotCount > 0) {
      groupActions.some((groupAction) => {
        const unslottedActions = groupActions.filter((action) => !action.slot);

        if (unslottedActions.length > 1 && groupActions.length > 2 && !groupAction.closest("calcite-action-menu")) {
          groupAction.textEnabled = true;
          groupAction.setAttribute("slot", ACTION_GROUP_SLOTS.menuActions);
          slottedWithinGroupCount++;

          if (slottedWithinGroupCount > 1) {
            needToSlotCount--;
          }
        }

        return needToSlotCount < 1;
      });
    }

    forceUpdate(group);
  });
};
