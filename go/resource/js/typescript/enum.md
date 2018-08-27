# 枚举
### 数字枚举
<pre>enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}</pre>
自动增长
### 字符串枚举
<pre>enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}</pre>
### const枚举
<pre>const enum Enum {
    A = 1,
    B = A * 2
}</pre>
### 外部枚举
外部枚举用来描述已经存在的枚举类型的形状。
<pre>declare enum Enum {
    A = 1,
    B,
    C = 2
}</pre>