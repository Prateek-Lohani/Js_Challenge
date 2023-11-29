// Create an HTML page with a Button.
// When the button is clicked change the text of a paragraph Element.


var btn=document.querySelector('button');
var para=document.querySelector('p');


btn.addEventListener('click',function(){
     para.textContent='Hi!, I am the changed text'
     btn.textContent='Revert'
})

