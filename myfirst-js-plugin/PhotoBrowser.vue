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

<script>
    export default {
        props: ['isShowBrowser','photos'],
        data: function () {
            return {
                transitionObj: {
                    'transition-duration': "1000ms",
                    'transform': "translate3d(0, 0, 0)"
                },
                curIndex: 0,
                $photoCount:0,
                $deviceWidth:document.body.clientWidth,
                $deviceHeight:document.body.clientHeight
            }
        },
        ready(){
            this.$data.$photoCount = this.photos.length;
        },
        methods: {
            close(){
                this.isShowBrowser = false
            },
            show(index,width,height){
                console.log(index);
                if($deviceWidth/$deviceHeight <= width/height){
                    console.log(width)
                    width = $deviceWidth;
                }else{
                    height = $deviceHeight*.7;
                    width = $deviceWidth*height/$deviceHeight;
                }
                console.log(width)
            },
            onSwipeLeft(eventObj){
                let me = this;
                console.log(me.curIndex)
                console.log(me.$data.$photoCount)
                if(me.curIndex==(me.$data.$photoCount-1)){
                    me.curIndex = 0;
                }else{
                    me.curIndex++
                }
            },
            onSwipeRight(){
                let me = this;
                if(me.curIndex!=0){
                    me.curIndex--;
                }else{
                    me.curIndex = (me.$data.$photoCount-1);
                }

            }
        }
    }
</script>
<style scoped>
    .photo-browser-container{
        background: #000;
        color: #fff;
        font-size: 30px;
        z-index: 1000;
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top: 0;
    }
    .photo-browser-img-container{
        /*margin-top: 30%;*/
    }
    .photo-browser-img{
        /*height: 60%;*/
        /*max-width: 100%;*/
    }
    .photo-browser-closer{
        position: absolute;
        top: 20px;
        right: 25px;
        font-size: .5rem;
        color: #fff;
        z-index: 1000;
    }
</style>