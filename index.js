var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

// Display todos
function displayTodos() {
    console.log('My Todos:', todos);
}

// Add new todos
function addTodo(todo) {
    // Add todo item at the end of the todos array
    todos.push(todo);
    displayTodos();
}

// Change todo
function changeTodo(position,newValue) {
    todos[position] = newValue;
    displayTodos();
}

// Delete todo
function deleteTodo(position) {
    todos.splice(position,1);
    displayTodos();
}

addTodo('item 0')
//changeTodo(0,'changed again')
//deleteTodo(1)





