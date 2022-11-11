// link up html with javascript 
const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const dateInput = document.getElementById('dateInput');
const textareaInput = document.getElementById('textareaInput');
const tasks = document.getElementById('tasks');
const add = document.getElementById('add');
const msg = document.querySelector('.msg');



// connect button with form using addend
form.addEventListener('submit',function(e){
    e.preventDefault()
    formValidation()
    // console.log('hello');
})


// form Validation function
function  formValidation(){
    if(textInput.value === ''){
        // console.log('fail');
        msg.innerHTML = `Task cannot be blank`
    }
    else{
        // console.log('success');
        msg.innerHTML ="";
        acceptData()

        add.setAttribute("data-bs-dismiss","modal");
        add.click()
    
        (()=>{
            add.setAttribute("data-bs-dismiss","");
        })()
    }
}

// data store
let data = {};


// accept data
function acceptData(){
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textareaInput.value;

    createTasks()

}


function createTasks(){
    tasks.innerHTML += `
    
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <i class="fas fa-edit"></i>
        <i onclick="delete" class="fas fa-trash-alt"></i>
    </span>
  </div>
    `;


// remove the value from the input field 
    textInput.value = ""; 
    dateInput.value = ""; 
    textareaInput.value = ""; 
}



// delete btn 