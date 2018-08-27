# babel-polyfill与babel-runtime
##### babel-core
这是所有 Babel polyfill方案都需要依赖的开源库[zloirock/core-js](https://link.zhihu.com/?target=https%3A//github.com/zloirock/core-js)。它提供了 ES5、ES6 的 polyfills，包括 promises 、symbols、collections、iterators、typed arrays、ECMAScript 7+ proposals、setImmediate 等等。
<strong>使用babel-runtime、babel-plugin-transform-runtime 或者 babel-polyfill时必须调用babel-core</strong>
##### babel-polyfill
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如<code>Object.assign</code>）都不会转码。

举例来说，ES6在Array对象上新增了<code>Array.from</code>方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用<code>babel-polyfill</code>，为当前环境提供一个垫片。
<strong>在不支持es6语法的情况下可以解决兼容性问题</strong>
因为<code>babel-polyfill</code>是全局引用的所以在第一次引用之后不需要再次引用，这样的缺点就是打包的体积过大。
使用方法
<pre>$ npm install --save babel-polyfill //安装
import 'babel-polyfill';//引入</pre>
##### babel-plugin-transform-runtime
这个插件让 Babel 发现代码中使用到 Symbol、Promise、Map 等新类型时，自动且按需进行 polyfill，因为是“自动”所以非常受大家的欢迎
##### babel-runtime
plugin 自动识别并替换代码中的新特性，你不需要再引入。可以减少打包后的体积。但是缺点是随着应用的增大，相同的 polyfill 每个模块都要做重复的工作（检测，替换），虽然 polyfill 只是引用，编译效率不够高效

