/**
 * Created by jyn on 15/11/5.
 *
 * 图库轮播选区bug
 *
 * 结果：会阻止用户选中该区域，同时不能有复制动作
 */


document.body.onselect = document.body.ondragstart = document.body.onselectstart = function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
};