eslint 检测语法规范
prettier 根据规范，自动格式化代码
editorconfig 编辑器配置。用于覆盖编辑器默认配置，以确保不同编辑器之间，代码格式的统一。

优先级 .prettierrc >vscode 的配置

"prettier.semi": false, //去掉代码结尾的分号 优先级没有.prettierrc 的配置高
// 如果保存的时候使用 prettier 自动修复的话, 将其设置为 true，会和 editor.codeActionsOnSave 冲突
"editor.formatOnSave": true,

//如果保存的时候使用 eslint --fix 自动修复当前文件的话, 将其设置为 true
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},

这两种自动修复可以同时打开，互补??????
