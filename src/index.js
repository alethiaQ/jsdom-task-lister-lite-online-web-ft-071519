

document.addEventListener("DOMContentLoaded", () => {
    //accessing input fields
  const taskForm = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const tasklist = document.getElementById("tasks");
  //add listener to submit and send event to func that prevents submit
  taskForm.addEventListener("submit", newTask);
});

function newTask(event) {
  event.preventDefault();
  //create li to add to ul 
  const newTaskLi = document.createElement("li");

  //the li will have the contents of newly created task
  newTaskLi.innerHTML = document.getElementById("new-task-description").value;

  //add new task 
  document.getElementById("tasks").appendChild(newTaskLi);
  event.target.reset();
  
};
