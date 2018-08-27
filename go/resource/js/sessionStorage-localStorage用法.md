#sessionStorage-localStorage用法
> * localStorage - 没有时间限制的数据存储
> * sessionStorage - 针对一个 session 的数据存储（关闭窗口，存储的数据清空）
sessionStorage 属性允许你访问一个 session Storage 对象。它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面会初始化一个新的会话，这点和 session cookies 的运行方式不同。

应该注意的是，无论是 localStorage 还是 sessionStorage 中保存的数据都仅限于该页面的协议。

#### 保存数据到sessionStorage
<pre>sessionStorage.setItem(key, value)</pre>
#### 从sessionStorage获取数据
<pre>sessionStorage.getItem(key)</pre>
#### 从sessionStorage删除保存的数据
<pre>sessionStorage.removeItem('key');</pre>
#### 从sessionStorage删除所有保存的数据
<pre>sessionStorage.clear();</pre>

#### 保存数组或者对象
需要将对象转换为Json字符串
<pre>JSON.stringify(students)</pre>
通过json字符串转换为对象
<pre>JSON.parse(students);</pre>