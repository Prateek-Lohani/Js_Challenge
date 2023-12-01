var start=document.querySelector('#start');
var pause=document.querySelector('#pause');
var reset=document.querySelector('#reset');
var h3=document.querySelector('h3');

var interval;

start.addEventListener('click',function(){
  
    count=0;
    interval=setInterval(function(){
        count++;
        h3.textContent=count;
        
    },1000)

})


pause.addEventListener('click',function(){
   clearInterval(interval);
})

reset.addEventListener('click',function(){
    interval=0;
    count=0;
    h3.textContent=0;
})


