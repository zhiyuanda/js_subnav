# HTML+CSS+JS案例展示(仿淘宝侧边栏效果)
>    参考来源：
>
> [JavaScript基础语法-dom-bom-js-es6新语法-jQuery-数据可视化echarts黑马pink老师前端入门基础视频教程(500多集)持续_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Sy4y1C7ha?p=244&spm_id_from=pageDriver)

## 效果展示：

![img](https://img-blog.csdnimg.cn/d026cf5ecb5a4187beb19a8e2abf695d.gif)

## 网页GitHub地址如下：（若加载较慢建议刷新后耐心等待一会~）

[js_subnav](https://jiang-lijun.github.io/js_subnav/)

## 主要功能：

1. 侧边栏初始状态是绝对定位，滚动到顶部时变为固定定位；
2. 未滚动到content内容区时，隐藏“返回顶部”字样，滚动到content内容区时，显示“返回顶部”字样；
3. 点击“返回顶部”，页面返回顶部；
4. 设置animate()动画，使返回顶部的速度较为自然。

## 网页代码如下：

### HTML：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js_subnav</title>
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
</head>
<body>
    <div class="header w">header区域</div>
    <div class="banner w">banner区域</div>
    <div class="content w">content区域</div>
    <div class="slider-bar">
        <span class="goback">返回顶部</span>
    </div>
</body>
</html>
```



### CSS：

```css
* {
    margin: 0;
    padding: 0;
}
ul,
li {
    list-style: none;
    margin: 0;
}
a {
    text-decoration: none;
    color: #000;
}
.w {
    width: 1200px;
    margin: 0 auto;
}
.header {
    height: 100px;
    margin-bottom: 5px;
    background-color: pink;
}
.banner {
    position: relative;
    height: 625px;
    margin-bottom: 5px;
    background-color: skyblue;
}
.slider-bar {
    position: absolute;
    top: 580px;
    right: 130px;
    width: 50px;
    height: 150px;
    background-color: yellow;
}
.goback {
    display: none;
    margin-left: 7px;
    position: absolute;
    bottom: 6px;
    font-size: 17px;
    cursor: pointer;
}
.content {
    height: 1000px;
    background-color: green;
}
```



### JS：

```javascript
window.addEventListener('load',function() {
    // 获取元素
    var sliderbar = document.querySelector('.slider-bar');
    var content = document.querySelector('.content');
    var goback = document.querySelector('.goback');
    var sliderTop = sliderbar.offsetTop;
    var contentTop = content.offsetTop;
    // 注册滚动事件
    document.addEventListener('scroll',function() {
        if(window.pageYOffset >= 580) {
            sliderbar.style.position = 'fixed';
            sliderbar.style.top = '0';
        }
        else {
            sliderbar.style.position = 'absolute';
            sliderbar.style.top = '580px';
        }
        if(window.pageYOffset >= contentTop) {
            goback.style.display = 'block';
        }else {
            goback.style.display = 'none';
        }
    });
    goback.addEventListener('click',function() {
        animate(window,0);
    });
    // 带有动画的返回顶部
    function animate(obj,target,callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 通过设置步长，可以实现逐渐减速效果
            var step = (target - window.pageYOffset) / 10;
            // 三目运算，避免出现负值
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(window.pageYOffset == target) {
                clearInterval(obj.timer);
                // 短路运算
                callback && callback();
            }
            window.scroll(0,window.pageYOffset + step);
        },15)
    }
})
```

