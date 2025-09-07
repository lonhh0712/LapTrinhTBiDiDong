"use strict";
async function fetchCompletedTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    const completed = todos.filter(todo => todo.completed);
    console.log("Completed Todos:", completed);
}
fetchCompletedTodos();
