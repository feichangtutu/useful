define(["zepto","toucher"], function(){
    var defaults = {
    };
    var directionAdapter = {
        "up":"swipeUp",
        "down":"swipeDown",
        "left":"swipeLeft",
        "right":"swipeRight"
    }
    var pagemaster = {
        currentIndex:0,
        init:function(settings){
            var pages = settings.el;
            var ctx = this;
            ctx.pages = pages;
            ctx.pageAllNum = pages.length;
            for(var i = pages.length;i>=0;i--){
                $(pages[i]).css("z-index",pages.length - i);
            }
            pages.css("visibility", "visible");
            ctx.stuffImg(settings.imghouse);

            util.toucher(document.body).on('swipeUp','slide-page',function(){
                ctx.next()
                return false;
            }).on('swipeDown','slide-page',function(){
                ctx.prev();
                return false;
            })

            //pages.on("swipeUp", function () {
            //    ctx.next()
            //}).on("swipeDown", function () {
            //    ctx.prev()
            //});
        },


        prev:function(){
            var ctx = this;
            if (ctx.currentIndex > 0) {
                var a = ctx.pages[ctx.currentIndex];
                $(a).removeClass("slidedown out reverse").addClass("slidedown in");
                $(ctx[ctx.currentIndex + 1]).trigger("leave");
                $(ctx[ctx.currentIndex]).trigger("enter");
                ctx.currentIndex--;
            }
        },

        next:function(){
            var ctx = this;
            if (ctx.currentIndex + 1 < ctx.pageAllNum) {
                var a = ctx.pages[ctx.currentIndex];
                $(a).removeClass("slidedown in").addClass("slidedown out reverse");
                $(ctx[ctx.currentIndex - 1]).trigger("leave");
                $(ctx[ctx.currentIndex]).trigger("enter");
                ctx.currentIndex++;
            }
        },

        getCurPage:function(){
            var ctx = this;
            var curPageNo = ctx.getCurPageNo();
            return ctx.pages[curPageNo-1];
        },

        getCurPageNo:function(){
            return this.currentIndex+1;
        },
        getPage:function(target){
            return ctx.pages[target-1];
        },
        /*
         pageNo:?????????????
         prevCall:???????????????????(????????????????)
         nextCall:??????????????????????
         */
        skipToPage:function(pageNo,prevCall,nextCall,isCut){
            var pages = this.pages;
            var targetPageIndex = pageNo;
            var nextpage = targetPageIndex+1;
            for(var i=0;i<targetPageIndex;i++){
                $(pages[i]).addClass("slidedown out reverse");
            }
            var nextPageStr = nextpage.toString();
            nextpage.toString().length==2?nextPageStr:nextPageStr = "0"+ nextPageStr;
            $(".step"+nextPageStr).removeClass("slidedown out reverse").addClass("active");
            this.currentIndex = targetPageIndex;
            var curPage = $(".step"+targetPageIndex);
            if(prevCall)prevCall(curPage);
            if(nextCall)nextCall(curPage);
            if(isCut)this.currentIndex--;
        },
        lockCurPage:function(){

        },
        lockAppointPage:function(){


        },
        recoverCurPage:function(){

        },
        recoverAppointPage:function(){

        },
        stuffImg:function(imghouse){
            var pages = this.pages;
            var l = pages.length;
            var zindex = l;
            if(!!imghouse.isAuto&&!!imghouse.prefix){
                for(var i = 0;i<l;i++){
                    $(pages[i]).css({
                        "background":"url(././static/images/"+imghouse.prefix+(i+1)+".jpg) no-repeat",
                        "background-size":"100% 100%",
                        "zIndex":zindex--
                    });
                }
            }
            if(!imghouse.isAuto&&imghouse.urls.length!=0){
                for(var i = 0;i<l;i++){
                    $(pages[i]).css({
                        "background":"url(././static/images/"+imghouse.urls[i]+".jpg) no-repeat",
                        "background-size":"100% 100%",
                        "zIndex":zindex--
                    });
                }
            }
        },
        zhidingfanzhuan:function(target,direction){
            //direct ???? up down right left
            var direct = directionAdapter[direction];

        }
    };

    return pagemaster;

});