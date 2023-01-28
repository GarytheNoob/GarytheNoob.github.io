---
title: 2023年如何优雅地白嫖歌曲和歌词？
author: GarytheNoob
date: 2023/01/28 22:00
categories:
- 技巧
tags:
- 技巧
- 音乐
---

现在各大歌曲平台都是付费的，那么在2023年，怎样才能白嫖到自己想要的歌曲呢？

<!-- more -->

{% note warning %}
请尊重原作者著作权！

本文作者不支持盗用他人歌曲作品，本文所分享的方法仅供学习交流。请不要未经许可将下载下来的歌曲进行商用。
{% endnote %}

## 背景

由于博主是高中党，高中又允许带MP3但是不允许联网，在宿舍听歌~~嗨歌~~就成了在学校少有的乐趣。但是找到优质的音源成了问题，并且博主比较抠门，不喜欢为歌曲平台充值会员。

首先来看一下在博主这里下载到的歌曲的要求：

- **能听** 也就是能用MP3播放出来且*音质不会太差*。
  但是其实音质也听不出什么，因为我在学校用的是一个很烂的蓝牙音响。
- **歌词** 我的MP3支持歌词滚动显示，所以我希望下载下来的歌曲能是带`.lrc`文件歌词的。

对，没啦。

滚动歌词不是什么很高大上的玩意。如果要在电脑上听，有很多支持歌词显示的播放器可供选择，比如[PotPlayer](https://daumpotplayer.com/download/ "下载链接")。只需要将对应的**和歌曲同名的**`.lrc`歌词文件放入和歌曲文件相同目录下即可。

{% note info %}
**和歌曲同名**是指，歌词文件和歌曲文件**除了扩展名以外一模一样**（一般都是一模一样的，个别情况自己复制一下就好了）。

比如说，你的歌曲文件叫做`【一百首经典粤语歌】BEYOND - 海阔天空.flac`，那么这首的歌词文件就要叫做`【一百首经典粤语歌】BEYOND - 海阔天空.lrc`，然后将这俩放在同一个目录下，PotPlayer之类的软件就能自动识别显示歌词了。
{% endnote %}

## 免费歌曲

对于免费的歌曲，在任意一个能免费下载的平台下载。最好还是找自带歌词下载的平台，比如QQ音乐。但是很遗憾的是，网易云音乐不支持直接的歌词下载，需要用各种方法调用api才能整到歌词。在下面我会贴出一个较为简单的方法。

## 网易云歌词下载

如果有的歌曲只在网易云上有，那也可以通过这种方式下载歌词。这种方法不需要安装其他的软件或者调用api，是我现在常用的一种简单方法。

1. 首先在浏览器中打开歌曲的**网易云链接**，可以通过在客户端的歌曲列表右键——复制链接，然后粘贴到浏览器中：
    ![复制网址](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_21-43-40.png)
    ![输入网址](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_21-49-10.png)

2. 在浏览器按`F12`打开开发者工具，选择上方的「网络」（Network）选项卡，在搜索栏中输入`lyric`：
    ![开发者工具](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_21-56-59.png)

3. 刷新网页，就能看到下方被筛选出来的几个项目。选择下面有`lyric?csrf_token=...`字样的项目。选择右侧的「预览」选项卡，再展开其中的`lrc:`项目，在显示的歌词（`lyric:`一行）上右键选择「复制值」。
   ![开发者工具](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_22-00-13.png)

{% note info %}
有时候搜索出来的有`lyric?csrf_token=...`字样的项目可能有多个，则需要自己手动确认复制的是自己需要的歌词。
{% endnote %}

4. 在歌曲文件相同目录下右键新建一个文本文件，将复制的内容粘贴进去（「复制值」选项会自动带换行复制，所以无须做任何调整）：
    ![新建文本文件](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_22-01-53.png)
    ![复制后的文本文件](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_22-02-24.png)

5. 保存，退出文件。然后将文本文件重命名为歌曲文件的名字并修改其后缀为`.lrc`：
    ![修改文件名和后缀](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/GIF%202023-1-28%2022-03-22.gif)

6. 如果以上步骤正确完成，用PotPlayer打开歌曲文件，就可以显示歌词了：
    ![显示歌词的PotPlayer](https://raw.githubusercontent.com/GarytheNoob/Images/main/scr/Snipaste_2023-01-28_22-04-28.png)

## 白嫖收费歌曲

如果歌曲是收费的，则需要在其他地方搜索了。

可以在百度之类的搜索引擎直接搜`{歌名} mp3下载`，没准能被指引到某些音乐分享网站上。但是这些网站大多不是要关注公众号，就是要注册账号。

接下来我将介绍一些简单有效的方法。

### 使用Telegram VK Music机器人（推荐）

如果你有自己的梯子，或者自己有方式使用[Telegram](https://baike.baidu.com/item/Telegram/6974663?fr=aladdin)的话，我推荐你使用这个方法。如果没有梯子也想尝试，那么可以试着使用诸如[NekoX](https://github.com/NekoX-Dev/NekoX)之类的第三方自带免费代理的Telegram客户端。具体方法请自行搜索。

在Telegram与[@VK Music Bot](https://t.me/vkmusic_bot)对话。先发送`/start`（一些客户端会自动帮你发）开始会话。

VKM机器人支持的指令：

- `/song`：开始按歌名查找歌曲。
  单独发送`/song`，然后待机器人回复后发送想要查找的歌名即可。

- `/artist`：开始按艺术家名查找歌曲。
  单独发送`/artist`，然后待机器人回复后发送想要查找的艺术家名即可。

- `/my`：列出用户收藏的歌曲。
- `/top`：列出热门歌曲。
- `/settings`：设置。
- `/help`：帮助。

{% note info %}
由于VKM机器人的曲库比较杂乱，搜索歌名/艺术家的时候可以多次搜索。比如：

想要搜索RADWIMPS的[《なんでもないや》](https://music.163.com/song?id=426881506&userid=4974376164)，可以搜索`なんでもないや`或`nandemonaiya`；

想要搜索米津玄师的作品，可以搜索`米津玄師`或`Yozenu Kenshi`。
{% endnote %}

在搜索到了之后，VKM机器人会列出一系列的歌曲信息。这时候需要用户自己选择自己需要的歌曲。而选择也是有技巧的，一般会通过判断乐曲**时长**来确定版本。确定版本之后就可以在网易云之类的地方下载歌词自己配套了。

确认了版本之后，点击对应的数字按键就可以得到相应的歌曲了。

### 使用第三方软件

- [MusicTools](https://www.whg6.com/html/musictools/)：曾经的万能音乐下载软件，但是现在似乎已经不行了。

- [酷我音乐解析](https://peng3.com/vip/kuwo)
- [音乐解锁](https://demo.unlock-music.dev/)：用来解锁部分音乐平台的特殊音乐格式，这样就可以在第三方播放器上播放了。
