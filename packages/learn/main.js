'use strict';

module.exports = {
  load () {
    // execute when package loaded
    this.ipcMainElectronRecvHandle = () => {
      Editor.log('learn:ipc_main_electron_recv');
    };
    require('electron').ipcMain.on('learn:ipc_main_electron_recv', this.ipcMainElectronRecvHandle);
    //Editor.log('main isMainProcess', Editor.isMainProcess);
  },

  unload () {
    // execute when package unloaded
    require('electron').ipcMain.off('learn:ipc_main_electron_recv', this.ipcMainElectronRecvHandle);
  },

  // register your ipc messages here
  messages: {
    'ipc_panel' () {
      // open entry panel registered in package.json
      Editor.Panel.open('learn');
    },
    'ipc_main_sendto_panel' () {
      Editor.Ipc.sendToPanel('learn', 'ipc_panel_recv', 'i am main', (err, ret) => {
        Editor.log('reply from panel', err, ret);
      }, 1000)
    },
    'ipc_main_sendto_panel_2' () {
      Editor.Ipc.sendToPanel('learn', 'ipc_panel_recv_by_electron', 'i am main', (err, ret) => {
        Editor.log('reply from panel', err, ret);
      }, 1000)
      // require('electron').ipcMain.send('learn:ipc_panel_recv_by_electron', 'i am main', (err, ret) => {
      //   Editor.log('reply from panel', err, ret);
      // }, 1000);
    },
    'ipc_main_recv' (event, args) {
      Editor.log('ipc_main_recv:', args);
    },

    'learn:scene_get_canvas_children' (event, args) {
      Editor.Scene.callSceneScript('learn', 'get-canvas-children', (err, length) => {
          Editor.log(`get-canvas-children callback : length - ${length}`);
      })
    },
    'learn:scene_show_hide_children' (event, args) {
      Editor.Scene.callSceneScript('learn', 'show-hide-children');
    },

    'learn:second_panel' (event, args) {
      Editor.Panel.open('learn.2');
    },
    

    //内置插件广播出来的消息
    'scene:saved' (event, args) {
      Editor.log('scene:saved');
    }
  },
};