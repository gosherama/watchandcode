var todolist = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty !');
        } else {
            console.log('My todos:');
            for (var i = 0; i < this.todos.length ; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('()', this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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
        this.displayTodos();
    }
};

// Object to handle events
var handlers = {
  displayTodos: function() {
      todolist.displayTodos();
  },
  addTodo: function() {
    var addTodoText = document.getElementById('addTodoTextInput');
    todolist.addTodo(addTodoTextInput.value);
    // Clear the input box
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    // .value for text - valueAsNumber for numerical input
    todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    // clear values
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todolist.toggleAll();
  }
  };


