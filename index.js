// link up html with javascript 
const form = document.getElementById('form');


form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('hello');
})
