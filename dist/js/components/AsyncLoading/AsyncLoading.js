"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
/* tslint:disable-next-line:no-var-requires */
var styles = require("./AsyncLoading.module.css");
/* tslint:enable */
// the 'moment' static import is only used for its types so typescript deletes it
import * as moment from "moment";
var AsyncLoading = (function (_super) {
    __extends(AsyncLoading, _super);
    function AsyncLoading(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.loadingMomentJs = function () {
            // note, if we have at least one reference to moment in our code without lazyLoading
            // involved, then the module will be included in the bundle by webpack
            var time = moment().format();
            console.log(time);
            _this.setState({ time: time });
        };
        _this.lazyLoadingMomentJs = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var momentAsync, timeAsync;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, import(/* webpackChunkName: "momentjs" */ "moment")];
                    case 1:
                        momentAsync = _a.sent();
                        timeAsync = momentAsync().format();
                        console.log("TypeScript >= 2.4.0 with async await:");
                        console.log(timeAsync);
                        this.setState({ time: timeAsync });
                        // TypeScript >= 2.4.0 with then, catch
                        import(/* webpackChunkName: "momentjs" */ "moment")
                            .then(function (moment) {
                            // lazyModule has all of the proper types, autocomplete works,
                            // type checking works, code references work \o/
                            var time = moment().format();
                            console.log("TypeScript >= 2.4.0 with then, catch:");
                            console.log(time);
                            _this.setState({ time: time });
                        })
                            .catch(function (err) {
                            console.log("Failed to load moment", err);
                        });
                        // TypeScript < 2.4 workaround
                        // if we use moment inside System.import then we will use lazy loading
                        System.import(/* webpackChunkName: "momentjs" */ "moment")
                            .then(function (moment) {
                            // lazyModule has all of the proper types, autocomplete works,
                            // type checking works, code references work \o/
                            var time = moment().format();
                            console.log("TypeScript < 2.4 workaround:");
                            console.log(time);
                            _this.setState({ time: time });
                        })
                            .catch(function (err) {
                            console.log("Failed to load moment", err);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        // Default State values
        _this.state = {
            time: "No time"
        };
        return _this;
    }
    AsyncLoading.prototype.render = function () {
        return (React.createElement("div", { className: styles.container },
            React.createElement("button", { onClick: this.lazyLoadingMomentJs }, "Lazy Load momentjs"),
            React.createElement("div", null, this.state.time)));
    };
    return AsyncLoading;
}(React.Component));
export default AsyncLoading;
//# sourceMappingURL=AsyncLoading.js.map