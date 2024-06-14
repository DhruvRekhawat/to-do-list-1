const inputTask = document.getElementById('input-task')
const addTaskBtn = document.getElementById('addTaskBtn')
const deleteTaskBtn = document.getElementById('deleteTaskBtn')
const taskListEl = document.getElementById('taskItems')

let tasksList = []


function renderList(){
    taskListEl.innerHTML = ""
    
//     for (let i =0;i<=tasksList.length-1;i++){
//     let newTask = document.createElement('li') //<li></li>
//     newTask.innerText = tasksList[i] // <li>tdu</li>
//     taskListEl.appendChild(newTask)// ol --> li
//    }

    tasksList.map((value)=>{
        let newTask = document.createElement('li')
        newTask.innerText = value;
        taskListEl.appendChild(newTask)
    })

}


function addTask(){
   tasksList.push(inputTask.value)
   renderList()
}
function deleteTask(){
    tasksList.pop()
    renderList()
}
addTaskBtn.addEventListener('click',addTask)
deleteTaskBtn.addEventListener('click',deleteTask)