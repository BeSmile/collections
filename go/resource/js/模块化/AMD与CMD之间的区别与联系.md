# AMD规范
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
###### 使用方法
<pre>require([module], callback);</pre>
> * [module]是一个数组，表示需要加载的模块；
> * callback，则是加载之后异步调用的函数。
# CMD规范
CMD (Common Module Definition), 是seajs推崇的规范。
<pre>require(require, exports, modules){
   require('*'); //需要的时候加载
});</pre>
#### 他们之间的相同点
> * 都是预加载
> * 异步加载
#### 他们之间的差异
他们之前的区别在于require的位置，AMD规范在开始的时候已经指定所有的模块。而CMD规范则是在使用的时候再require。