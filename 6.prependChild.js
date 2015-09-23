/**
 * Created by jyn on 15/9/23.
 * 把某个DOM元素添加成为某个DOM原色的第一个子节点
 */
function prependChild(newNode,parentEle){
    var child = parentEle.firstChild;
    child?parentEle.insertBefore(newNode,child):parentEle.appendChild(newNode);
}
var oDiv1 = document.getElementById('div2');
var oDiv2 = document.getElementById('div4');
prependChild(oDiv2,oDiv1);