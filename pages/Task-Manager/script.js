// get elements

const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const noTasksMessage = document.getElementById('no-tasks');
const clearAllButton = document.getElementById('clear-all');
const taskCountElement = document.getElementById('tasks-count');
const completedCountElement = document.getElementById('completed-count');

let tasks = [];
totalTasks = 0;

addButton.addEventListener('click', addTask);

let tasksCompleted = 0;

function addTask(){
    const taskText = taskInput.value.trim();
    //check if task is not empty
    if (taskText !== ''){
        //create new task object
        totalTasks++
        const newTask = {
            id: Date.now(), //using timestamp as id
            text: taskText,
            completed: false,
            createdAt: new Date().toString()
        }
        tasks.push(newTask);
        console.log(tasks);
        saveTasks();
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAllTasks(){
    if (confirm('Are you sure you want to clear all tasks?')){
        tasks = [];
        saveTasks();
        renderTasks();
    }
}

function updateTaskCounts(){
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(function(task){
        return task.completed;
    }).length;
    taskCountElement.textContent = `Total: ${totalTasks} tasks`;
    completedCountElement.textContent = `Completed: ${completedTasks}`;

}

function renderTasks(){
    console.log(tasks);
    taskCountElement.textContent = 'Total Tasks: ' + totalTasks;
    taskList.textContent = '';
    tasks.forEach(function(taskObj){
        const task = document.createElement('li');
        task.className = 'task-item';
        task.innerHTML = `
            <input type='checkbox' id='checkbox'>
            <h3>${taskObj.text}</h3>
            <button id='deleteButton'>Delete</button>
        `

        taskList.appendChild(task);
        document.getElementById('checkbox').addEventListener('input', function(){
            tasksCompleted++;
            deleteTask(task.id);
        })
        document.getElementById('deleteButton').addEventListener('click', deleteTask);
    })
}

function deleteTask(taskId){
    tasks = tasks.filter((task) => {
        return task.id !== taskId
    });

    saveTasks();
    renderTasks();
    
}

function toggleTaskCompletion(taskId){
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].id === taskID){
            tasks[i].completed
        }
    }
}

// Load tasks from localStorage when page loads
function loadTasks() {
    // Try to get tasks from localStorage
    const savedTasks = localStorage.getItem('tasks');
    // If tasks exist in localStorage, parse them into our tasks array
    if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
    }
    }


