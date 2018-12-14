var todolist = {
  todos: [],
  addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
  changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
  deleteTodo: function(position) {
        this.todos.splice(position,1);
    },
  toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
  toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos
        for(var i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // if everything's true, make everything false
        if(completedTodos === totalTodos) {
        // Case 1. Make everything false
            for (var i= 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        // Case 2. otherwise, make everything True
        } else {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

// Object to handle events & user interaction
var handlers = {
  addTodo: function() {
    var addTodoText = document.getElementById('addTodoTextInput');
    todolist.addTodo(addTodoTextInput.value);
    // Clear the input box
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    // .value for text - valueAsNumber for numerical input
    todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    // clear values
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todolist.toggleAll();
    view.displayTodos();
  }
  };

// Method to render todos to the screen
var view = {
  displayTodos: function() {
    // Grab the UL element
    var todosUl = document.querySelector('ul');
    // Clear the UL
    todosUl.innerHTML = '';
    // For each todos - Create an li element
    for(var i = 0; todolist.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todolist.todos[i];
      var todoTextWithCompletion = '';
  
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '() ' + todo.todoText;
      }
      // Set textCOntent of each li
      todoLi.textContent = todoTextWithCompletion;      
      todosUl.appendChild(todoLi);
    }
  }
};

