# react-redux
##### connect()
用于从 UI 组件生成容器组件
<pre>import { connect } from 'react-redux';
const VisibleTodoList = connect()(component);</pre>
#### mapStateToProps()
建立state(外部)与内部ui组件之间的映射关系
<pre>const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}</pre>
> getVisibleTodos只是一个执行函数。计算todos的结果

mapStateToProps会订阅<code>store</code>每当state更新就会自动执行。
mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
<pre>const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}</pre>
#### mapDispatchToProps()
用来建立 UI组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。返回一个对象，对应每个映射。
<pre>const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch({
                type: 'click',
                filter: ownProps.filter
            })
        }
    }
}</pre>
``` 222 
```
如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。举例来说，上面的mapDispatchToProps写成对象就是下面这样。
<pre>const mapDispatchToProps = {
    handleClick: (filter) => {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
    }
}</pre>
#####<Provider> 组件
connect创建的容器组件，通过Provider可以让被Provider包裹的所有组件都能获取到<code>store</code>
<pre><Provider store={store}>
    <App />
</Provider></pre>