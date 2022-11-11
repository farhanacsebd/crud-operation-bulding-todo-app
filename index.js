// link up html with javascript 
const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const dateInput = document.getElementById('dateInput');
const textareaInput = document.getElementById('textareaInput');
const msg = document.querySelector('.msg');



// connect button with form using addend
form.addEventListener('submit',function(e){
    e.preventDefault()
    formValidation()
})


// form Validation function
function  formValidation(){
    if(textInput.value === ''){
        console.log('fail');
        msg.innerHTML = `Task cannot be blank`
    }
    else{
        console.log('success');
        msg.innerHTML ="";
    }
}


let data = {};

function acceptData(){
    
}
