// =========Variable part start============

let toDoListButton = document.querySelector('.toDoListButton')
let toDoListInput = document.querySelector('.toDoListInput')
let toDoListOutput = document.querySelector('.toDoListOutput')

// =========Variable part end==============
// =================condition part============
 toDoListButton.addEventListener('click' , ()=>{

    if(toDoListInput.value == ''){
        alert('Please enter your text first')
    }else{

// =================tag creation==============
        let listItems = document.createElement('div')
        let listOutput = document.createElement('input')
        let listDelete = document.createElement('button')

// ===================append child============
        toDoListOutput.appendChild(listItems)
        listItems.appendChild(listOutput)
        listItems.appendChild(listDelete)

// ====================adding content=========
        listDelete.innerHTML = 'Delete'
        listOutput.value = toDoListInput.value


// ===================delete button===========
        listDelete.addEventListener('click' , ()=>{
            listItems.remove()
        })
    }



 })




