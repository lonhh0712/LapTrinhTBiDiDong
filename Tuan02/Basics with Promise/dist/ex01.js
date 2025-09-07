"use strict";
const delayedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
};
delayedPromise().then((message) => {
    console.log(message);
});
