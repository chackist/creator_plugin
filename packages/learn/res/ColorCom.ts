const {ccclass, property,inspector,executeInEditMode} = cc._decorator;

enum EColor{
    red,
    blue,
    green,
    white,
}
const colorMap = {};
colorMap[EColor.red] = cc.color(255, 0, 0);
colorMap[EColor.blue] = cc.color(0, 0, 255);
colorMap[EColor.green] = cc.color(0, 255, 0);
colorMap[EColor.white] = cc.color(255, 255, 255);

@ccclass
@inspector("packages://learn/inspector/color.js")
@executeInEditMode()
export default class NewClass extends cc.Component {
    @property
    _custom: EColor = EColor.white

    @property
    set custom (value) {
        this._custom = value;
        this.node.color = colorMap[this.custom];
    }
    
    get custom () {
        return this._custom;
    }

    onLoad() {
        this.node.color = colorMap[this.custom];
    }
}
