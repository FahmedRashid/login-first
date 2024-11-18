document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const newTask = { text: taskText, completed: false };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }

    function handleTaskClick(event) {
        const target = event.target;
        const index = [...taskList.children].indexOf(target.closest('li'));

        if (target.classList.contains('task-checkbox')) {
            tasks[index].completed = !tasks[index].completed; //toggle the completed status of the clicked task.
        } 

        if (target.classList.contains('delete-btn')) {
            tasks.splice(index, 1); //removes the task
        }

        renderTasks();
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
});