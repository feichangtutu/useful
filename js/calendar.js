/**
 * Created by yanni on 2015/6/30.
 * DOM Calendar
 */
function createCalendar(ele){
    if(document.getElementById('calendar')) return;
    var oCalendar=document.createElement('div');
    oCalendar.id="calendar";

    //title
    var oTitle=document.createElement('div');
    oPre=document.createElement('li');
    oPre2=document.createElement('li');
    oPre.innerHTML="上";
    oLi=document.createElement('li');
    oText=document.createElement('div');
    oNext=document.createElement('li');
    oNext2=document.createElement('li');
    oUl=document.createElement('ul');
    oNext.innerHTML="下";
    oTitle.id="can_title";
    oUl.id="ul_title";
    oText.id='mid_title';
    oPre.className = 'other_title';
    oPre2.className = 'other_title';
    oNext.className = 'other_title';
    oNext2.className = 'other_title';
    oTitle.appendChild(oUl);
    oUl.appendChild(oPre2);
    oUl.appendChild(oPre);
    oUl.appendChild(oLi);
    oLi.appendChild(oText);
    oUl.appendChild(oNext);
    oUl.appendChild(oNext2);
    oCalendar.appendChild(oTitle);

    //add click event
    oPre.onclick=function(){
        createContent(year,--month);
        console.log(month-2);
    }
    oNext.onclick=function(){
        createContent(year,++month);
    }
    //bug
    oNext2.onclick=function(){
        ++month
        createContent(year,++month);
    }
    oPre2.onclick = function(){
        --month;
        createContent(year,--month);
    }

    //week
    var oWeek=document.createElement('div');
    oWeek.className="week";
    var aWeek=["日","一","二","三","四","五","六"];
    for(var i=0;i<7;i++){
        var oSpan=document.createElement('span');
        oSpan.innerHTML=aWeek[i];
        oWeek.appendChild(oSpan);
    }
    oCalendar.appendChild(oWeek);

    //设置第一天
    var d=new Date;
    var oContent=document.createElement('div');
    oContent.id="calendar_content";
    oCalendar.appendChild(oContent);

    //创建日
    var year=d.getFullYear();
    var month=d.getMonth();
    createContent(year,month);

    function createContent(y,m){
        var  d= new Date(y,m,1);
        oContent.innerHTML="";
        oText.innerHTML=(d.getMonth()+1)+"月"+d.getFullYear();

        if(d.getMonth()==10){
            oNext2.innerHTML = 1+"月"
            oNext.innerHTML = (d.getMonth()+2)+"月"
        }else if(d.getMonth()==11){
            oNext.innerHTML = 1+"月"
            oNext2.innerHTML = 2+"月"
        }else{
            oNext.innerHTML = (d.getMonth()+2)+"月"
            oNext2.innerHTML = (d.getMonth()+3)+"月"
        }

        if(d.getMonth()==0){
            oPre.innerHTML = 12+"月";
            oPre2.innerHTML = 11 +'月';
        }else if(d.getMonth()==1){
            oPre.innerHTML = (d.getMonth())+"月"
            oPre2.innerHTML = 12 +'月';
        }else{
            oPre.innerHTML = (d.getMonth())+"月"
            oPre2.innerHTML = (d.getMonth()-1)+"月"
        }

        var diff=1-d.getDay();
        console.log(d.getDay());
        if(diff==0) diff=-6;
        d.setDate(diff);
        //创建日期内容部分
        var currentMonth = d.getDate() == 1 ? d.getMonth() : (d.getMonth()+1);
        console.log(currentMonth + 'currentMonth');
        var today = new Date();
        var today = today.getDate();
        for (var i=0;i<42;i++){

            var oSpan=document.createElement('span');
            if (d.getMonth() % 12 == currentMonth % 12) {
                if (today == d.getDate()) {
                    oSpan.id='currentD';
                }
                oSpan.className='currentM';
            }else{
                oSpan.className='notThisM';
            }

            var currentDate=d.getDate();
            oSpan.date=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+currentDate;
            oSpan.innerHTML=currentDate;//把当天是几号赋给span
            d.setDate(currentDate+1);//不断的更新日期
            oContent.appendChild(oSpan);
            oSpan.onclick=function(){
               // ele.value=this.date;
            }
        }
    }
    document.body.appendChild(oCalendar);
}

