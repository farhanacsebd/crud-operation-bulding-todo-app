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
    
    //Es6 formula apply as like as function 
        (()=>{
            add.setAttribute("data-bs-dismiss","");
        })();
    }
}

// data store
let data = [];


// accept data
function acceptData(){
    data.push({
        text : textInput.value,
        date : dateInput.value,
        description : textareaInput.value,
    })

  //localstorage setdata 
    localStorage.setItem('data',JSON.stringify(data));

    createTasks()
    // console.log(data);
}


function createTasks(){
    tasks.innerHTML = "";
    data.map((x,y) => {
       return ( tasks.innerHTML += `
       <div id=${y}>
       <span class="fw-bold">${x.text}</span>
       <span class="small text-secondary">${x.date}</span>
       <p>${x.description}</p>
       <span class="options">
           <i onclick="editTasks(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
           <i onclick="deleteTasks(this)" class="fas fa-trash-alt"></i>
       </span>
     </div>
       `);     
    })
    
   


// remove the value from the input field 
    textInput.value = ""; 
    dateInput.value = ""; 
    textareaInput.value = ""; 
}


// delete btn 

function deleteTasks(e){
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1)

    localStorage.setItem('data',JSON.stringify(data))
    console.log(data);
}


// edit the function
function editTasks(e){
    let selectValue = e.parentElement.parentElement;

    textInput.value = selectValue.children[0].innerHTML; 
    dateInput.value = selectValue.children[1].innerHTML; 
    textareaInput.value = selectValue.children[2].innerHTML; 

// remove the previoous tasks
    // selectValue.remove();
    deleteTasks(e);
}


(() =>{
    data = JSON.parse(localStorage.getItem('data')) || [];
    createTasks()
    console.log(data);
})();