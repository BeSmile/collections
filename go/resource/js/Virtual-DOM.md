# Virtual-DOM
视图更新流程
![22](https://pic1.zhimg.com/v2-eb87e1c1acfa60964471215054755708_r.jpg)
#### 构成结构
##### VNode
代表一个真实的dom节点.通过createElement方法将Vnode渲染成dom节点.
##### VText
虚拟文本节点,代表了一个真实的文本内容.内容中若有html会被转义.
##### Hooks
钩子方法,给节点注册ev-click等事件.
##### Thunk
Thunk 方法允许开发者参与 diff过程。如对于某节点，能够预先判断状态不会发生改变，则可以通过此方法，在 diff 过程中直接返回旧 VNode 。
##### Widget
Widget 和 Thunk 的作用有点相似，但它参与的是 patch 的过程。它能定制如何渲染成最终的 dom 节点。如要求某个状态只为偶数时，重新渲染等。
##### VPatch
VPatch 权且称之为「补丁对象 」，它描述了对于某个节点的具体操作，比如删除，插入，排序等等。
#### render - 创建虚拟节点
