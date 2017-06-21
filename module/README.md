## 模块系统演示

$ node index.js

## 注意事项：

* 在 Node.js 中，文件和模块是一一对应的（每个文件被视为一个独立的模块）。
* 如果按确切的文件名没有找到模块，则 Node.js 会尝试带上 .js、.json 或 .node 拓展名再加载。
* 以 '/' 为前缀的模块是文件的绝对路径。 例如，require('/home/marco/foo.js') 会加载 /home/marco/foo.js 文件。
* 以 './' 为前缀的模块是相对于调用 require() 的文件的。 也就是说，circle.js 必须和 foo.js 在同一目录下以便于 require('./circle') 找到它。
* 当没有以 '/'、'./' 或 '../' 开头来表示文件时，这个模块必须是一个核心模块或加载自 node_modules 目录。
* 如果给定的路径不存在，则 require() 会抛出一个 code 属性为 'MODULE_NOT_FOUND' 的 Error。
