<style scoped>
    .bmb-picshare-block li{
        border-bottom: 1px solid #ebebeb;
        border-top: 1px solid #ebebeb;
    }

    .bmb-picshare-block .item-text {
        line-height: normal!important;
    }
    .picshare-purview {
        text-align: left;
    }
    .picshare-purview img {
        max-width: 20%;
        margin-left: 1rem;
        /*height: .4rem;*/
    }
    .picshare-purview span {
        margin-left: .6rem;
    }
    .bmb-picshare-block li {
        margin-top: .266666667rem!important;
        margin-bottom: .266666667rem;
        background: #fff;
    }
    .bmb-picshare-block ul {
        background: transparent!important;
    }
    .bmb-picshare-block {
    }
    .bmb-bbs-page .list-block {
        margin: .266666667rem 0!important;
    }
    .picshare-avatar-img {
        width: 1rem;
        height: 1rem;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
    /*.pswp__button--close {*/
        /*background-image: url(../../assets/images/common/cross.png)!important;*/
        /*background-size: 100% 100%;*/
    /*}*/
</style>
<template>
    <div class="page page-current">
        <common-header
                title="照片分享"
                back-switch="openPicshareSquare"
                >
        </common-header>

        <div class="bmb-fixed-distance-md content ">

            <div class="list-block media-list margin-tb-more margin-lr-less bmb-picshare-block">
                <ul>
                    <li  v-for="picshare in picshares" >
                        <div href="javascript:void(0);" class="item-content">
                            <div class="item-media">
                                <img class="picshare-avatar-img" v-if="!!picshare.user_info.avatar" v-bind:src="picshare.user_info.avatar">
                                <img class="picshare-avatar-img" v-if="!picshare.user_info.avatar" src="http://codevm-static.oss-cn-beijing.aliyuncs.com/cooperation/app/images/app_deploy/author-icon-none.png">
                            </div>
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title text-22">{{picshare.user_info.nickname}}</div>
                                    <div class="item-after am-text-three text-22">— {{picshare.created}}</div>
                                </div>
                                <div class="item-text text-24 am-text-three">{{picshare.content}}</div>
                            </div>
                        </div>
                        <div class="item-subtitle am-text-two text-24 padding-lr-more picshare-purview">
                            <img v-on:click="openPhotoBrowser(picshare.pic_url)" v-for="pic in picshare.pic_url|limitBy 1" v-bind:src="pic.url" >
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <photo-browser v-if="isShowPhotoBrowser"  :photos='curSelectedPhotos' :is-show-browser.sync='isShowPhotoBrowser'></photo-browser>

    </div>
</template>
<script>
    /*eslint-disable */
        import PhotoBrowser from '../common/PhotoBrowser'
        export default {
            props: ['apiName'],
            data: function () {
                return {
                    title: '',
                    picshares: [],
                    curPage: 1,
                    type: '',
                    $pageSize: 5,
                    total: 1,
                    noticechange: 0,
                    openPicshareWrite: false,
                    openPicshareDetail: false,
                    selectedPic: {},
                    comments: [],
                    curComment: "",
                    commentChange: 0,
                    selectedPicshareId: "",
                    isShowComment: false,
                    noticecomment: 0,
                    isShowPhotoBrowser:false,
                    curSelectedPhotos:[]
                }
            },
            ready: function () {
                console.info(this.total);
            },
            asyncData: function (resolve, reject) {
                var ctx = this;
                Project.get(Project.SERVICE.PICSHARE[ctx.apiName || 'LIST'], {
//                    offset: ctx.$data.$pageSize,
                    page: ctx.curPage
                }, function (res) {
                    var data = res;
                    if (data.content.items.length == 0) {
                        Project.toast("您还未发过图说哦~右上角发布新图说")
                    }
                    data.content.items.forEach(function (item) {
                        item.created = Project.util.fromNow(item.created);
                        item.pic_url = JSON.parse(item.pic_url);
                    })
                    resolve({
                        picshares: data.content.items,
                        total: data.content.total
                    });
                })
            },
            methods: {
                getComments:function(){
                    var ctx = this;
                    Project.get(Project.SERVICE.COMMENTS.LIST,
                            {
                                obj_id: ctx.selectedPic.id,
                                obj_type: "picshare"
                            }, function (res) {
                                ctx.comments = res.content.items;
                            });
                },
                goDetail: function (picshare) {
                    this.selectedPic = picshare;
                    this.openPicshareDetail = true;
                },
                goWrite: function () {
                    this.openPicshareWrite = true;
                },
                back: function () {
                    this.$parent.openPicshareSquare = false;
                },
                report: function (picshare) {
                    Project.prompt("举报理由", function (e) {
//                    获取举报理由
                        var reason = e.data;
                        if (!!reason) {
                            Project.post(Project.SERVICE.REPORT, {
                                uid: picshare.user_id,
                                fortype: "picshare",
                                msg: reason,
                                froid: picshare.id
                            }, function () {
                                Project.toast("我们会即刻审查!感谢支持!")
                            })
                        } else {
                            Project.toast("请填写举报理由")
                        }
                    })
                },
                ding: function (picshare) {
                    Project.post(Project.SERVICE.BASE.DING, {
                        id: picshare.id,
                        type:"picshare"
                    }, function (data) {
                        picshare.ding = data.content;
                        Project.toast("赞+1", null, 500);
                    })
                },
                writeComment: function (selectedPic) {
                    var ctx = this;
                    if (!!ctx.curComment) {
                        Project.post(Project.SERVICE.COMMENTS.ADD, {
                            obj_id: selectedPic.id,
                            obj_type: "picshare",
                            content: ctx.curComment,
                        }, function (res) {
                            ctx.noticecomment += 1;
                            ctx.curComment = "";
                            ctx.getComments()
                            Project.toast("评论成功")
                        })
                    } else {
                        Project.toast("什么都没说?")
                    }

                },
                checkComments: function (picshare,picshareId) {
                    var ctx = this;
                    ctx.selectedPic = picshare;
                    if(ctx.selectedPicshareId===picshareId){
                        if(ctx.isShowComment){
                            ctx.isShowComment = false;
                        }else{
                            ctx.isShowComment = true;
                        }
                    }else{
                        ctx.selectedPicshareId=picshareId
                        Project.get(Project.SERVICE.COMMENTS.LIST,
                                {
                                    obj_id: picshareId,
                                    obj_type: "picshare"
                                }, function (res) {
                                    ctx.comments = res.content.items;
                                    ctx.isShowComment = true ;
                                });

                    }
                },
                openPhotoBrowser:function(picurls){
                    var ctx = this;
                    ctx.isShowPhotoBrowser = true;
                    var items = [];
                    var deviceHeight = document.body.clientHeight;
                    var deviceWidth = document.body.clientWidth;
                    for(var i in picurls){
                        var _url = picurls[i].url;
                        var _w = Project.util.getImgSize(_url)[0];
                        var _y = Project.util.getImgSize(_url)[1];
                        var width;
                        var height;
                        var marginTop=0;
                        if(deviceWidth/deviceHeight <= (_w/_y)){
                            width = deviceWidth;
                            height = (_y/_w) * width;
                            marginTop = (deviceHeight-height)/2;
                        }else{
                            height = deviceHeight*.7;
                            width = deviceWidth*_y/deviceHeight;
                        }
                        console.log('src is'+_url);
                        console.log('height is'+height);
                        items.push({
                            src:_url,
                            w:width,
                            h:height,
                            mTop: marginTop
                        });
                    }
                    ctx.curSelectedPhotos = items;
                }
            },
            watch: {
                "curPage": 'reloadAsyncData',
                "noticechange": 'reloadAsyncData',
                "picshares": {
                    handler: function () {
                        this.$nextTick(function () {
                        })
                    },
                    deep: true
                },
                "noticecomment": function () {
//                    更新评论数
                    var ctx = this;
                    ctx.selectedPic.comments = parseInt(ctx.selectedPic.comments) + 1;
                }
            },
            computed: {
                pageCount: function () {
                    return Math.ceil(this.total / this.$data.$pageSize)
                }
            },
            components: {
                PhotoBrowser: PhotoBrowser
            }
        }
    /*eslint-enable */
</script>