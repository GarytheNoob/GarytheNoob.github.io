---
title: "三角函数宝典"
author: GarytheNoob
mathjax: true
math: true
---

### This Page Is Unfinished | 本页面未完成


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
\theta\in[2k\pi,2k\pi+\frac{\pi}{2}]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta>0\nonumber\\
\cos\theta>0\nonumber\\
\tan\theta>0\nonumber\\
\end{align}
$$

### 第二象限

$$
\begin{align}
\theta\in[2k\pi+\frac{\pi}{2},2k\pi+\pi]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta>0\nonumber\\
\cos\theta<0\nonumber\\
\tan\theta<0\nonumber\\
\end{align}
$$

### 第三象限

$$
\begin{align}
\theta\in[2k\pi-\pi,2k\pi-\frac{\pi}{2}]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta<0\nonumber\\
\cos\theta<0\nonumber\\
\tan\theta>0\nonumber\\
\end{align}
$$

### 第四象限

$$
\begin{align}
\theta\in[2k\pi-\frac{\pi}{2},2k\pi]&,\ k\in\mathbb{Z}:\nonumber\\
\sin\theta<0\nonumber\\
\cos\theta<0\nonumber\\
\tan\theta>0\nonumber\\
\end{align}
$$

## 同角三角函数关系

- $\sin^2\alpha+\cos^2\alpha=1$
- $\frac{\sin\alpha}{\cos\alpha}=\tan\alpha$



## 诱导公式

#### 1. 

对任意$k\in\mathbb{Z}$，有：

$$
\begin{align}
\sin(\alpha+2k\pi)=\sin\alpha\nonumber\\
\cos(\alpha+2k\pi)=\cos\alpha\nonumber\\
\tan(\alpha+2k\pi)=\tan\alpha\nonumber\\
\end{align}
$$

#### 2.

$$
\begin{align}
\sin(\alpha+\pi)=-\sin\alpha\nonumber\\
\cos(\alpha+\pi)=-\cos\alpha\nonumber\\
\tan(\alpha+\pi)=\tan\alpha\nonumber\\
\end{align}
$$

#### 3.

$$
\begin{align}
\sin(-\alpha)=-\sin\alpha\nonumber\\
\cos(-\alpha)=\cos\alpha\nonumber\\
\tan(-\alpha)=-\tan\alpha\nonumber\\
\end{align}
$$

#### 4.

$$
\begin{align}
\sin(\pi-\alpha)=\sin\alpha\nonumber\\
\cos(\pi-\alpha)=-\cos\alpha\nonumber\\
\tan(\pi-\alpha)=-\tan\alpha\nonumber\\
\end{align}
$$

#### 5.

$$
\begin{align}
\sin(\frac{\pi}{2}-\alpha)=\cos\alpha\nonumber\\
\cos(\frac{\pi}{2}-\alpha)=\sin\alpha\nonumber\\
\end{align}
$$

#### 6.

$$
\begin{align}
\sin(\frac{\pi}{2}+\alpha)=\cos\alpha\nonumber\\
\cos(\frac{\pi}{2}+\alpha)=-\sin\alpha\nonumber\\
\end{align}
$$

#### 绝招

> **奇变偶不变，符号看象限。**象限怎么看？$\alpha$锐角看。

对于任意形如$\sin(\alpha+\frac{k}{2}\pi)$或$\cos(\alpha+\frac{k}{2}\pi)\quad (k\in\mathbb{Z})$的正弦或余弦三角函数式，有：

- 如果$k$是**偶数**，即$k\in \{a|a=2m,m\in\mathbb{Z}\}$，则**三角函数名不变**

- 如果$k$是**奇数**，即$k\in \{a|a=2m+1,m\in\mathbb{Z}\}$，则**三角函数名改变**，即$\sin()$变成$\cos()$，$\cos()$变成$\sin()$。

无论是否变三角函数名，原式括号内的东西都会变为$\alpha$，即刚才这一步操作去掉了括号内的$\frac{k}{2}\pi$。

接下来，将$\alpha$当成第一象限内的正角，无论题干说$\alpha$是第几象限角，统一将其看做第一象限角。

然后，根据各象限内$\sin\alpha$或$\cos\alpha$的符号确定最终答案的符号。**注意：**此处确定的符号是化简前式子的符号。



##### 例子：化简$\sin(\frac{5\pi}{2}-\alpha)$

这个例子不形如$\sin(\alpha+\frac{k}{2}\pi)$，所以我们需要通过诱导公式**3.**，将其变成：
$$
-\sin(\alpha-\frac{5\pi}{2})\tag{I}
$$
然后对于$(\text I)$式，它形如$\sin(\alpha+\frac{k}{2}\pi)$，其中$k=-5$，是奇数，所以改变三角函数名，**不确定整个式子前的符号**：
$$
-(\pm\cos\alpha)\tag{II}
$$
在这个式子中我们没有确定$\cos \alpha$前的符号，所以接下来我们将确定。

观察$(\text I)$式，假设$\alpha$是第一象限角，则$(\alpha-\frac{5\pi}{2})$是第四象限角，根据***各象限内三角函数值符号***，在第四象限内角的正弦值小于0，所以应在$(\text{II})$式的$\cos\alpha$前的符号取符号，即为：
$$
\begin{align}
&-(-cos\alpha)\\
=&\cos\alpha
\end{align}
$$
