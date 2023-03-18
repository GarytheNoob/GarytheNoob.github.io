---
title: "【新系列】【理科拾遗】1.导数和运动学"
author: GarytheNoob
date: 2023/03/17 23:00
mathjax: true
math: true
categories:
- 【理科拾遗】
tags:
- 数学
- 物理
- 未完成
---

在高二正式在数学课本中遇到导数之前，物理中的运动学和导数已经有了无数的联系……

<!-- more -->

## 导数的简介

本节是给那些不了解导数的读者准备的基础概念科普，如果你认为自己已经有相关知识，可以跳过。

{% note light %}

 **导数**（英语：derivative）是微积分学中的一个概念。函数在某一点的导数是指这个函数在这一点附近的变化率。导数的本质是通过极限的概念对函数进行局部的线性逼近。当函数 $f$ 的自变量在一点 $x_{0}$ 上产生一个增量 $h$ 时，函数输出值的增量与自变量增量 $h$ 的比值在 $h$ 趋于0时的极限如果存在，即为 $f$ 在 $x_{0}$ 处的导数，记作 $f'(x_0)$ 、 $\frac{\mathrm{d}f}{\mathrm{d}x}(x_0)$ 或 $\left.\frac{\mathrm{d}f}{\mathrm{d}x}\right|_{x=x_0}$。

*——来自[维基百科：导数](https://zh.wikipedia.org/zh-hans/%E5%AF%BC%E6%95%B0)*

{% endnote %}

似乎这么说，大家都是一头雾水。但是我觉得对于高一的学生来说，我们可以简单地说明一下导数的几何意义：

{% note primary %}
对于函数$f(x)$，如果它的定义域和值域都是$\mathbb{R}$的子集（简单地，自变量和函数值都是实数），那么它在$x=x_0$处的导数$f'(x_0)$就是$f(x)$的图像在$x=x_0$处的（切线）斜率。
{% endnote %}

也可以用另外一种易于理解的直观话说：

{% note info %}
如果$f(x)$在$x=x_0$附近变化得很快，那么它在$x_0$处的导数的绝对值$\left|f'(x_0)\right|$就越大。
{% endnote %}

可能有些人看出来了：**这不就是位移和速度、速度和加速度嘛！**

没错。严格地说，在运动学中，物体的位移对于时间的导数就是物体的瞬时速度。而由一个物体的位移-时间表达式$x=f(t)$求出它对应的速度-时间表达式$v=g(t)$的过程，就可以直观地理解为求$f$关于$t$的导函数的过程，简称**求导**。在这里，$g(t)$便是$f(t)$关于$t$的导函数。

当然，关于一个函数是否有导数还需要进一步地判断（判断一个函数是否**可导**）。这牵扯到很复杂的概念，在这里不加赘述。只需要读者们牢记求一个函数的导（函）数就相当于求这个函数的变化速度一样。

{% spoiler "一些可能用到的求导知识"%}
<br>

- 对于$f(x)=x^r,\ r\in\mathbb{R}$，有$f'(x)=rx^{r-1}$。
  比如$f_1(x)=x^2$的导函数$f'_1(x)=2x$。

- 对于常函数，其导函数为0。即$f(x)=k \Rightarrow f'(x)=0$。

- $f(x)=f_1(x)+f_2(x) \Rightarrow f'(x)=f'_1(x)+f'_2(x)$

- $f(x)=f_1(x)\cdot f_2(x) \Rightarrow f'(x)=f'_1(x)\cdot f_2(x)+f_1(x)\cdot f'_2(x)$

{% endspoiler %}

## 在匀变速直线运动中的关联

既然我们直接提到了导数与运动学概念速度的联系，那让我们看看具体的。

在匀速直线运动中，有这两个公式：

{% note primary %}
$$
\begin{align}
x&=\frac{1}{2}at^2 \nonumber\\
v&=at \nonumber\\
\end{align}
$$
{% endnote %}

如果你想尝试一下，可以试着对$x$关于$t$求导，即求$x'=\frac{\mathrm dx}{\mathrm dt}$。不出意外，它恰好等于$v$。

{% spoiler "推导过程"%}
<br>
注意到
$$
x=\frac{a}{2}\cdot t^2\nonumber
$$
则
$$
\begin{align}
x'=\frac{\mathrm dx}{\mathrm dt}&=\left(\frac{a}{2}\right)'\cdot t^2+\frac{a}{2}\cdot \left(t^2\right)'\nonumber\\
&=0+\frac{a}{2}\cdot 2t \nonumber\\
&=at \nonumber\\
&=v \nonumber
\end{align}
$$
{% endspoiler %}

这个结论似乎并没有出乎我们的意料——导数本该如此。但是当我们了解了一些其他的结论的时候，运动学中的一些结论似乎会变得有意思起来。

## 初中二函压轴、抛体运动和导数

在初中的二次函数压轴题中，有这样一种常见、简单的题目。比如：

{% note secondary %}

如图，二次函数$y=-x^2+bx+c$的图像经过$B(3,0)$、$C(-1,0)$，交$y$轴于$A$点。$P$是第一象限内二次函数图像上一点，问当$\triangle PAB$的面积最大时，$P$点的坐标。

<img src="\img\content\09science_discuss_01-derivative\quad_func_prob.png" alt="二次函数题目"  width="300" >

{% endnote %}

在初中，大家都用的是「铅锤高 水平宽」的方法，用$P$点坐标$P(p,y_P)$表达$\triangle PAB$的面积$S_{\triangle PAB}=f(p)$，再研究这个表达式的最值得出结果。

但是有了导数这个强大的工具，我们得以降维打击，秒杀这一道题。

{% note secondary %}

**解**：计算（过程略）可得到二次函数表达式

$$
y=-x^2+2x+3
$$


{% endnote %}