const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
let tasks = [];

// Load tasks from Local Storage
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(task => {
    addTaskToList(task.task, task.completed);
  });
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		addTask();
	}
});
taskList.addEventListener('click', handleTaskClick);

function addTask() {
	const task = taskInput.value;
	if (task === '') return;

  addTaskToList(task, false);
  tasks.push({ task: task, completed: false });

  // Save tasks to Local Storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

	taskInput.value = '';
}

function addTaskToList(task, completed) {
	const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
	li.innerHTML = `
		<label>
			${checkbox.outerHTML}
			<span>${task}</span>
		</label>
		<button>Delete</button>`;
	taskList.appendChild(li);
}

function handleTaskClick(e) {
	if (e.target.tagName === 'INPUT') {
		e.target.parentNode.parentNode.classList.toggle('completed');

    // Update tasks in Local Storage
    const taskIndex = tasks.findIndex(task => task.task === e.target.parentNode.querySelector('span').innerText);
    tasks[taskIndex].completed = e.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
	} else if (e.target.tagName === 'BUTTON') {
		const confirmDelete = confirm('Are you sure you want to delete this task?');
		if (confirmDelete) {
			e.target.parentNode.remove();

      // Remove task from tasks array and update Local Storage
      const taskIndex = tasks.findIndex(task => task.task === e.target.parentNode.querySelector('span').innerText);
      tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}
}
