"use strict";
async function fetchMultipleTodos() {
    for (let i = 1; i <= 3; i++) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
        const todo = await res.json();
        console.log(`Todo ${i}:`, todo);
    }
}
fetchMultipleTodos();
