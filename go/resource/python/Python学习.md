# Python 学习

## 基础函数
### ord 获取10进制编码
<pre>
	>>>ord('A')
	65
</pre>
### chr 将编码转化为对应的字符
<pre>
	>>>chr(65)
	A
</pre>
### encode str通过encode()方法可以编码为指定的bytes
<pre>
	>>>'ABC'.encode('ascii')
	b'ABC'
</pre>
### decode decode()方法可以把bytes转化为str
<pre>
	>>>b'ABC'.decode('ascii')
	'ABC'
</pre>
errors='ignore'  遇到错误字节时可以无视错误信息

<pre>
	#!/usr/bin/env python3
	# -*- coding: utf-8 -*-
</pre>
第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；
第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。
### len(params) 获取字符串长度

### % 格式化字符串
<pre>
	>>> 'Hello, %s' % 'world'
	'Hello, world'
	>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
	'Hi, Michael, you have $1000000.'
</pre>
> %s 表示用字符串
> %d 表示用整数
> %f 表示用浮点数
> %x 表示用十六进制
### format()
它会用传入的参数依次替换字符串内的占位符{0}、{1}
<pre>
	>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
	'Hello, 小明, 成绩提升了 17.1%'
</pre>
## 数组对象
### 使用list定义对象[]
<pre>
	>>> list = []
</pre>
#### append() 追加到末尾
#### insert(index, "") 添加到指定位置
#### pop() 从末尾删除元素
#### pop(index) 根据下标删除
### 使用tuple定义对象()<em>不可修改</em>
没有方法
<pre>
	>>> tuple = (1,2,3)
</pre>

##### dict 类似map
<pre>
	>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
	>>> d['Michael']
</pre>
> get(key) 根据key获取值
> pop(key) 根据key删除值
#### set 不能添加重复数据
<pre>
	>>> s = set([1, 2, 3])
</pre>
> add(key) 添加值
> remove(key) 根据key删除
> issubset(key) 是否为子集
> union()  两个set取交集
> intersection()  两个set取并集
> difference()  两个set取×集
> symmetric_difference()  两个set取对称差
> update(x)  更新s，加上x中的元素
> discard(key)  如果存在元素，就删除；没有不报异常
> clear()  清除set
> x.pop() 随机删除

## 函数的使用
#### 定义函数
<pre>
	>>> def test():
		pass
</pre>
定义函数最后需要:如果不执行任何代码 需要pass