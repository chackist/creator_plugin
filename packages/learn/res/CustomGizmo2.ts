
const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    radius: Number = 100;

    @property(cc.v2)
    offset: cc.Vec2 = cc.v2(0, 0);

    start () {

    }
}
