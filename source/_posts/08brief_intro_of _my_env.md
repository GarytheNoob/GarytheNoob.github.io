---
title: 介绍一下自己的环境
author: GarytheNoob
date: 2023/02/13
categories:
- 技术
tags:
- 软件分享
- 介绍
---

总想着介绍一下自己正在电脑上用的一些好用的软件，所以这就来了！

<!-- more -->

## 设备简介

我的PC是戴尔的经典G15 9920，（改装）了SN770的2TB SSD。目前是笔记本竖向放置然后接HDMI扩展屏（HKC IG27Q 2K 144Hz）使用。

|部件|型号/参数|
|:---:|:---:|
|CPU|12th Gen Intel(R) Core(TM) i7-12700H   2.30 GHz||
|RAM|16.0 GB|
|GPU|NVIDIA GeForce RTX 3060 Laptop GPU|
|SSD|NVMe WD_BLACK SN770 2TB（改装）|

## 硬件

没有配扬声器是永远的遗憾（但是我的桌子也不大似乎没位置了）。

- 键盘：雷神的平价红轴机械键盘（能按就行）。
- 鼠标：买笔记本送的戴记严选。
- 移动硬盘：有两个：一个是WD的MyPassport SSD 1TB，另一个是把换SSD时扣下来的硬盘装在绿联的硬盘盒里自己做的。
- NAS：家里之前买的群晖DS916+，目前也没怎么配只是单独用来存资料。

## 软件

那就慢慢说软件吧！接下来我会模拟一次重装系统之后安装软件的过程。逐步介绍安装的各个软件。



### 系统与激活

我使用的是原版的Windows 11，然后数字权利激活了专业工作站版。对于一般的使用，只要是专业版往上，各个版本都差不多。

激活的软件我推荐[云萌 Windows 10+ 激活工具]。操作方便简单快捷。

[云萌 Windows 10+ 激活工具]: https://cmwtat.cloudmoe.com/

在安装了系统之后，我强烈建议**注册并登录微软账号**。

### 安装软件之前你需要知道的

即使过了很久，还是有人不知道（也有可能是不关心），Windows已经有了自己的**包管理器**：**winget**。

那么什么是包管理器呢？具体来说就是一个统一的安装器，可以直接搜索软件并直接安装，无须使用浏览器在网上搜索，省去了很多麻烦。

winget是一个控制台应用。要使用它，需要`Win+R`后输入`cmd`回车，打开命令提示符，然后才能使用winget的命令。

[微软官方的winget中文教程 - Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/)

```
winget search <应用名称>
```

上述命令可以用来在库里搜索应用。

```
winget install <应用名称>
```

上述命令则是用来安装。

接下来我说的很多软件都可以使用winget安装，我不会另外说明。读者可以自行尝试一下。

### 输入法

重装系统之后第一个安装的自然是输入法。

我目前使用的是搜狗输入法，使用winget只需简单输入：

```
winget install Sogou.SogouInput
```

使用搜狗输入法主要是对它的熟悉。之前尝试过一段时间的中州韵（Rime），但是由于它不联网且联想功能较弱，还是换回了搜狗。

### 办公三件套

我使用的是Office系列，具体是从[某人]那白嫖的Office 365 E5开发者订阅。其实如果没有特殊的需要，Office 365和其它版本也差不了多少。所以如果想使用一般的Office，就使用厂家给的版本或是使用诸如[Office Tool Plus](https://otp.landian.vip/zh-cn/)之类的Office部署/激活软件。

### 浏览器

在浏览器的话题上，似乎一直有争论。而争论的中心无非就是Chrome阵营和Firefox阵营之间的争论。而其他的浏览器，比如新Edge或是什么国产浏览器，都是Chrome（准确地说，开源的Chromium）内核的。

我之前是坚定的Edge用户——喜欢它和Windows的联动，比如能在`Alt+Tab`界面里直接显示标签页。但是久而久之，越来越受不了它极高的内存占用。所以终于，在[某人]的劝说下，我换成了Firefox。

[某人]: https://github.com/66Leo66

从Chrome系换成Firefox，其实没多少不便——绝大多数在Chrome系上的插件在Firefox上也有对应款。主要是常用的快捷键可能需要适应一下，比如Chrome系老司机喜欢的`Ctrl+Shift+N`被换成了`Ctrl+Shift+P`。

总的来说，我也很推荐那些受不了高内存占用的人来用Firefox（真香）。

#### 扩展

不管是Chrome系还是Firefox，都有很多很好用的扩展。

##### MONKNOW

这是一个新标签页的扩展，主要是美化了每次打开的新标签页。这个是我很久以前无意间碰到的，然后注册了个账号就一直用的这个。其它的有类似功能的插件蛮多，可以挑一个自己喜欢的。

##### Global Speed

如果还在讨厌某些视频网站菜鸡的加速功能，你一定会爱上这个插件。因为它支持间隔为0.1x的倍速控制。并且还有简单易用的快捷键：

- `A`：倍速减小0.1x。
- `S`：在1.0x和当前倍速之间切换。
- `D`：倍速增加0.1x。

##### AdBlocker / AdGuard

两款都是很常见的挡广告插件，选自己熟悉的就好。

### 小办公三件套

这个名字是我自己起的，说的是**压缩软件**、**图片浏览器**和**媒体播放器**。而我使用的分别是[Bandizip](https://www.bandisoft.com/bandizip/)、[Honeyview](https://cn.bandisoft.com/honeyview/)和[PotPlayer](https://potplayer.daum.net/?lang=zh_CN)。

事实上能代替这三者的软件有很多，我只是分享我自己的选择。其它类似的比如极客风界面的[7-zip](https://www.7-zip.org/)、[VLC](https://www.videolan.org/)等等。

### 代理

你在想什么呢？我可不会分享卖家，只是简单说一嘴客户端而已。

主流的客户端还用我说吗？就是那只经典小猫——开源的Clash For Windows。我用了它的另一个版本——Clash Verge。

你猜我为啥不给链接？

### 文本编辑器

之前经典的Notepad++由于作者过于逆天被很多华人所抵制，但幸好我完全不用。

我主力的编辑器是[Visual Studio Code](https://code.visualstudio.com/)，这个懂得都懂，不用多说。

而对于轻量的文本文件，一般还需要一款比VS Code轻量而又比系统自带的Notepad记事本功能丰富一点的编辑器。我选择的开源的[Notepad3](https://www.rizonesoft.com/downloads/notepad3/)。

### PowerToys

微软自己做的开源的小工具箱，立面有很多对于某些人群来说很好用的小工具。比如取色器或者是OCR识别。

[官网链接](https://learn.microsoft.com/zh-cn/windows/powertoys/)

### Everything

极其强大的文件搜索软件，速度极快。无须多说，下就完了。

[官网链接](https://www.voidtools.com/zh-cn/)

### Snipaste

我以为QQ自带的截图已经够方便了，直到我遇见了[Snipaste](https://www.snipaste.com/)。无论如何，在屏幕上贴图片的功能还是过分爽了。无论是笔记还是便签，都非常方便。

### IDM和Motrix

两个都是网络下载器，[IDM](https://www.internetdownloadmanager.com/)收费而[Motrix](https://motrix.app/zh-CN/)免费。

## 我对其他东西的选择

这些东西可能不是所有人都需要，但是我仍然写在这。

### Minecraft启动器

我用的是[PCL2内测版](https://afdian.net/a/LTCat)（付费），作者龙猫大大也发布了免费的公测版。具体也可以去他的爱发电官网看一看，仍然是点上面的链接。
