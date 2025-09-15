// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim(); // Step 1

    if (taskText === "") { // Step 2
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li'); // Step 3
    li.textContent = taskText;               // Step 3

    const removeButton = document.createElement('button'); // Step 4
    removeButton.textContent = "Remove";                 // Step 4
    removeButton.className = 'remove-btn';               // Step 4

    removeButton.onclick = function() {                  // Step 4
        taskList.removeChild(li);
    };

    taskList.appendChild(li);      // Step 5: append li first
    li.appendChild(removeButton);  // Step 5: append remove button after

    taskInput.value = '';          // Step 6: clear input
}

// Attach event listeners after DOM content loads
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
