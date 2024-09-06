import { E2EPage } from "@stencil/core/testing";
import type { JSX } from "../../components";

export type ComponentTag = keyof JSX.IntrinsicElements;
export type ComponentHTML = string;
export type TagOrHTML = ComponentTag | ComponentHTML;
export type BeforeContent = (page: E2EPage) => Promise<void>;

export type TagAndPage = {
  tag: ComponentTag;
  page: E2EPage;
};

export type TagOrHTMLWithBeforeContent = {
  tagOrHTML: TagOrHTML;

  /**
   * Allows for custom setup of the page.
   *
   * This is useful for test helpers that need to create and configure the test page before running tests.
   *
   * @param page
   */
  beforeContent: BeforeContent;
};

export type ComponentTestContent = TagOrHTML | TagAndPage;
export type ComponentTestSetupProvider =
  | ((programmaticE2EPage?: E2EPage) => ComponentTestContent)
  | ((programmaticE2EPage?: E2EPage) => Promise<ComponentTestContent>);
export type ComponentTestSetup = ComponentTestContent | ComponentTestSetupProvider;

/**
 * This interface is used to specify focus targets for different interactions.
 */
export interface TabAndClickFocusTargets {
  tab: string;
  click:
    | string
    | {
        pointer: string;
        method: string;
      };
}

export type FocusTarget = "host" | "child" | "none";

export interface DisabledOptions {
  /**
   *  Use this to specify whether the test should cover focusing.
   */
  focusTarget?: FocusTarget | TabAndClickFocusTargets;

  /**
   *  Use this to specify the main wrapped component in shadow DOM that handles disabling interaction.
   *
   *  Note: this should only be used for components that wrap a single component that implements disabled behavior.
   */
  shadowAriaAttributeTargetSelector?: string;
}
