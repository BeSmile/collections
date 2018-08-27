# promise
Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
Promise特点
> 对象不受外界影响.三种状态pending(进行中),已成功(fulfilled),失败(rejected)
> 一旦状态改变,不会在变,任何时候都可以得到结果.

有了Promise对象,就会以将异步操作以同步的流程表达出来.缺点就是创建Promise之后无法停止,以及无法知道内部状态.Promise内部有resolve以及rejected方法.resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
<pre>const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject('promise reject');
    }, 3000)
});
promise.then( success => {
    console.log('success', success);
}, error => {
    console.log('error', error);
})</pre>

等待3s之后会返回以下结果
<pre>error promise reject</pre>
Promise实例之后还有then函数以及catch函数
<pre>promise.then(()=> {
    //resolve success
}, ()=> {
    // reject errror
})</pre>
then()也支持链式函数
<pre>promise.then(()=> {
    //resolve success
}).then( error => {
    //reject error 
})</pre>
错误回调也可使用catch()函数捕捉
<pre>promise.then(success=>{
    //resolve
}).catch(error=>{
    //reject
})</pre>
代码位置 collections/demo1