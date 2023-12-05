progress=document.querySelector('.progress');
h3=document.querySelector('h3')
var count=0;

var interval=setInterval(function(){
    if(count===100){
        clearInterval(interval);
        h3.style.opacity=1;

    }
    count++;
    progress.style.width=count+'%'
},40)