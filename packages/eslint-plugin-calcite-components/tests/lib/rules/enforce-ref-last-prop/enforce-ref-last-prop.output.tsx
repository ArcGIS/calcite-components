// @ts-nocheck
@Component({ tag: "sample-tag" })
export class SampleTag {
  render() {
    return (
      <Host>
        <div
          class="some-class"
          id="use-case-1"
          onClick={() => {
            /* click! */
          }}
          tabIndex={0}
          // eslint-disable-next-line react/jsx-sort-props -- auto-generated by @esri/calcite-components/enforce-ref-last-prop
          ref={(el: HTMLDivElement): void => {
            /* refEl */
          }}
        >
          case where ref is not last prop
        </div>
        <div
          class="some-class"
          id="use-case-2"
          onClick={() => {
            /* click! */
          }}
          tabIndex={0}
          // eslint-disable-next-line react/jsx-sort-props -- auto-generated by @esri/calcite-components/enforce-ref-last-prop
          ref={(el: HTMLDivElement): void => {
            /* refEl */
          }}
        >
          case where ref last prop, but not commented
        </div>
        <div
          class="some-class"
          id="use-case-3"
          onClick={() => {
            /* click! */
          }}
          tabIndex={0}
          // eslint-disable-next-line react/jsx-sort-props -- auto-generated by @esri/calcite-components/enforce-ref-last-prop
          ref={(el: HTMLDivElement): void => {
            /* refEl */
          }}
        >
          case where ref last prop, and already commented Note: this is marked as wrong because
          RuleTester can't configure multiple rules, so we ignore the ESLint error from not finding
          the disabled rule
        </div>
        <div
          class="some-class"
          id="use-case-4"
          onClick={() => {
            /* click! */
          }}
          tabIndex={0}
          // eslint-disable-next-line react/jsx-sort-props -- auto-generated by @esri/calcite-components/enforce-ref-last-prop
          ref={(el: HTMLDivElement): void => {
            /* refEl */
          }}
        >
          case where ref is not last prop and already commented Note: this is marked as wrong
          because RuleTester can't configure multiple rules, so we ignore the ESLint error from not
          finding the disabled rule
        </div>
      </Host>
    );
  }
}
