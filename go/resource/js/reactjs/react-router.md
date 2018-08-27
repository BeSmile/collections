## react-router-dom v4
[官方文档](https://reacttraining.com/react-router/web/example/basic)

定义路由
<pre>
    const Routes = (
        <HasRouter>
            < div >
                < Route path="/" component={Component} />
                < Route path="/" component={Component} />
            < /div >
        </HasRouter>
    )
    ReactDOM.render(
        Routes,
        document.getElementById('home')
    );
</pre>
<em>使用多路由时需要使用<code>div</code>标签包起来，否则会报错</em>

### HasRouter

### MemoryRouter

##### withRouter
使用withRouter创建Component可以通过this.props获取到history等
<pre>
    import React from "react";
    import {withRouter} from "react-router-dom";
    class TestComponent extends React.Component{
        render() {
            const { match, history, location} = this.props;
            return (< div >< /div >)
        }
    }
    export default withRouter(TestComponent);
</pre>

#### history对象
> goBack() 返回参数

#### match对象