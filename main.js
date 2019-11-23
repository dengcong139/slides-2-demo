let n;
初始化()
setInterval(()=>{
    //console.log(n);
    //移动当期图片到离开位置,同时待动画结束之后.将离开位置的图片置为进入位置
    makeLeave(getImage(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    //在移动前一张图片的时候,后一张图片由进入状态变为当前状态
    makeCurrent(getImage(n+1))
    //为满足循环播放动画
    n += 1
},3000)
function x(n){
    if(n>5){
        n=n%5;
        if(n===0){
            n=5;
        }
    }
    return n;
}
function getImage(n){
   return  $(`.images > img:nth-child(${x(n)})`)//使用es6语法,使用反单引号
}
function 初始化(){
    n=1;
    $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
}
//置class为当前状态
function makeCurrent($node){
    $node.removeClass('enter laeve').addClass('current');
    return $node;
}
//置class为离开状态
function makeLeave($node){
    $node.removeClass('enter current').addClass('leave');
    return $node;
}
//置class为进入状态
function makeEnter($node){
    $node.removeClass('leave current').addClass('enter');
    return $node;
}