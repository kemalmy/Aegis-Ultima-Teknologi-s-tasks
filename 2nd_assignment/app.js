const todoArray = [];

document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
  });

function addTask() {
  const taskInput = document.getElementById("task");
  const categoryInput = document.getElementById("category");
  const category = categoryInput.value;

  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Add task to the array
  const taskObject = {
    task: taskText,
    category: category,
  };
  todoArray.push(taskObject);

  // Create a card element
  const card = createCard(taskObject, todoArray.length - 1);

  // Append card to the appropriate todoList container
  const todoListId =
    "todoList" + category.charAt(0).toUpperCase() + category.slice(1);
  let todoList = document.getElementById(todoListId);

  if (!todoList) {
    // Create the todoList container if it doesn't exist
    todoList = document.createElement("div");
    todoList.id = todoListId;
    document.querySelector(".container.todo-container").appendChild(todoList);
  }

  todoList.appendChild(card);

  // Clear input fields
  taskInput.value = "";
  categoryInput.value = "mustDo"; // Reset category to "Must Do"
}

function createCard(taskObject, index) {
  const card = document.createElement("div");
  card.className = "card todo-card";
  card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${taskObject.task}</h5>
          <button class="btn btn-warning btn-sm" onclick="editTask(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
  return card;
}

function editTask(index) {
  const newTask = prompt("Edit the task:", todoArray[index].task);
  if (newTask !== null) {
    todoArray[index].task = newTask;
    updateTodoList();
  }
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    todoArray.splice(index, 1);
    updateTodoList();
  }
}

function updateTodoList() {
  // Update each category's todoList
  ["MustDo", "ShouldDo", "CouldDo", "IfIHaveTime"].forEach(function (category) {
    const todoListId = "todoList" + category;
    const todoList = document.getElementById(todoListId);
    todoList.innerHTML = ""; // Clear existing list

    todoArray.forEach(function (taskObject, index) {
      if (taskObject.category.toLowerCase() === category.toLowerCase()) {
        const card = createCard(taskObject, index);
        todoList.appendChild(card);
      }
    });
  });
}
