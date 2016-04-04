/**
 * Created by Administrator on 2016/4/4.
 */
var data=["aa"];
var data_tmp=[];
function $(id){
    return document.getElementById(id);
}
$('left-in').onclick=function(){
    var d=getValue();
    for(var i=0;i< d.length;i++){
        data.unshift(d[i]);
    }
    render();
}
$('left-out').onclick=function(){

    data.shift();
    render();
}
$('right-in').onclick= function () {

    var d=getValue();
    for(var i=0;i< d.length;i++){
        data.push(d[i]);
    }
    render();
}
$('right-out').onclick=function(){

    data.pop();
    render();
}
$('query-btn').onclick=function(){

    var res=getQuery();
    querycon(res);
}
$('box').onclick= function (e) {
    var e=e||window.event;
    var target=e.target|| e.srcElement;
     var index=parseInt(target.getAttribute("data-index"));
    data.splice(index,1);
    render();

}
//标记需要验证的值
function querycon(res){
    data_tmp=[];
    for(var i=0;i<data.length;i++){
        if(data[i].match(res)){
            data_tmp[i]=1;
        }
    }
    render();
}
//获取需要验证的值
function getQuery(){
    var s=$('query-con').value.trim();
    return s;
}
//执行页面渲染
function render(){
    var res="";
    for(var i=0;i<data.length;i++){
        if(data_tmp[i]&&data_tmp[i]==1){
            res+="<div class='focus-ele' data-index='"+ i.toString()+"'>"+data[i]+"</div>"
        }else{
            res+="<div class='box-ele' data-index='"+ i.toString()+"'>"+data[i]+"</div>"
        }
    }
    $('box').innerHTML=res;
}
//获取textarea写进的值
function getValue(){
    var input=$('input').value.trim();
    //g执行全局的匹配
    var d=input.split(/\s|,|;|\u3001|\003B/g);
    d = d.filter(function(item) {
        return item !== '';
    });
    return d;
}
render();
