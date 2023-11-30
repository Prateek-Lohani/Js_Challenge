var form=document.querySelector('form');
var inputs=document.querySelectorAll('input');
var h4=document.querySelector('h4');


form.addEventListener('submit',function(event){
    event.preventDefault();

    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value.trim()===''){
            h4.textContent='Error! Some Fields Are Missing..';
            h4.style.color='red';
            break;
        }
        else{
            h4.textContent='Form Submitted, Successfully.';
            h4.style='blue'
            
        }
    
    }
})
