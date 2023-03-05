---
title: 排版测试页
author: GarytheDev
hide: true
date: 1/1/1 00:00
mathjax: true
math: true
---

用于测试不常见的排版。毕竟，确认排版正常工作是很重要的事情。
本文用于测试不常见的排版。
用于测试不常见的排版。毕竟，确认排版正常工作是很重要的事情。

## Markdown
## Markdown

The *quick* ***brown*** fox <u>jumps</u> over the **LAZY** dog.

{% note success %}
The *quick* ***brown*** fox <u>jumps</u> over the **LAZY** dog.

> Quoted LOL
绿色一般代表正常

{% endnote %}
> Quoted LOL

```python
for i in range(10):
    print(i + input("Plz Input", i))
```

更多代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    int a, b;
    cin >> a >> b;
    string aStr;
    cin >> aStr;
    cout << a + b << aStr[a + b] << endl;
    return 0;
}
```

## Tags

{% note success %}

绿色一般代表正常。

{% endnote %}

{% note info %}

看起来谁要有提示了。

{% endnote %}

{% label primary @紫色可爱！ %}
{% label danger @红色喜庆（不是） %}

<br>

{% cb false %}我的天

<br>

{% cb true %}你的天
## Tags

{% note success %}

绿色一般代表正常。

{% endnote %}

{% note info %}

看起来谁要有提示了。

{% endnote %}

{% label primary @紫色可爱！ %}
{% label danger @红色喜庆（不是） %}

<br>

{% cb false %}我的天

<br>

{% cb true %}你的天

<br>
> 回应我吧，爱莉希雅！
<br>

{% btn https://garythenoob.github.io, 神奇的按钮, 回城！ %}
{% btn https://garythenoob.github.io, 神奇的按钮, 回城！ %}

## 数学渲染

$\LaTeX$渲染！
接下来测试数学渲染
## 数学渲染

$\LaTeX$渲染！

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

上面是二次方程求根公式

$$
\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)
$$

上面是牛顿-莱布尼茨公式

$$
\ce{MnO2 + 4HCl }\xlongequal{\triangle} \ce{ MnCl2 + Cl2 ^ + 2H2O}
$$

$$
\ce{MnO2 + 2Cl- + 4H+ }\xlongequal{\triangle} \ce{ Mn^2+ + Cl2 ^ + 2H2O}
$$

$$
\ce{_1^1H  _1^2H  _1^3H}
$$

上面是一些化学符号

## GeoGebra

<script src="https://cdn.geogebra.org/apps/deployggb.js"></script>

<div id="ggbApplet"></div>

<script>
var parameters = {
"id": "ggbApplet",
"width":468,
"height":492,
"showToolBar":true,
"language":"zh",
// use this instead of ggbBase64 to load a material from geogebra.org
// "material_id":"RHYH3UQ8",
// use this instead of ggbBase64 to load a .ggb file
// "filename":"myfile.ggb",
"ggbBase64":"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",
};
// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var applet = new GGBApplet(parameters, '5.0', views);
window.onload = function() {applet.inject('ggbApplet')};
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
</script>

## 隐藏

基于 `hexo-sliding-spoiler`。

基于 `hexo-sliding-spoiler`。

{% spoiler "隐藏内容的标题" %}

test ***aaa***

可以写Markdown呀！

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    int a, b;
    cin >> a >> b;
    string aStr;
    cin >> aStr;
    cout << a + b << aStr[a + b] << endl;
    return 0;
}
```
$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

{% note success %}

绿色一般代表正常。

{% endnote %}


可以写Markdown呀！

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    int a, b;
    cin >> a >> b;
    string aStr;
    cin >> aStr;
    cout << a + b << aStr[a + b] << endl;
    return 0;
}
```
$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

{% note success %}

绿色一般代表正常。

{% endnote %}


{% endspoiler %}
