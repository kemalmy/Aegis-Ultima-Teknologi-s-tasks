// Initialize an empty array to store task objects
const todoArray = [];

// Add event listener for form submission
document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the addTask function
    addTask();
  });

// Function to add a new task
function addTask() {
  // Get references to task and category input elements
  const taskInput = document.getElementById("task");
  const categoryInput = document.getElementById("category");

  // Get values from input elements
  const category = categoryInput.value;
  const taskText = taskInput.value;

  // Check if the task text is empty
  if (taskText.trim() === "") {
    // Display an alert if the task is empty
    alert("Please enter a task.");
    return;
  }

  // Create a task object with task text and category
  const taskObject = {
    task: taskText,
    category: category,
  };

  // Add the task object to the todoArray
  todoArray.push(taskObject);

  // Create a card element for the task
  const card = createCard(taskObject, todoArray.length - 1);

  // Get or create the appropriate todoList container
  const todoListId =
    "todoList" + category.charAt(0).toUpperCase() + category.slice(1);
  let todoList = document.getElementById(todoListId);

  // If the todoList container doesn't exist, create it
  if (!todoList) {
    todoList = document.createElement("div");
    todoList.id = todoListId;
    document.querySelector(".container.todo-container").appendChild(todoList);
  }

  // Append the card to the todoList container
  todoList.appendChild(card);

  // Clear input fields
  taskInput.value = "";
  categoryInput.value = "mustDo"; // Reset category to "Must Do"
}

// Function to create a card element for a task
function createCard(taskObject, index) {
  // Create a div element with card styling
  const card = document.createElement("div");
  card.className = "card todo-card";

  // Set the inner HTML of the card with task details and buttons
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${taskObject.task}</h5>
      <button class="btn btn-warning btn-sm" onclick="editTask(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
    </div>
  `;

  // Return the created card element
  return card;
}

// Function to edit a task
function editTask(index) {
  // Prompt the user to edit the task and get the new task text
  const newTask = prompt("Edit the task:", todoArray[index].task);

  // If the user didn't cancel and entered a new task, update the task
  if (newTask !== null) {
    todoArray[index].task = newTask;
    // Update the todoList
    updateTodoList();
  }
}

// Function to delete a task
function deleteTask(index) {
  // Ask for confirmation before deleting the task
  if (confirm("Are you sure you want to delete this task?")) {
    // Remove the task from the array
    todoArray.splice(index, 1);
    // Update the todoList
    updateTodoList();
  }
}

// Function to update the todoList in the DOM
function updateTodoList() {
  // Iterate over each category and update the corresponding todoList
  ["MustDo", "ShouldDo", "CouldDo", "IfIHaveTime"].forEach(function (category) {
    // Get the todoList container for the category
    const todoListId = "todoList" + category;
    const todoList = document.getElementById(todoListId);

    // Clear the existing list in the todoList container
    todoList.innerHTML = "";

    // Iterate over each task in the array
    todoArray.forEach(function (taskObject, index) {
      // If the task belongs to the current category, create a card and append it to the todoList
      if (taskObject.category.toLowerCase() === category.toLowerCase()) {
        const card = createCard(taskObject, index);
        todoList.appendChild(card);
      }
    });
  });