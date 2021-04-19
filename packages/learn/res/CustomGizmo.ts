
const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Integer)
    radius: Number = 100;

    start () {

    }
}
