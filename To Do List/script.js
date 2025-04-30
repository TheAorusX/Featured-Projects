const toDoList = {
    tasks: [],
    addTask: function (taskText) {
      this.tasks.push(taskText);
      this.renderTasks();
    },
    renderTasks: function () {
      console.log("Tasks:", this.tasks);
    }
  };
  
  const tasksContainer = document.getElementById("tasks-container");
  const taskTemplate = document.getElementById("task-template");
  const anythingMore = document.getElementById("anything-more");
  
  // Add a new empty task input container
  function addNewTask() {
    // Remove "Anything More?" before adding
    anythingMore.remove();
  
    const clone = taskTemplate.content.cloneNode(true);
    const textInput = clone.querySelector('input[type="text"]');
  
    textInput.addEventListener('input', () => {
      const value = textInput.value.trim();
      if (value !== "") {
        toDoList.addTask(value);
      }
    });
  
    tasksContainer.appendChild(clone);
  
    // Re-attach "Anything More?" after the latest task
    tasksContainer.appendChild(anythingMore);
  }
  
  // Delete a task container and reposition "Anything More?"
  function deleteTask(button) {
    const taskDiv = button.closest('.add-task');
    const parent = taskDiv.parentElement;
    taskDiv.remove();
  
    // Re-add "Anything More?" below last task if any remain
    if (tasksContainer.children.length > 0) {
      tasksContainer.appendChild(anythingMore);
    } else {
      // Add a new task if no tasks left
      addNewTask();
    }
  }
  
  // Initial setup
  addNewTask();
  