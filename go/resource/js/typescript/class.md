# 类
与<code>C#</code>或<code>Java</code>相同
<pre>class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");</pre>
派生继承类之后,构造器函数中,必须调用<code>super</code>方法
<code>private</code>,<code>protect</code>,<code>public</code>
> privte: 私有变量,派生无法继承
> public: 所有都可以访问
> protect:派生类可以访问,外部无法访问
> readonly:定义后无法被修改

### 参数属性
<pre>class Animal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}</pre>
构造器函数中直接定义private可以简化private name:string
### 存取器
<code>set</code>,<code>get</code>
### 抽象类
抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化.<code>abstract</code>关键词定义
只能使用<code>extends</code>不能使用<code>implements</code>.
### 把类当做接口使用


