#EsLint
#### 初衷
ESLint最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的javascript代码检测工具
#### 安装
<pre>npm i -g eslint</pre>
#### 初始化
<pre>eslint --init</pre>
#### 命令行
<pre>eslint [options] [file|dir|glob]*</pre>
例如:
<pre>eslint file1.js file2.js</pre>
[参考文档](http://eslint.cn/docs/user-guide/command-line-interface)
#### env 指定环境运行
<pre>{
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    }
}</pre>
#### globals：额外的全局变量
<pre>globals: {
    vue: true,
},</pre>
#### 指定你想要支持的 JavaScript 语言选项
[参考文档](http://eslint.cn/docs/user-guide/configuring)
#### rules
[参考文档](http://eslint.cn/docs/rules/)