# Polyfill
##### 什么是Polyfill？
在英文翻译中Polyfill翻译为填充工具。在web开发中，一个polyfill是为了实现web浏览器中暂未支持的特性。经常，它指的是html5网页标准的JavaScript库，或是一个老版本浏览器的既定标准，要么就是一个建议标准（大部分没有被支持的浏览器）。正式的来说，polifill是一个用在浏览器API上的shim。
##### 它有什么作用
为了兼容不被支持的api，使新旧浏览器都可以使用这个api。
例如有些浏览器不支持Number.isNaN方法。
<pre>if(!Number.isNaN) {
    Number.isNaN = function(num) {
        return(num !== num);
    }
}</pre>