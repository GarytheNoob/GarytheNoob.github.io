---
title: "零基础入门Markdown：一种轻量级标记语言"
author: GarytheNoob
date: 2023/01/27 00:00
mathjax: true
math: true
categories:
- 技术
tags:
- 技术
- Markdown
---

这篇文章将一站式带你认识并了解Markdown及其用法。

<!-- more -->

Markdown是一种「**语言**」，也是一种文件格式。也就是说，表达相同的意思，可以用Markdown也可以不用。

那它究竟是一种什么「语言」呢？使用它有什么优势呢？接下来我会简单介绍。

{% note info %}
请注意，本文就是用Markdown编写的。
(% endnote %)

## 开始前回答几个问题

### 何为Markdown？有何优势？

Markdown和Word等软件的用法最大的不同，在于Markdown是**所见非所得**的。在Word中，我们习惯于利用上方的工具栏为我们的文字修改格式和排版，而这些操作的**结果会实时在屏幕上显示**，所以我们说Word是一种**所见即所得**的编辑软件（请注意，Markdown不是「软件」而是「语言」，即使经常被用来和Word比较）。而Markdown则不一样，使用Markdown编辑文字时，所有的格式修改都需要用特殊的符号标记来设置。

这就导致了Markdown和Word在操作上的区别。在Markdown中，你的手完全不用离开键盘，也就是说，输入不会被打断。并且你输入的只是纯文本，甚至字体、大小这种设置都没有，只是**纯粹的文字**。所有的**加粗**、*斜体*、~~删除线~~都只是在键盘上输入几个符号就能搞定的。

这样带来了两个好处：

- **连续的输入流** 正如刚刚所说的那样，手无须离开键盘，只需要专心打字。
- **标准统一的格式** 所有的排版都不需要自己动手，各个渲染器会帮你排版，让所有的格式都标准有序。

但是也有弊端：

- **单一的排版** Markdown的排版大多都像本文这样，是一长串文字。不像在其他编辑器中，可以做到不一样的效果，比如分栏、文本框等。正如刚刚所说，Markdown处理的是**纯粹的文字**。


### 一定要用Markdown替代Word吗？

**完全没必要！**

首先，Markdown和Word对于文字处理各有所长。Word主打直观方便，而Markdown则更简单有效率。所以我个人不是很赞同网络上的所谓「放弃Word吧，来用Markdown」的观点——两家各有所长，需要分情况。

Markdown作为一种轻量的标记语言，很适合写博客（比如本文）或者一些简单的说明。在GitHub中，Markdown更是广泛使用。[GitHub的中文版Markdown标准文档](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 编辑Markdown前准备

正如一些编程语言需要自己的「编译器」，Markdown作为语言也需要专门的编辑器，所以选择一款编辑器是很重要的。

{% note info %}
刚刚提到，Markdown处理的是纯文本，所以理论上可以用系统自带的**文本编辑器**来打开，比如Windows系统的**记事本**（Notepad），但是这些编辑器不能满足很多功能，比如渲染、高亮等，所以还是选一款专门的编辑器吧！
{% endnote %}

我现在正在使用的是微软的[Visual Studio Code](https://code.visualstudio.com/)（VScode），这是一款**全能的**代码编辑器，当然也支持编辑Markdown。但是这款编辑器的配置难度较高（本质上是依赖安装扩展实现不同功能），小白上手可能略显困难。但是相信如果配置得好，这款编辑器一定可以满足编写Markdown的所有需求。

下面我简要说明一下安装步骤，由于不是本文重点，节奏较快。如果不会可以去B站或百度搜索教程。

首先从[上述官网](https://code.visualstudio.com/)下载VScode，打开后点击左侧的**扩展**按键或按快捷键`Ctrl+Shift+X`打开扩展下载窗口，输入`Chinese`来搜索中文翻译，选择第一个安装即可。安装完后需要重启VSCode。

理论上原版的VScode已经可以编辑Markdown，但是安装接下来几个扩展之后编辑会变得更顺畅。以下扩展只需要搜索`Markdown`就可以搜索得到，点击下载即可。

- Markdown All in One：Markdown编辑工具全家桶
- Markdown Preview Enhanced：Markdown白底预览

到这一步，你的VScode已经具备了流畅编写Markdown的能力，接下来就是新建文件然后一展身手了！你可以新建一个文本文件，将后缀名改为`.md`，这是Markdown文件的后缀。然后用VScode打开，就可以愉快开始Markdown编写了！在编写界面的右上角，你可以找到一个预览按钮（在安装了Markdown Preview Enhanced扩展之后可以按快捷键`Ctrl+K V`打开，这是一个两段快捷键，先按`Ctrl+K`再单独按`V`）。

如果我说的太抽象，可以去B站或百度搜索「Markdown VScode」的关键词寻找教程！

## Markdown基本语法

请注意，由于Markdown的作者的反对标准化立场，每家的Markdown渲染和语法支持可能都不同。现在主流的一种标准是GitHub Flavored Markdown，简称**GFM**。其中有一些对标准Markdown的修改和添加。

### 标题

在标题文本的一行开头输入若干（1~6个）`#`号：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
由于本文的目录原因，不方便直接在本文中插入标题，还请各位自己尝试。也可以看看本文自带的一些标题看看效果。

比如上面的`Markdown基本语法`是二级标题，其下的`标题`是三级标题。上面一部分的源码如下：

```markdown
...
## Markdown基本语法

请注意，由于Markdown的作者的反对标准化立场，每家的Markdown渲染和语法支持可能都不同。现在主流的一种标准是GitHub Flavored Markdown，简称**GFM**。其中有一些对标准Markdown的修改和添加。

### 标题

在标题文本的一行开头输入若干（1~6个）`#`号：
...
```

本页面未完成。

