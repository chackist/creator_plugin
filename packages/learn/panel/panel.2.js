Editor.Panel.extend({
    style:`
    `,
    template: `
      <ui-text-area v-value="infoTv" disabled></ui-text-area>
    `,
  
    ready() {
      this.vue = new window.Vue({
        el: this.shadowRoot,
        data: {
            infoTv: '信息显示',
        },
        created() {
        },
        destroyed() {
        },
        methods: {
          onSendBtn ( event ) {
          },
        }
      });
    },
    messages: {
      'second_panel_recv' (event, args) {
        Editor.log('second panel recv ', args);
        this.vue.infoTv = 'second panel recv ' + args;
        event.reply && event.reply(null, 'success');
      }
    }
  });