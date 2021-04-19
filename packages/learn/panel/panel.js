Editor.Panel.extend({
  style:`
  .inpput {
      width: 200px
  }`,
  template: `
    <ui-text-area v-value="infoTv" disabled></ui-text-area>
    <ui-button @confirm="onSendBtn">{{sendBtn}}</ui-button>
    <ui-button @confirm="onSendPanelBtn">{{sendPanelBtn}}</ui-button>
  `,

  ready() {
    require('electron').ipcRenderer.on('learn:ipc_panel_recv_by_electron', (event, args) => {
      Editor.log('panel electron recv ', args);
      this.vue.infoTv = 'panel electron recv ' + args;
      event && event.reply(null, 'success');
    });

    this.vue = new window.Vue({
      el: this.shadowRoot,
      data: {
        infoTv: '信息显示',
        sendBtn: '发送给主进程',
        sendPanelBtn: '发送给面板2',
      },
      created() {
        Editor.log('ipc panel vue created');
      },
      destroyed() {
        Editor.log('ipc panel vue destroyed');
      },
      methods: {
        onSendBtn ( event ) {
          event.stopPropagation();
          Editor.Ipc.sendToMain('learn:ipc_main_recv', 'i am panel1');
          Editor.Ipc.sendToMain('learn:ipc_main_electron_recv', 'i am panel1');
        },
        onSendPanelBtn (event) {
          event.stopPropagation();
          Editor.Ipc.sendToPanel('learn.2', 'second_panel_recv', 'i am panel1');
        }
      }
    });

    //Editor.log('panel isMainProcess', Editor.isMainProcess);
  },
  messages: {
    'ipc_panel_recv' (event, args) {
      Editor.log('panel recv:', args);
      this.vue.infoTv = 'panel recv:' + args;
      event && event.reply(null, 'success');
    }
  }
});