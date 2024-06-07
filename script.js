// =============== creating task when clicking on button ===============

document.addEventListener("DOMContentLoaded", ()=>{

    const taskInput = document.getElementById("taskInput");
    const addtaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("task-list");

    addtaskButton.addEventListener("click", addTask);
        

    function addTask() {
        const taskText = taskInput.value.trim();

        if(taskText === ""){
            alert("Please enter a task");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
        });

        taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";

    }

});


