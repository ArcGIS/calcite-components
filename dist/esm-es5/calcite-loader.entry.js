import { r as registerInstance, h, H as Host, g as getElement } from './core-4df481c3.js';
import { g as getElementDir } from './dom-e9ddd61f.js';
import { g as guid } from './guid-cb609d41.js';
var CalciteLoader = /** @class */ (function () {
    function CalciteLoader(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Show the loader
         */
        this.isActive = false;
        /**
         * Inline loaders are smaller and will appear to the left of the text
         */
        this.inline = false;
        /**
         * Use indeterminate if finding actual progress value is impossible
         */
        this.type = "indeterminate";
        /**
         * Percent complete of 100, only valid for determinate indicators
         */
        this.value = 0;
        /**
         * Text which should appear under the loading indicator (optional)
         */
        this.text = "";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.loaderBarOffsets = [0, 0, 0];
        /**
         * @internal
         */
        this.loaderBarRates = [1, 2.25, 3.5];
        /**
         * @internal
         */
        this.isEdge = false;
        /**
         * @internal
         */
        this.animationID = null;
        /**
         * @internal
         */
        this.guid = "calcite-loader-" + guid();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteLoader.prototype.componentWillLoad = function () {
        this.isEdge = /Edge/.test(navigator.userAgent);
        if (this.isEdge) {
            this.updateOffset();
        }
    };
    CalciteLoader.prototype.componentDidUnload = function () {
        if (this.animationID) {
            window.cancelAnimationFrame(this.animationID);
        }
    };
    CalciteLoader.prototype.render = function () {
        var dir = getElementDir(this.el);
        var id = this.el.id || this.guid;
        var ariaAttributes = {
            "aria-valuenow": this.value,
            "aria-valuemin": 0,
            "aria-valuemax": 100
        };
        var size = this.inline ? 16 : 56;
        var viewbox = this.inline ? "0 0 16 16" : "0 0 56 56";
        var isDeterminate = this.type === "determinate";
        var styleProperties = {};
        if (this.isEdge) {
            styleProperties["--calcite-loader-offset"] = this.loaderBarOffsets[0] + "%";
            styleProperties["--calcite-loader-offset2"] = this.loaderBarOffsets[1] + "%";
            styleProperties["--calcite-loader-offset3"] = this.loaderBarOffsets[2] + "%";
        }
        var progress = {
            "--calcite-loader-progress": -400 - this.value * 4 + "%"
        };
        return (h(Host, Object.assign({ id: id, dir: dir, role: "progressbar" }, (this.type === "determinate" ? ariaAttributes : {}), { style: styleProperties }), h("svg", { viewBox: viewbox, class: "loader__square" }, h("rect", { width: size, height: size })), h("svg", { viewBox: viewbox, class: "loader__square loader__square--2" }, h("rect", { width: size, height: size })), h("svg", { viewBox: viewbox, class: "loader__square loader__square--3", style: isDeterminate ? progress : {} }, h("rect", { width: size, height: size })), this.text ? h("div", { class: "loader__text" }, this.text) : "", this.value ? (h("div", { class: "loader__percentage" }, Math.floor(this.value))) : ("")));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    CalciteLoader.prototype.updateOffset = function () {
        var _this = this;
        this.loaderBarOffsets = this.rotateLoaderBars(this.loaderBarOffsets);
        this.animationID = window.requestAnimationFrame(function () { return _this.updateOffset(); });
    };
    /**
     * @internal
     */
    CalciteLoader.prototype.rotateLoaderBars = function (barOffsets) {
        var _this = this;
        return barOffsets.map(function (offset, i) {
            if (offset > -400) {
                return offset - _this.loaderBarRates[i];
            }
            else {
                return 0;
            }
        });
    };
    Object.defineProperty(CalciteLoader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteLoader, "style", {
        get: function () { return ":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-loader-spot:#007ac2;--calcite-loader-spot-light:#009af2;--calcite-loader-spot-dark:#00619b;--calcite-loader-neutral:#eaeaea}:host([theme=dark]){--calcite-loader-neutral:#151515}:host{position:relative;display:none;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:54px;stroke:var(--calcite-loader-light);stroke-width:6px;stroke-dashoffset:0;fill:none;animation:loader-color-shift 2s linear infinite alternate-reverse}:host([is-active]){display:block}.loader__text{margin-top:4rem;line-height:1.5}.loader__percentage,.loader__text{display:block;text-align:center;font-size:.875rem}.loader__percentage{left:50%;margin-top:27px;line-height:.25}.loader__percentage,.loader__square{width:54px;position:absolute;top:4rem;margin-left:-27px}.loader__square{height:54px;left:0;left:50%;stroke-dasharray:50% 350%;-webkit-animation:loader-clockwise 2s linear infinite;animation:loader-clockwise 2s linear infinite}.loader__square--2{stroke-dasharray:100% 225% 50% 25%;-webkit-animation:loader-clockwise 1s linear infinite;animation:loader-clockwise 1s linear infinite}.loader__square--3{stroke-dasharray:50% 50% 75% 225%;-webkit-animation:loader-clockwise 1.85s linear infinite;animation:loader-clockwise 1.85s linear infinite}\@supports (-ms-ime-align:auto){.loader__square{stroke-dashoffset:var(--calcite-loader-offset);-webkit-animation:none;animation:none}.loader__square--2{stroke-dashoffset:var(--calcite-loader-offset2)}.loader__square--3{stroke-dashoffset:var(--calcite-loader-offset3)}}:host([type=determinate]){stroke:var(--calcite-loader-neutral);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__square--3{stroke:var(--calcite-loader-spot);stroke-dasharray:400%;stroke-dashoffset:var(--calcite-loader-progress);-webkit-transition:all 50ms linear;transition:all 50ms linear;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation:none;animation:none}:host([inline]){stroke:currentColor;stroke-width:4px;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:16px;min-height:16px;width:16px;margin-right:8px;vertical-align:-2px}:host([inline][dir=rtl]){margin-left:8px;margin-right:0}:host([is-active][inline]){display:inline-block}:host([inline]) .loader__square{margin:0;position:absolute;top:0;left:0;width:16px;height:16px}\@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@-webkit-keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}\@keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteLoader;
}());
export { CalciteLoader as calcite_loader };
