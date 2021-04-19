
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/learn-res/ColorCom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2xlYXJuL3Jlcy9Db2xvckNvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQWtELEVBQUUsQ0FBQyxVQUFVLEVBQTlELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLFNBQVMsZUFBQSxFQUFDLGlCQUFpQix1QkFBaUIsQ0FBQztBQUV0RSxJQUFLLE1BS0o7QUFMRCxXQUFLLE1BQU07SUFDUCxpQ0FBRyxDQUFBO0lBQ0gsbUNBQUksQ0FBQTtJQUNKLHFDQUFLLENBQUE7SUFDTCxxQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQUxJLE1BQU0sS0FBTixNQUFNLFFBS1Y7QUFDRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDcEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFLakQ7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFmRyxhQUFPLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQTs7SUFlbEMsQ0FBQztJQVpHLHNCQUFJLDRCQUFNO2FBS1Y7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQVBELFVBQVksS0FBSztZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFNRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBZEQ7UUFEQyxRQUFROzZDQUNxQjtJQUc5QjtRQURDLFFBQVE7MENBSVI7SUFSZ0IsUUFBUTtRQUg1QixPQUFPO1FBQ1AsU0FBUyxDQUFDLHFDQUFxQyxDQUFDO1FBQ2hELGlCQUFpQixFQUFFO09BQ0MsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LGluc3BlY3RvcixleGVjdXRlSW5FZGl0TW9kZX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFQ29sb3J7XHJcbiAgICByZWQsXHJcbiAgICBibHVlLFxyXG4gICAgZ3JlZW4sXHJcbiAgICB3aGl0ZSxcclxufVxyXG5jb25zdCBjb2xvck1hcCA9IHt9O1xyXG5jb2xvck1hcFtFQ29sb3IucmVkXSA9IGNjLmNvbG9yKDI1NSwgMCwgMCk7XHJcbmNvbG9yTWFwW0VDb2xvci5ibHVlXSA9IGNjLmNvbG9yKDAsIDAsIDI1NSk7XHJcbmNvbG9yTWFwW0VDb2xvci5ncmVlbl0gPSBjYy5jb2xvcigwLCAyNTUsIDApO1xyXG5jb2xvck1hcFtFQ29sb3Iud2hpdGVdID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG5AY2NjbGFzc1xyXG5AaW5zcGVjdG9yKFwicGFja2FnZXM6Ly9sZWFybi9pbnNwZWN0b3IvY29sb3IuanNcIilcclxuQGV4ZWN1dGVJbkVkaXRNb2RlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBfY3VzdG9tOiBFQ29sb3IgPSBFQ29sb3Iud2hpdGVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNldCBjdXN0b20gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fY3VzdG9tID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY29sb3JNYXBbdGhpcy5jdXN0b21dO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgY3VzdG9tICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VzdG9tO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjb2xvck1hcFt0aGlzLmN1c3RvbV07XHJcbiAgICB9XHJcbn1cclxuIl19