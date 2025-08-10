document.addEventListener("DOMContentLoaded", () =>
    {
        const todoInput = document.getElementById("todoinput")
const addTaskButton = document.getElementById("addTaskButton")
const todoList = document.getElementById("todoList")
let tasks= JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(task => renderTask(task));
addTaskButton.addEventListener('click',() => {

const tasktext = todoInput.value.trim();
if (tasktext ==="") return;

const newTask ={
     id: Date.now(),
     text :tasktext,
    isCompleted :false,
}
tasks.push(newTask)
saveTasks()
todoInput.value ="";

})
function renderTask(task) {
    const li = document.createElement('li')
    li.innerHTML = `<span> ${task.text} </span>
    <button>delete</button>`;  
    todoList.appendChild(li);

}
function saveTasks(){
    localStorage.setItem("tasks" ,JSON.stringify(tasks))}
}
)

