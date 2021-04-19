// target 默认指向 Componet 自定义组件
const colorArr = [
    {name: '红', option: 0},
    {name: '蓝', option: 1},
    {name: '绿', option: 2},
    {name: '白', option: 3},
]

Vue.component('learn-color-inspector', {
    // 修改组件在 inspector 的显示样式
    template: `
    <ui-select @change="onCustom" v-value="target.custom.value">
        <option v-for="c in colorArr" v-value="c.option"> {{c.name}}</option>
    </ui-select>
    `,

    props: {
        target: {
            twoWay: true,
            type: Object,
        },
    },

    created() {
    },

    data() {
        return {
            colorArr: colorArr
        }
    },

    methods: {
    }
});