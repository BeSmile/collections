#异步编程终级解决方案async/await
async异步执行
await等待一个异步执行
async默认会返回一个Promise对象,如果返回的是字符串对象,默认会将他处理成Promise对象.例如:
<pre>async function demo() {
    return 'hello promise';
}
console.log(demo());</pre>
输出结果为:
<pre>Promise ( 'hello promise' );</pre>
await等待的是一个Pomise对象,所有运行结果有可能是rejected,所以捕获异常时可以使用try...catch...例如:
<pre>function save(user){
    return new Promise((resolve, rejected) => {
        return rejected('save error');
    })
}
async function add() {
    try {
        await save();
    } catch (e) {
        console.log(e);
    } 
}
add();</pre>
输出结果:
<pre>sve error</pre>
await函数只能使用async进行包裹,async表示内部有异步操作.
<pre>async function calc() {
    await step();
}</pre>

> * await不能在foreach中运行,只能使用for循环.
> * 多请求并发使用Promise.all