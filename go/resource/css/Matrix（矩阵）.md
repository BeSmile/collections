# Matrix（矩阵）
CSS3中的矩阵分为2D平面matrix()和3D平面matrix3d()。
transform当中的斜拉(skew)，缩放(scale)，旋转(rotate)以及位移(translate)都是基于matrix做的。
![盗图](http://image.zhangxinxu.com/image/blog/201206/matrix-skew-scale-rotate-translate.gif)
#### transform坐标系统
<code>transform-origin</code>代表着中心点。所有效果以transform-origin为依据。
transform-origin属性设置有两个。例如:
<pre>transform-origin: bottom left;</pre>
那么效果将围绕着左下角发生变化。

#### matrix相关
公式为
<pre>transform: matrix(a,b,c,d,e,f);</pre>
对应的矩阵为:
![http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/](http://image.zhangxinxu.com/image/blog/201206/css-transforms-matrix3.gif)
``` 通过线代函数所得 
```
![http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/](http://image.zhangxinxu.com/image/blog/201206/css-transforms-matrix5.gif)
假设矩阵参数
<pre>transform: matrix(1, 0, 0, 1, 30, 30); /* a=1, b=0, c=0, d=1, e=30, f=30 */</pre>
假设中心坐标为（0,0）通过矩阵公式所得 
x = ax + cy + e = 1*0 + 0*0 + 30 = 30;
y = bx + dy + f = 0*0 + 1*0 + 30 = 30;
中心坐标为（30，30）。等同于translate（30px,30px）;
##### 缩放（scale）
<pre>matrix(sx, 0, 0, sy, 0, 0)</pre>
matrix(sx, 0, 0, sy, 0, 0)等同于scale(sx, sy)
##### 旋转（rotate）
方法以及参数使用如下（假设角度为θ）：
<pre>matrix(cosθ,sinθ,-sinθ,cosθ,0,0)</pre>
结合矩阵公式所得
<pre>x' = x*cosθ-y*sinθ+0 = x*cosθ-y*sinθ
y' = x*sinθ+y*cosθ+0 = x*sinθ+y*cosθ</pre>

[参考地址](http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)
[旋转效果](https://codepen.io/steveg3003/pen/NrNKOZ/)