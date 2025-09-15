// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents saving again
    }

    // Function to add a new task
    function addTask(taskTextInput = null, save = true) {
        const taskText = taskTextInput !== null ? taskTextInput : taskInput.value.trim();

        if (taskText === "") {
            if (taskTextInput === null) alert("Please enter a task");
            return;
        }

        // Create a new li element and set textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Assign onclick to remove the li element
        removeButton.onclick = function() {
            taskList.removeChild(li);

            // Update Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append remove button to li
        li.appendChild(removeButton);

        // Append li to taskList
        taskList.appendChild(li);

        // Clear input field if this was a new input
        if (taskTextInput === null) taskInput.value = '';

        // Save to Local Storage if this is a new task
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load saved tasks on page load
    loadTasks();
});
