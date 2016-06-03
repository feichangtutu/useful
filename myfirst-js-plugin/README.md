PhotoBrowser plugin
==============
My first plugin writen by javascript with vue.
----
Special thanks to [Lanlazy](https://github.com/lazyhero).

####写在前面：
>身为公司辛勤的切图工，终于可以写点js了。作为前端工程师的我忍不住流下两行热泪。
好久不写就是会忘，lan同学在帮我写这个插件的过程中，因为我的好些低级错误差点气死好几回。不过最后，他没死，我也活了，哈哈哈……多谢他的耐心指导，我终于有个拿的出手的小东西了。

####过程
1. 搭个架子，写了个template  

```javascript
<template>
    <div >
        <div  class="photo-browser-container" >
            <div class="photo-browser-closer" v-on:click="close()">关闭</div>
            <div class="photo-browser-img-container">
                <div v-touch:swipeleft="onSwipeLeft" v-touch:swiperight="onSwipeRight"
                 v-bind:style="transitionObj" style="text-align: center;">
                    <img v-bind:style="{width:photo.w + 'px',height:photo.h+'px',marginTop:photo.mTop +'px'}" 
                    v-show="curIndex==$index" class="photo-browser-img" v-for="photo in photos" :src="photo.src">
                </div>
            </div>
        </div>
    </div>
</template>
```
