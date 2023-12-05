var counter=document.querySelector('h3');
var startbtn=document.querySelector('.start');
var pausebtn=document.querySelector('.pause');
var resetbtn=document.querySelector('.reset');

var count;
var interval;

startbtn.addEventListener('click',function(){
    
    if(count>0){
        interval=setInterval(function(){
            count++;
            counter.textContent=count;
        },1000)
    }
    else{
        count=0;
     interval=setInterval(function(){
        count++;
        counter.textContent=count;
       
    },1000)
    }
    
})

pausebtn.addEventListener('click',function(){
    clearInterval(interval);
})

resetbtn.addEventListener('click',function(){
    count=0;
    counter.textContent=0;
    clearInterval(interval);
})