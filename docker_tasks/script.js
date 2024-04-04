// Make a reference to the two HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// An empty array for task storage
let tasks = [];

//  add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        // Create elements for the task, checkbox, and delete button
        var newTask = document.createElement('li');
        var checkbox = document.createElement('input');
        var deleteButton = document.createElement('button');

        // Set up the checkbox
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function(e) {
            if (e.target.checked) {
                newTask.classList.add('completed-task'); // Use a class for completed tasks
            } else {
                newTask.classList.remove('completed-task');
            }
        });

        // Set up the delete button
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            newTask.remove(); // Remove the task from the DOM
        });

        // Append elements to the new task item
        newTask.textContent = taskInput.value;
        newTask.prepend(checkbox);
        newTask.appendChild(deleteButton); // Add the delete button to the task

        // Append the new task to the task list
        document.getElementById('taskList').appendChild(newTask);
        taskInput.value = ''; // Clear the input field
    }
}

// Update the renderTasks function to include a delete button
function renderTasks() {
    taskList.innerHTML = ''; // Clear existing list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1); // Remove task from array
            renderTasks(); // Re-render the task list
        });
        li.textContent = task;
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
