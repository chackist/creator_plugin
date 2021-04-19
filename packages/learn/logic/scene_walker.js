module.exports = {
    'get-canvas-children': function (event) {
        var canvas = cc.find('Canvas');
        if (event.reply) {
            event.reply(null, canvas.children.length);
        }
    },
    'show-hide-children': function (event) {
        var canvas = cc.find('Canvas');
        for (let node of canvas.children) {
            node.active = !node.active
        }
    }
};