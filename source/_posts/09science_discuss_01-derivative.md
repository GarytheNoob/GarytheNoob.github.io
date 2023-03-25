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

在高二正式在数学课本中遇到导数之前，我们和导数已经有了无数的联系……

<!-- more -->

## 导数的简介

本节是给那些不了解导数的读者准备的基础概念科普，如果你认为自己已经有相关知识，可以跳过。

{% note light %}

 **导数**（英语：derivative）是微积分学中的一个概念。函数在某一点的导数是指这个函数在这一点附近的变化率。导数的本质是通过极限的概念对函数进行局部的线性逼近。当函数 $f$ 的自变量在一点 $x_{0}$ 上产生一个增量 $h$ 时，函数输出值的增量与自变量增量 $h$ 的比值在 $h$ 趋于0时的极限如果存在，即为 $f$ 在 $x_{0}$ 处的导数，记作 $f'(x_0)$ 、 $\frac{\mathrm{d}f}{\mathrm{d}x}(x_0)$ 或 $\left.\frac{\mathrm{d}f}{\mathrm{d}x}\right|_{x=x_0}$。

*——来自[中文维基百科：导数](https://zh.wikipedia.org/zh-hans/%E5%AF%BC%E6%95%B0)*

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

在匀速直线运动中，有这两组公式：

{% note primary %}
$$
\begin{align}
x_1&=\frac{1}{2}at^2 \nonumber\\
v_1&=at \nonumber\\
\end{align}
\qquad
\begin{align}
x_2&=v_0t+\frac{1}{2}at^2 \nonumber\\
v_2&=v_0+at \nonumber\\
\end{align}
$$
{% endnote %}

如果你想尝试一下，可以试着对$x$关于$t$求导，即求$x'=\frac{\mathrm dx}{\mathrm dt}$。不出意外，它恰好等于$v$。

{% spoiler "推导过程"%}
<br>
注意到
$$x_1=\frac{a}{2}\cdot t^2\nonumber$$
则
$$
\begin{align}
x_1'=\frac{\mathrm dx_1}{\mathrm dt}&=\left(\frac{a}{2}\right)'\cdot t^2+\frac{a}{2}\cdot \left(t^2\right)'\nonumber\\
&=0+\frac{a}{2}\cdot 2t \nonumber\\
&=at \nonumber\\
&=v_1 \nonumber
\end{align}
$$
另外，有
$$x_2=v_0t+x_1$$
则
$$
\begin{align}
x_2'=\frac{\mathrm d}{\mathrm dt}(v_0t)+\frac{\mathrm dx_1}{\mathrm dt}&=v_0+x_1' \nonumber\\
&=v_0+v_1 \nonumber\\
&=v_0+at \nonumber\\
&=v_2 \nonumber
\end{align}
$$
故有上述结论。
{% endspoiler %}

这个结论似乎并没有出乎我们的意料——导数本该如此。但是当我们了解了一些其他的结论的时候，运动学中的一些结论似乎会变得有意思起来。

## 二次函数与导数：初中压轴、匀变速、抛体

在初中的二次函数压轴题中，有这样一种常见、简单的题目。比如：

{% note secondary %}

**题目Q<sub>1</sub>**

如图，二次函数$y=-x^2+bx+c$的图像经过$B(3,0)$、$C(-1,0)$，交$y$轴于$A$点。$P$是第一象限内二次函数图像上一点，问当$\triangle PAB$的面积最大时，$P$点的坐标。

<img src="\img\content\09science_discuss_01-derivative\quad_func_prob.png" alt="二次函数题目"  width="300" >

{% endnote %}

在初中，大家都用的是「铅锤高 水平宽」的方法，用$P$点坐标$P(p,y_P)$表达$\triangle PAB$的面积$S_{\triangle PAB}=f(p)$，再研究这个表达式的最值得出结果。

但是有了导数这个强大的工具，我们得以降维打击，秒杀这一道题。

{% note secondary %}

**解**：计算（过程略）可得到二次函数解析式

$$y=f(x)=-x^2+2x+3\nonumber$$

且$A(0,3)$，则直线AB的斜率

$$k_{AB}=\frac{y_B-y_A}{x_B-x_A}=\frac{0-3}{3-0}=-1\nonumber$$

分析得当抛物线过$P$点的切线平行于直线$AB$时，$\triangle PAB$的面积取到最大值。对$f(x)$求导得

$$f'(x)=-2x+2\nonumber$$

设此时$P$点坐标为$p_0$，则

$$
\begin{align}
f'(p_0)&=-2p_0+2=k_{AB}=-1 \nonumber\\
\Rightarrow p_0&=\frac{3}{2} \nonumber
\end{align}
$$

将$p_0=\frac{3}{2}$代入$f(x)$得此时P点坐标为$(\frac{3}{2},\frac{15}{4})$

{% endnote %}

和之前一样，这个过程中没有在求导前判断函数可导，不够严谨。并且这种方法在初中还不一定能得到分，充其量作为一种辅助检测答案的方法。

### 一个有趣的引理

如果每次都是像上面那样，求导、联立，虽然帅，但是不够快。于是就有了这一节，分享一个引理，并探讨一下它能推导出什么。

#### 拉格朗日中值定理

首先我们先简单介绍一下**拉格朗日中值定理**，它的表述是：

{% note light %}
如果函数$f(x)$满足：

- 在闭区间$[a,b]$上连续;

- 在开区间$(a,b)$内可微分;

那么至少有一点 $\xi ,\;a<\xi <b$，使下面等式成立
$$f(b)-f(a)=f^{\prime }(\xi )(b-a)\nonumber$$

*——来自[中文维基百科：拉格朗日中值定理](https://zh.wikipedia.org/wiki/%E6%8B%89%E6%A0%BC%E6%9C%97%E6%97%A5%E4%B8%AD%E5%80%BC%E5%AE%9A%E7%90%86)*

{% endnote %}

上面的等式也可以写成
$$f'(\xi)=\frac{f(b)-f(a)}{b-a}\nonumber$$

不难发现，写成分式之后，等号右边就是过$f(x)$的图像上两点$A(a,f(a)),\; B(b,f(b))$的直线的斜率，也就是$f(x)$在$[a,b]$上的**平均变化率**。

也许有些读者还是没有理解拉格朗日定理的意义，所以让我们给出它的几何意义：

{% note light %}

**几何意义**

若连续曲线$f(x)$在点$A(a,f(a)),\; B(b,f(b))$之间的每一点处都有不垂直于轴的切线，则曲线在$A$、$B$间至少存在一点$P(\xi,f(\xi))$，使得该点处的切线与割线$AB$平行。

*——来自[百度百科：拉格朗日中值定理§定理推广](https://baike.baidu.com/item/%E6%8B%89%E6%A0%BC%E6%9C%97%E6%97%A5%E4%B8%AD%E5%80%BC%E5%AE%9A%E7%90%86/1876030#4_1)*
{% endnote %}

有了这些知识（其实没有问题也不大），我们可以开始讲述我们的引理了。

#### 引理L<sub>1</sub>

{% note primary %}
对于形如$f(x)=ax^2+bx+c$的二次函数上的区间$[m,n]$，有
$$f'\left(\frac{m+n}{2}\right)=\frac{f(n)-f(m)}{n-m}\tag{L$_1$}$$
{% endnote %}

希望读者们看这么一点就能立刻明白是怎么一回事。谨防万一我在这里还是给出它的几何意义。

{% spoiler "几何意义"%}
<br>
对于任意的一条抛物线$f(x)=ax^2+bx+c$和过其上两点$M(m,f(m)),\; N(n,f(n))$的割线$MN$，抛物线过$P\left(\frac{m+n}{2},y_P\right)$的切线平行于$MN$。

{% endspoiler %}

#### 证明

对于$\left(\text{L}_1\right)$等式的右边，将其展开：
$$
\begin{align}
\frac{f(n)-f(m)}{n-m}&=\frac{\left(an^2+bn+c\right)-\left(am^2+bm+c\right)}{n-m}\nonumber\\
&=\frac{a\left(n^2-m^2\right)+b(n-m)}{n-m}\nonumber\\
&=\frac{a(n+m)(n-m)+b(n-m)}{n-m}\nonumber\\
&=a(n+m)+b\nonumber\\
\end{align}
$$

$f(x)$在$[a,b]$上连续可导，根据拉格朗日中值定理
$$\exists\ p\in(m,n),\;f'(p)=\frac{f(n)-f(m)}{n-m}\nonumber$$
则
$$f'(p)=2ap+b=a(n+m)+b\nonumber$$
可得
$$p=\frac{m+n}{2}\nonumber$$
引理得证。

### 引理的应用

#### 二次函数压轴

有了引理$\left(\text{L}_1\right)$，刚刚的例题Q<sub>1</sub>便可以被真正「秒杀」：

{% note secondary %}
**解**：计算可得到二次函数解析式

$$y=f(x)=-x^2+2x+3\nonumber$$

且$A(0,3)$

分析得当抛物线过$P$点的切线平行于直线$AB$时，$\triangle PAB$的面积取到最大值。

根据引理$\left(\text{L}_1\right)$，可知当$P$点横坐标满足

$$p_0=\frac{x_A+x_B}{2}=\frac{3}{2}\nonumber$$

时$\triangle PAB$的面积最大。

此时$P$点坐标为

$$P\left(\frac{3}{2},\frac{15}{4}\right)\nonumber$$

{% endnote %}

#### 匀变速直线运动

