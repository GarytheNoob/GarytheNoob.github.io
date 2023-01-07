---
title: "三角函数宝典"
author: GarytheNoob
date: 2022/12/27 12:00
update: 2023/01/06 22:00
mathjax: true
math: true
categories:
- 学习
tags:
- 数学
- 未完成
---

{% note light %}
2023-01-06更新
{% endnote %}

高中数学三角函数的知识点太难了！为此我整理了一下。

<!-- more -->

## 常见三角函数值

| DEG    | $0^\circ$ | $30^\circ$        | $45^\circ$        | $60^\circ$        | $90^\circ$      | $120^\circ$       | $135^\circ$        | $150^\circ$        | $180^\circ$ |
| ------ | --------- | ----------------- | ----------------- | ----------------- | --------------- | ----------------- | ------------------ | ------------------ | ----------- |
| RAD    | $0$       | $\frac{\pi}{6}$   | $\frac{\pi}{4}$   | $\frac{\pi}{3}$   | $\frac{\pi}{2}$ | $\frac{2\pi}{3}$  | $\frac{3\pi}{4}$   | $\frac{5\pi}{6}$   | $\pi$       |
| $\sin$ | $0$       | $\frac{1}{2}$     | $\frac{\sqrt2 }2$ | $\frac{\sqrt3 }2$ | $1$             | $\frac{\sqrt3 }2$ | $\frac{\sqrt2 }2$  | $\frac{1}{2}$      | $0$         |
| $\cos$ | $1$       | $\frac{\sqrt3 }2$ | $\frac{\sqrt2 }2$ | $\frac{1}{2}$     | $0$             | $-\frac{1}{2}$    | $-\frac{\sqrt2 }2$ | $-\frac{\sqrt3 }2$ | $-1$        |
| $\tan$ | $0$       | $\frac{\sqrt3 }3$ | $1$               | $\sqrt3$          | $-$             | $-\sqrt3$         | $-1$               | $-\frac{\sqrt3 }3$ | $0$         |

## 各象限内三角函数值符号

### 第一象限

$$
\begin{align}
\theta\in\left[2k\pi,2k\pi+\frac{\pi}{2}\right]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta>0\nonumber\\
\cos\theta>0\nonumber\\
\tan\theta>0\nonumber\\
\end{align}
$$

### 第二象限

$$
\begin{align}
\theta\in\left[2k\pi+\frac{\pi}{2},2k\pi+\pi\right]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta>0\nonumber\\
\cos\theta<0\nonumber\\
\tan\theta<0\nonumber\\
\end{align}
$$

### 第三象限

$$
\begin{align}
\theta\in\left[2k\pi-\pi,2k\pi-\frac{\pi}{2}\right]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta<0\nonumber\\
\cos\theta<0\nonumber\\
\tan\theta>0\nonumber\\
\end{align}
$$

### 第四象限

$$
\begin{align}
\theta\in\left[2k\pi-\frac{\pi}{2},2k\pi\right]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta<0\nonumber\\
\cos\theta<0\nonumber\\
\tan\theta>0\nonumber\\
\end{align}
$$

## 同角三角函数关系
$$
\begin{align}
\sin^2\alpha+\cos^2\alpha&=1 \tag{R1}\\
\frac{\sin\alpha}{\cos\alpha}&=\tan\alpha\nonumber \tag{R2}\\
\end{align}
$$




## 诱导公式

### 1.

对任意$k\in\mathbb{Z}$，有：
$$
\begin{align}
\sin(\alpha+2k\pi)&=\sin\alpha\nonumber\\
\cos(\alpha+2k\pi)&=\cos\alpha\nonumber\\
\tan(\alpha+2k\pi)&=\tan\alpha\nonumber\\
\end{align}
$$

### 2.

$$
\begin{align}
\sin(\alpha+\pi)&=-\sin\alpha\nonumber\\
\cos(\alpha+\pi)&=-\cos\alpha\nonumber\\
\tan(\alpha+\pi)&=\tan\alpha\nonumber\\
\end{align}
$$

### 3.

$$
\begin{align}
\sin(-\alpha)&=-\sin\alpha\nonumber\\
\cos(-\alpha)&=\cos\alpha\nonumber\\
\tan(-\alpha)&=-\tan\alpha\nonumber\\
\end{align}
$$

### 4.

$$
\begin{align}
\sin(\pi-\alpha)&=\sin\alpha\nonumber\\
\cos(\pi-\alpha)&=-\cos\alpha\nonumber\\
\tan(\pi-\alpha)&=-\tan\alpha\nonumber\\
\end{align}
$$

### 5.

$$
\begin{align}
\sin\left(\frac{\pi}{2}-\alpha\right)&=\cos\alpha\nonumber\\
\cos\left(\frac{\pi}{2}-\alpha\right)&=\sin\alpha\nonumber\\
\end{align}
$$

### 6.

$$
\begin{align}
\sin\left(\frac{\pi}{2}+\alpha\right)&=\cos\alpha\nonumber\\
\cos\left(\frac{\pi}{2}+\alpha\right)&=-\sin\alpha\nonumber\\
\end{align}
$$

### 绝招

有口诀云：

> **奇变偶不变，符号看象限。** 象限怎么看？$\alpha$锐角看。

对于任意形如$\sin(\alpha+\frac{k}{2}\pi)$或$\cos(\alpha+\frac{k}{2}\pi)\quad (k\in\mathbb{Z})$的正弦或余弦三角函数式，有：

- 如果$k$是**偶数**，即$k\in \{a|a=2m,m\in\mathbb{Z}\}$，则**三角函数名不变**

- 如果$k$是**奇数**，即$k\in \{a|a=2m+1,m\in\mathbb{Z}\}$，则**三角函数名改变**，即$\sin()$变成$\cos()$，$\cos()$变成$\sin()$。

无论是否变三角函数名，原式括号内的东西都会变为$\alpha$，即刚才这一步操作去掉了括号内的$\frac{k}{2}\pi$。

接下来，将$\alpha$当成第一象限内的正角，无论题干说$\alpha$是第几象限角，统一将其看做第一象限角。

然后，根据各象限内$\sin\alpha$或$\cos\alpha$的符号确定最终答案的符号。**注意：**此处确定的符号是**化简前式子**的符号。



#### 例子

化简
$$
\sin\left(\frac{5\pi}{2}-\alpha\right)\tag{A}
$$

这个例子不形如$\sin\left(\alpha+\frac{k}{2}\pi\right)$，所以我们需要通过诱导公式**3.**，将其变成：
$$
-\sin\left(\alpha-\frac{5\pi}{2}\right)\tag{I}
$$
然后对于$(\text I)$式，它形如$\sin\left(\alpha+\frac{k}{2}\pi\right)$，其中$k=-5$，是奇数，所以改变三角函数名，**不确定整个式子前的符号**：
$$
-(\pm\cos\alpha)\tag{II}
$$
在这个式子中我们没有确定$\cos \alpha$前的符号，所以接下来我们将确定。

**此时化简前式子是$(\text I)$式而不是$(\text A)$式，因为$(\text A)$式并不形如$\sin\left(\alpha+\frac{k}{2}\pi\right)$而$(\text I)$式形如。**

观察$(\text I)$式，假设$\alpha$是第一象限角，则$\left(\alpha-\frac{5\pi}{2}\right)$是第四象限角，根据 ***各象限内三角函数值符号*** ，在第四象限内角的正弦值小于0，所以应在$(\text{II})$式的$\cos\alpha$前的符号取负号，即为：
$$
\begin{align}
&-(-cos\alpha)\nonumber\\
=&\cos\alpha\nonumber\\
\end{align}
$$

## 三角恒等变换


这是三角函数章节的最难之处！

### 两角和与差的正弦、余弦和正切公式

在这里我将不使用课本给出的推导公式技巧，而是一股脑全部给出，所以接好！

#### 正弦

$$
\begin{align}
\sin(\alpha+\beta)&=\sin\alpha\cos\beta+\cos\alpha\sin\beta \tag{$\text S_{(\alpha+\beta)}$}\\
\sin(\alpha-\beta)&=\sin\alpha\cos\beta-\cos\alpha\sin\beta \tag{$\text S_{(\alpha-\beta)}$}\\
\end{align}
$$

#### 余弦

$$
\begin{align}
\cos(\alpha+\beta)&=\cos\alpha\cos\beta-\sin\alpha\sin\beta \tag{$\text C_{(\alpha+\beta)}$}\\
\cos(\alpha-\beta)&=\cos\alpha\cos\beta+\sin\alpha\sin\beta \tag{$\text C_{(\alpha-\beta)}$}\\
\end{align}
$$

{% note secodary %}

来自程哥的口诀：

> 差的余弦——ココ加ササ

{% endnote %}
#### 正切

$$
\begin{align}
\tan(\alpha+\beta)&=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta} \tag{$\text T_{(\alpha+\beta)}$}\\
\tan(\alpha-\beta)&=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta} \tag{$\text T_{(\alpha-\beta)}$}\\
\end{align}
$$

### （二）倍角公式

令上述6个公式中的$\beta$等于$\alpha$，我们可以得到：

$$
\begin{align}
\sin2\alpha&=2\sin\alpha\cos\alpha \tag{$\text S_{2\alpha}$}\\
\cos2\alpha&=\cos^2\alpha-\sin^2\alpha \tag{$\text C_{2\alpha}$}\\
\tan2\alpha&=\frac{2\tan\alpha}{1-\tan^2\alpha} \tag{$\text T_{2\alpha}$}\\
\end{align}
$$

对于$(\text{C}_{2\alpha})$，如果根据$\text{(R1)}$将其变形，可得：

$$
\begin{align}
\cos2\alpha&=1-2\sin^2\alpha\nonumber\\
&=2\cos^2\alpha-1\nonumber\\
\end{align}
$$

那么，根据这两个变形后的式子，可以推出两个降次升角公式，只需简单地进行变形：

$$
\begin{align}
\sin^2\alpha&=\frac{1-\cos2\alpha}{2}\tag{$\text S_\text{降次升角}$}\\
\cos^2\alpha&=\frac{1+\sin2\alpha}{2}\tag{$\text C_\text{降次升角}$}\\
\end{align}
$$

这两个公式就是**降次升角公式**。如你所见，从等号左边向右边运用公式的时候，三角函数的次数降了而角的大小翻倍了。对于这个公式只需要记住一个口诀：

> 正减余加

相信你能知道这是什么意思。

此外，正弦和余弦的倍角公式还可以用正切函数表示：

$$
\begin{align}
\sin2\alpha&=\frac{2\tan\alpha}{1+\tan^2\alpha}\nonumber\\
\cos2\alpha&=\frac{1-\tan^2\alpha}{1+\tan^2\alpha}\nonumber\\
\end{align}
$$

可能你已经发现了，上述这两个公式相除就能得到$(\text{T}_{2\alpha})$公式，所以希望你记得住！

到这里，你应该可以完全记住倍角公式和它们的**简单**推导了。千万别忘记，因为我们即将进入最难（难绷）的一节——

### 《简单》的三角恒等变换

这可能是高一数学听着最迷糊的一个课时，公式量很大！

刚刚我们认识了降次升角公式，现在我们再将其进行拓展。首先，将$\alpha$和$2\alpha$都缩小至原来的一半，同时可以将正弦版本和余弦版本相除得到正切版本的降次升角公式，再将两边同时开方：

$$
\begin{align}
\sin\frac{\alpha}{2}&=\pm\sqrt{\frac{1-\cos\alpha}{2}}\nonumber\\
\cos\frac{\alpha}{2}&=\pm\sqrt{\frac{1+\cos\alpha}{2}}\nonumber\\
\tan\frac{\alpha}{2}&=\pm\sqrt{\frac{1-\cos\alpha}{1+\cos\alpha}}\nonumber\\
\end{align}
$$

{% note info %}
这些公式按照课本称作**半角公式**，符号由$\frac{\alpha}{2}$所在象限决定。
{% endnote %}

注意到，**正减余加**的口诀在这里仍然适用！~~现在知道记什么了吧~~

哦对了，关于**正减余加**的口诀，我单独写了一篇，可以看看：[背会一个口诀竟然能记住正余弦函数这么多知识点！](https://garythenoob.github.io/discus_sine_and_cosine_func/)

我还必须介绍另外几个正切函数的半角公式：
$$
\begin{align}
\tan\frac{\alpha}{2}&=\frac{1-\cos\alpha}{\sin\alpha}\nonumber\\
&=\frac{\sin\alpha}{1+\cos\alpha}\nonumber\\
\end{align}
$$

#### 辅助角公式

听起来可能很迷糊，但是辅助角公式做的事很简单：就是把形如$a\sin x+b\cos x$的式子（注意是**同角三角函数**）转化为$A\sin(x + \phi)$的形式。转化为后者之后就可以运用诱导公式或者下一节(?)中分析的结论来解题了。

辅助角公式：

$$
\begin{align}
a\sin x+b\cos x&=\sqrt{a^2+b^2}\sin(x+\phi)\nonumber\\
&=\sqrt{a^2+b^2}\cos(x-\theta)\nonumber\\
\text{其中}\tan\phi=\frac{b}{a}&\text{, }\tan\theta=\frac{a}{b}\nonumber\\
\end{align}
$$

好吧，我承认，这样看起来有点抽象，所以让我们实际感受一下：

$$
\begin{align}
\sin x+\cos x=\sqrt{2}\sin(x+\frac{\pi}{4})\nonumber\\
\sqrt{3}\sin x+\cos x=2\sin(x+\frac{\pi}{3})\nonumber\\
\end{align}
$$

你可以自己试着推导一下，例如上面第二个式子。

{% note info %}
推导：
$$
\begin{align}
&\sqrt{3}\sin x+\cos x\nonumber\\
=&2(\frac{\sqrt{3}}{2}\sin x+\frac{1}{2}\cos x)\nonumber\\
\because& \frac{\sqrt{3}}{2} = \sin\frac{\pi}{3}, \frac{1}{2}=\cos\frac{\pi}{3}\nonumber\\
\therefore& \text{原式}=2(\sin x\sin\frac{\pi}{3} + \cos x\cos\frac{\pi}{3})\nonumber\\
&\qquad=2\sin(x+\frac{\pi}{3})\nonumber\\
\end{align}
$$
{% endnote %}

### 本页面未完成 | This Page is Unfinished

