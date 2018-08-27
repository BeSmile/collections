# 接口
可以对结构进行类型校验
### 可选属性
<pre>interface Person {
    name: string;
    age: number;
    sex?: boolean;
}</pre>
接口里的属性不全都是必需的,所以可以使用<code>?</code>
如果没有?,则是必要的参数,如果没有设置则会报错
### 只读属性
<code>readonly</code>属性.创建后无法被修改.
<pre>interface Point {
    readonly x: number;
    readonly y: number;
}</pre>
与<code>ReadonlyArray</code>
<pre>let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;</pre>
同样可以使用<code>Readonly<string></code>
### 函数类型
接受两个参数,返回布尔值;
<pre>interface Func = {
    (source: string, subString: string):boolean;
}</pre>
### 可索引的类型
<code>interface</code>定义下标类型<code>string</code>,<code>number</code>
会提示错误 因为可能会返回不同的值
<pre>interface arr {
    [index:number]: string;
    [index:string]:number;
}</pre>
### 继承接口
和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
可以组合继承,可以继承到多个<code>interface</code>的变量
### 接口继承类
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
:如果要<code>implements</code>一个带成员变量的接口时,需要先<code>extends</code>一个<code>interface</code>再去实现