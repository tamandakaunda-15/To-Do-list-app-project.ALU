// Make a reference to the two HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// An empty array for task storage
let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = ''; // Delete input field
    }
}



// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear existing list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => markAsCompleted(index));
        taskList.appendChild(li);
    });
}

// Function to mark a task as completed
function markAsCompleted(index) {
    tasks.splice(index, 1); // Remove task from array
    renderTasks();
}

// Initial rendering
renderTasks();


