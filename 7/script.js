var input=document.querySelector('input');


var data=[
    {name:"Prateek"},
    {name:"Wzrxtc"},
    {name:"Xavier"},
    {name:"Qiver"},
    {name:"Silver"},
    {name:"Thanos"},
    {name:"Tony"},
    {name:"Scarlet"}
]

var pers='';
data.forEach(function(elem){
    pers +=`<div class='person'>
    <p>${elem.name}</p>
    </div>`;
})

document.querySelector('.people').innerHTML=pers;

input.addEventListener('input',function(){
    var matching=data.filter(function(e){
        return e.name.startsWith(input.value);
    });    
    var newuser=''
    matching.forEach(function(elem){
        newuser +=`<div class='person'>
        <p>${elem.name}</p>
        </div>`;
    })

   document.querySelector('.people').innerHTML=newuser; 
})