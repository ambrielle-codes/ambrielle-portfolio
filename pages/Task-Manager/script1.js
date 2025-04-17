// DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const noTasksMessage = document.getElementById('no-tasks');
const clearAllButton = document.getElementById('clear-all');
const tasksCountElement = document.getElementById('tasks-count');
const completedCountElement = document.getElementById('completed-count');
// Task data array
let tasks = [];

function loadTasks() {
    // Try to get tasks from localStorage
    const savedTasks = localStorage.getItem('tasks');
    // If tasks exist in localStorage, parse them into our tasks array
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}
    // Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

    // Add a new task
function addTask() { 
    const taskText = taskInput.value.trim();
    // Check if task is not empty
    if (taskText) {
        // Create a new task object
        const newTask = {
            id: Date.now(), // Generate a unique ID using timestamp
            text: taskText,
            completed: false,
        createdAt: new Date().toISOString()
        };
    // Add task to array
    tasks.push(newTask);
    // Save to localStorage
    saveTasks();
    // Clear input
    taskInput.value = '';
    // Update UI
    renderTasks();
    }
}

function deleteTask(taskId) {
    // Filter out the task with the given ID
    tasks = tasks.filter(function(task) {
        return task.id !== taskId;
    });
    // Save updated tasks to localStorage
    saveTasks();
    // Update UI
    renderTasks();
}

function toggleTaskCompletion(taskId) {
    // Find the task in the array
    for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
        // Toggle the completed status
        tasks[i].completed = !tasks[i].completed;
        break;
        }
    }
    // Save updated tasks to localStorage
    saveTasks();
    // Update UI
    renderTasks();
}

function clearAllTasks() {
    // Confirm before clearing
    if (tasks.length > 0) {
        const confirmed = confirm("Are you sure you want to delete all tasks?");
    if (confirmed) {
        tasks = [];
        saveTasks();
        renderTasks();
        }
    }
}

function updateTaskCounts() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(function(task) {
        return task.completed;
    }).length;
    tasksCountElement.textContent = `Total: ${totalTasks} tasks`;
    completedCountElement.textContent = `Completed: ${completedTasks}`;
}

function renderTasks(){
    // Clear current list
    taskList.innerHTML = '';
    // Show/hide the "no tasks" message
    if (tasks.length === 0) {
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
    }
    // Create task elements
    tasks.forEach(function(task) {
        // Create list item
        const li = document.createElement('li');
        li.className = 'task-item';
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
        toggleTaskCompletion(task.id);
    });
    // Create task text span
    const span = document.createElement('span');
    span.className = task.completed ? 'task-text completed' : 'task-text';
    span.textContent = task.text;
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(task.id);
    });
    // Add elements to list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    // Add list item to task list
    taskList.appendChild(li);
    });

    // Update task counts
    updateTaskCounts();
}

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
// Add task when Enter key is pressed
if (e.key === 'Enter') {
    addTask();
    }
});
clearAllButton.addEventListener('click', clearAllTasks);
// Initialize the app
loadTasks();