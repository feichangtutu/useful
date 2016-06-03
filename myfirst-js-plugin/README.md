PhotoBrowser plugin
===
My first plugin writen by javascript with vue.
---
Special thanks to [Lanlazy](https://github.com/lazyhero).
Also thanks to [Vue.js](http://cn.vuejs.org/guide/).

####写在前面：
>身为公司辛勤的切图工，终于可以写点js了。 作为"前端工程师"的我忍不住流下两行热泪。
好久不写就是会忘，lan同学在帮我写这个插件的过程中，因为我的好些低级错误差点气死好几回，不过最后，他没死，我也活了，哈哈哈……多谢他的耐心指导，我终于有个拿的出手的小东西了。

####功能简介
1. 点击列表图，唤醒组件-photoBrowser；
   列表图如下图： 
![picList](./list.jpg =300x)
2. 打开组件，进行图片展示功能；
   展示效果图如下：
   ![photoBrowser](./show.jpg =300x)
   
    详细功能包括：
    2.1 滑动图片，可以进行图片切换
    2.2 图片可以循环展示
    2.3 点击操作（目前是点击 **关闭** 按钮），photoBrowser关闭

####过程
1. 搭个架子，写了个template 

```javascript
<template>
    <div >
        <div  class="photo-browser-container" >
            <div class="photo-browser-closer" v-on:click="close()">关闭</div>
            <div class="photo-browser-img-container">
                <div v-touch:swipeleft="onSwipeLeft" v-touch:swiperight="onSwipeRight" v-bind:style="transitionObj" style="text-align: center;">
                    <img v-bind:style="{width:photo.w + 'px',height:photo.h+'px',marginTop:photo.mTop +'px'}" v-show="curIndex==$index" class="photo-browser-img" v-for="photo in photos"
                         :src="photo.src">
                </div>
            </div>
        </div>
    </div>
</template>
```



