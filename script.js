document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoinput");
    const addTaskButton = document.getElementById("addTaskButton");
    const todoList = document.getElementById("todoList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => renderTask(task));

    addTaskButton.addEventListener('click', () => {
      const taskText = todoInput.value.trim();
      if (taskText === "") return;

      const newTask = {
        id: Date.now(),
        text: taskText,
        isCompleted: false,
      };

      tasks.push(newTask);
      saveTasks();
      renderTask(newTask);
      todoInput.value = "";
    });

    function renderTask(task) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span id="element">${task.text}</span>
        <button class="delete-btn" id="element" >Delete</button>
      `;

      // Add delete functionality
      li.querySelector(".delete-btn").addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        li.remove();
      });

      todoList.appendChild(li);
    }

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });