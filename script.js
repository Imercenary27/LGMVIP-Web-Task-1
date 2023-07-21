// JavaScript to manage tasks in-memory
document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");

    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="delete-btn">Delete</span>
        `;
        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = "";

            taskElement.querySelector(".delete-btn").addEventListener("click", deleteTask);
            taskElement.querySelector(".task-text").addEventListener("click", toggleTaskCompletion);
        }
    }

    function deleteTask(event) {
        const taskElement = event.target.parentElement;
        taskList.removeChild(taskElement);
    }

    function toggleTaskCompletion(event) {
        const taskElement = event.target.parentElement;
        taskElement.classList.toggle("completed");
    }

    addTaskBtn.addEventListener("click", addTask);
});
