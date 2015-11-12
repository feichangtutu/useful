/**
 * Created by jyn on 15/9/23.
 * 获取某元素节点 指定标签名的 子元素节点
 */

var oDiv1= document.getElementById('div1');
console.log(getChildren(oDiv1,'div'));//test case

function getChildren(ele,tag){
    var children = ele.childNodes;
    if(typeof tag=='string'){
        tag = tag.toUpperCase();//
        var a=[];
        for(var i = 0;i<children.length;i++){
            var node = children[i];
            if(node.nodeType == 1 && node.nodeName == tag){
                a.push(node);
            }
        }
        return a;
    }else if(typeof tag=='undefined'){
        var a = [];
        for(var i = 0;i<children.length;i++){
            var node = children[i];
            if(node.nodeType == 1){
                a.push(node);
            }
        }
        return a;
    }else{
        throw new Error('tag参数类型错误！');
    }
}
