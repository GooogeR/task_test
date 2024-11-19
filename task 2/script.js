document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    const showAllBtn = document.getElementById('showAll');
    const showCompletedBtn = document.getElementById('showCompleted');
    const showIncompleteBtn = document.getElementById('showIncomplete');

    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return; 
  
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.textContent = taskText;

      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = '✖';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });

      taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      taskItem.appendChild(deleteBtn);
  
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  
    showAllBtn.addEventListener('click', () => filterTasks('all'));
    showCompletedBtn.addEventListener('click', () => filterTasks('completed'));
    showIncompleteBtn.addEventListener('click', () => filterTasks('incomplete'));
  
    function filterTasks(filter) {
      const tasks = taskList.children;
  
      Array.from(tasks).forEach(task => {
        switch (filter) {
          case 'all':
            task.style.display = 'flex';
            break;
          case 'completed':
            task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
            break;
          case 'incomplete':
            task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
            break;
        }
      });
    }
  });
  