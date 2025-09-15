// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select DOM elements once
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Step 2a

        if (taskText === "") { // Step 2b
            alert("Please enter a task");
            return;
        }

        // Step 2c: Create li and set textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 2d: Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Step 2e: Assign onclick to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Step 2f: Append remove button first, then append li to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Step 2g: Clear input field
        taskInput.value = '';
    }

    // Step 3: Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
