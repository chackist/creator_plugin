"use strict";
cc._RF.push(module, 'c7b9dRZFihFWbg7pANdEFk4', 'ColorCom');
// ColorCom.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, inspector = _a.inspector, executeInEditMode = _a.executeInEditMode;
var EColor;
(function (EColor) {
    EColor[EColor["red"] = 0] = "red";
    EColor[EColor["blue"] = 1] = "blue";
    EColor[EColor["green"] = 2] = "green";
    EColor[EColor["white"] = 3] = "white";
})(EColor || (EColor = {}));
var colorMap = {};
colorMap[EColor.red] = cc.color(255, 0, 0);
colorMap[EColor.blue] = cc.color(0, 0, 255);
colorMap[EColor.green] = cc.color(0, 255, 0);
colorMap[EColor.white] = cc.color(255, 255, 255);
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._custom = EColor.white;
        return _this;
    }
    Object.defineProperty(NewClass.prototype, "custom", {
        get: function () {
            return this._custom;
        },
        set: function (value) {
            this._custom = value;
            this.node.color = colorMap[this.custom];
        },
        enumerable: false,
        configurable: true
    });
    NewClass.prototype.onLoad = function () {
        this.node.color = colorMap[this.custom];
    };
    __decorate([
        property
    ], NewClass.prototype, "_custom", void 0);
    __decorate([
        property
    ], NewClass.prototype, "custom", null);
    NewClass = __decorate([
        ccclass,
        inspector("packages://learn/inspector/color.js"),
        executeInEditMode()
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();