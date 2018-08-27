# 函数
### 函数类型
<pre>let add = function(x: number, y: number) :number{ return x + y; }</pre>
#### 书写完整函数类型
为函数变量规范类型
<pre>let add:(x: number, y: number) => number = (x: number, y: number) : number => {return x + y}</pre>
### 可选参数和默认参数
当参数为非必选的时候可以使用<code>?</code>
### 剩余参数
剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
<pre>function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;</pre>
### this参数
<pre>interface Card{
    color: string;
    age: number;
}

interface Animal {
    colors: string[];
    renderColor(this: Animal): (age: number) => Card;
}

let cat: Animal = {
    colors: ["red", "blue"],
    renderColor: function (this: Animal) {
        return (age: number) => {
            return {color:this.colors[0], age};
        }
    }
}
</pre>