export const CSS = {
  container: "container",
  table: "table",
  scrim: "scrim",
  tableContainer: "table-container",
  sticky: "sticky-pos"
};

export const debounceTimeout = 100;

export type SelectionAppearance = "border" | "icon";

export type SelectionMode = "single" | "multiple" | "none";

import { ItemData } from "../list-item/interfaces";

export interface CalciteListFilterDetail {
  calciteListFilter: ItemData[];
  filterText: string;
}
