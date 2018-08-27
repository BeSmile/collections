#解决listview单行刷新的问题
通过深复制告诉dataSource已经刷新来进行页面刷新
<pre>JSON.parse(JSON.stringify(dataBlobs))</pre>