var start=document.querySelector('#start');
var pause=document.querySelector('#pause');
var reset=document.querySelector('#reset');
var h3=document.querySelector('h3');
var interval;
var count;

start.addEventListener('click',function(){
    if(count>0){
    interval=setInterval(function(){
        count++;
        h3.textContent=count;
    },1000)
    }
    else{
        count=0;
        interval=setInterval(function(){
            count++;
            h3.textContent=count;     
        },1000)
    }
})

pause.addEventListener('click',function(){
    clearInterval(interval);
    console.log(count);
})

reset.addEventListener('click',function(){
    h3.textContent=0;
    count=0;
    clearInterval(interval);
 })
