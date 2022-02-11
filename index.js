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