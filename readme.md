#### 官方文档
http://docs.cocos.com/creator/manual/zh/extension/

#### 技术
前端技术(html css js vue) nodejs electron svg

#### 1. 简介
package.json
main.js

#### 2. panel
多个面板

#### 3. ipc
##### 消息发送
* 任意进程对主进程 Editor.Ipc.sendToMain('packagename:msgname', [, ...args, callback, timeout])
* 任意进程对面板 Editor.Ipc.sendToPanel('panelID', 'msgname' [, ...args, callback, timeout])
* 任意进程对编辑器主窗口（也就是对主窗口里的所有渲染进程广播）Editor.Ipc.sendToMainWin
* 任意进程对所有窗口（对包括弹出窗口在内的所有窗口渲染进程广播）Editor.Ipc.sendToWins
* 任意进程对所有进程广播 Editor.Ipc.sendToAll
* 上述方法在两种进程里写法都是一致的，只要注意消息接收的对象是在渲染进程还是主进程，并选择对应的方法即可。详细的接口用法请参考上文的描述和本文最上面的 IPC 接口文档链接。
* 注意: 由于通讯基于 Electron 的底层 IPC 实现，所以切记传输的数据不可以包含原生对象，否则可能导致进程崩溃或者内存暴涨。推荐只传输纯 JSON 对象。

##### 消息监听
```
messages: {  
    'message-name': function (event, ...args) {
        //do some work
    }
}
```
渲染进程中：
```
require('electron').ipcRenderer.on('module:message', function(event, args) {});
```
主进程中：
```
require('electron').ipcMain.on('module:message', function(event, args) {});
```

##### 常用IPC消息(内置)
http://docs.cocos.com/creator/manual/zh/extension/reference/ipc-reference.html


#### 4. 场景脚本
插件与场景进行互动(访问、修改)
http://docs.cocos.com/creator/manual/zh/extension/scene-script.html
```
"scene-script": "scene-walker.js"
```

#### 5. inspector
自定义属性

#### 6. runtime-resource.
项目可引用资源

#### 7. Editor
Editor.Project.path
Editor.url('packages://package-name/...')

#### 8. gizmo
场景编辑图形工具
svg

#### 9. 学习方法
官方文档
开发工具
上架的插件 