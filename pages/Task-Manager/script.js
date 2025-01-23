// initialize with blank array and name as Tasks
let tasks = [];

const input = document.getElementById('taskInput');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        addTask();
    }
})

function addTask(){
    const task = input.value.trim();
    if (task != ''){
        tasks.push(task);
        input.value = ''; 
        displayTask()
    }
}

function displayTask(){
    const taskList = document.getElementById('taskList');
    let html = '';
    for (let i = 0; i < tasks.length; i++ ){
        html +=
        `<div class="task-item">
            <span class="task-text">${i+1}. ${tasks[i]}</span>
            <button class="edit-btn" onclick="editTask(${i})">Edit</button>
            <button class="delete-btn" onclick="removeTask(${i})">Delete</button>

        </div>`;
    }
    taskList.innerHTML = html;
}

function removeTask(i){
    tasks.splice(i, 1);
    displayTask()
}

function editTask(i) {
    let input = prompt('Edit task name', tasks[i]);
    if (input !== null && input !== ''){
        tasks[i] = input.trim();
        displayTask();
    };
}

