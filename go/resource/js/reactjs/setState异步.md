# setState是异步函数
修改state值之后可以使用回调函数来执行后面的代码
<pre>
    this.setState({
        value
    }, () => {
        //code
    })
</pre>
也可以使用以下方法
<pre>
    this.setState(()=>{
        //code;
        return {
            key: value
        }
    })
</pre>