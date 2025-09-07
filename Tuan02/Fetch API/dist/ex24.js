"use strict";
async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
    });
    const result = await response.json();
    console.log("Posted Data:", result);
}
postData();
