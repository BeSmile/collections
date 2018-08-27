# redux
redux主要分为几个概念。<code>store</code>、<code>action</code>、<code>reducer</code>，<code>store</code>又分为<code>dispatch</code>、<code>subscribe</code>、<code>dispatch</code>。
#### store
数据与视图 之间的通信,一个state对应一个view。 
<pre>const store = createStore(fn);//创建一个store
const state = store.getState();//通过store获取state状态</pre>
// store 包含所有数据，作用数据与视图之间的通信
//一个state对应一个view
##### dispatch
view发出action请求
<pre>store.dispatch(action);</pre>
##### reduce
action作为对象顺序执行数组
<pre>const actions = [{
  type: 'add',
  payload: 0
},{
  type: 'add',
  payload: 1
},{
  type: 'add',
  payload: 2
}];
const res = store.reduce(reducer, 0);</pre>
##### subscribe
//store设置监听函数，当state发生变化执行监听函数
store.subscribe(listener);
重新定义这个监听函数可解除监听
<pre>let unsubscribe = store.subscribe(()=>{
  console.log('xxx');
})
unsubscribe();</pre>
reduce, getState, dispatch都属于store可以通过方法字节取得
<pre>const { reduce, getState, dispatch } = createStore(reducer);</pre>
#### action
action是一个对象，有属性值<code>type</code>必须要的。向view发出通知
<code>const action = {
  type: 'add',
  payload: 'add test'
}</code>
##### Action Creator
定义函数来生成action
<pre>const generateAction = (text)=>{
  return {
    type: '',
    text
  }
}</pre>
#### Reducer
store接受action对象,更新state，刷新view的过程被称为Reducer。
<pre>const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action) {
    case 'add':
      // statements_1
      return state + action.payload;
    default:
      // statements_def
      return state;
  }
}
const state = reducer(1, {
   type: 'ADD',
   payload: 2
});</pre>
```可以不需要手动执行reducer获取state createStore时可以传递值可自动调用。
```
##### reducer规范
> 1.不能修改参数
> 2.返回值是固定的，date，Math.random这些随机方法不能调用。
> 3.不能调用系统I/O api

### 重新理解
每个reducer其实就是一个函数,
<pre>((state, action) => {
  return state;
})</pre>
接受state与action,只要<code>return</code>一个值就代表dispatch结束;定义多个reducer时,每个reducer都会执行,因此需要根据action里的操作来返回结果;每个action对象就是通过dispatch传递的参数;最后定义的reducers作为参数通过<code>createStore</code>生成store提供给<code>Provider</code>;在组件使用过程中,可以通过<code>connect</code>过程中第一个参数接收所有的state,可以通过解构取对应的值,然后注入到组件的props中.
<pre>connect(()=> {}, () => {})(App)</pre>
每个reducer当中state独立,但是整个redux只有一个state,所有的数据都存在于最外层结构外
<pre>{
  state1,
  state2,
  state3
}</pre>

### action
action其实只是为了让reducers知道返回什么结果而已