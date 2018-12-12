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

// Get access to display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
// Run display todos method
displayTodosButton.addEventListener('click', function() {
    todolist.displayTodos()
});

// Access toggleAll button
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function() {
    todolist.toggleAll();
});





