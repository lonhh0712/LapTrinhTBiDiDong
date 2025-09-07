"use strict";
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "two");
});
Promise.race([promise4, promise5]).then((mess) => {
    console.log(mess);
});
