/**
 * Created by jyn on 15/9/23.
 * 在某个DOM元素后边追加原色
 */

function insertAfter(oldEle,newEle){
    if(oldEle&&oldEle.nodeType===1&&newEle&&newEle.nodeType===1){
        oldEle.nextSibling?oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling):oldEle.parentNode.appendChild(newEle)
    }else{
        throw new Error("参数错误！");
    }
}
var oDiv2 = document.getElementById('div2');
var oDiv1 = document.getElementById('div1').cloneNode(true);
insertAfter(oDiv2,oDiv1);