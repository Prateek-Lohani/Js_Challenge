var tabs=document.querySelectorAll('.tab');
var p=document.querySelectorAll('p');

p[0].style.display='block';

tabs.forEach(function(tab,index){
    
    tab.addEventListener('click',function(){
        hideAllText();
        p[index].style.display='block';
    });
});

function hideAllText(){
    p.forEach(function(para){
        para.style.display='none';
    })
}