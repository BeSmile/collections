# react-dom
### 概述
DOM 特定的方法, 可以在你的应用程序的顶层使用.
> * render()
> * hydrate()
> * unmountComponentAtNode()
> * findDOMNode()
> * createPortal()

### 浏览器支持
支持所有浏览器.ie9以上

##### render()
渲染reactNode到由container提供得DOM中，并且返回组件的一个 引用(reference) （或者对于 无状态组件 返回 null ）。这个过程是异步的
<pre>ReactDOM.render(
  element,
  container,
  [callback]
)</pre>

如果 React 元素先前已经被渲染到了 container 中，那么将对其执行更新，并且对 DOM 只修改需要修改的地方，以反映最新的 React元素。

#### hydrate()
<pre>ReactDOM.hydrate(element, container[, callback])</pre>
与 render() 相同，但用于混合容器，该容器的HTML内容是由 ReactDOMServer 渲染的。 React 将尝试将事件监听器附加到现有的标记。

#### unmountComponentAtNode()
<pre>ReactDOM.unmountComponentAtNode(container)</pre>
从 DOM 中移除已装载的 React 组件，并清除其事件处理程序和 state 。 如果在容器中没有挂载组件，调用此函数什么也不做。 如果组件被卸载，则返回 true ，如果没有要卸载的组件，则返回 false 。

#### findDomNode()
<pre>ReactDOM.findDomNode(this.ref)</pre>
如果组件已经被装载到 DOM 中，这将返回相应的原生浏览器 DOM 元素。这个方法对读取 DOM 外的值是有用的，就像单字段值 以及 执行 DOM 分析（measurement） 。在大多数情况下，你可以绑定一个 ref 到 DOM 节点上，从而避免使用findDOMNode。 当 render 返回 null 或 false 时，findDOMNode 将会返回 null。

#### createPortal()
<pre>ReactDOM.createPortal(child, container)</pre>
创建一个 插槽(portal) 。 插槽提供了一种方法，可以将子元素渲染到 DOM 组件层次结构之外的 DOM 节点中。render()方法会创建一个div然后再追加改div而createPortal()会直接追加内容到目标container
