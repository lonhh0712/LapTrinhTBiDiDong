"use strict";
function chainNumber(num) {
    return Promise.resolve(num)
        .then(n => n * n)
        .then(n => n * 2)
        .then(n => n + 5);
}
chainNumber(2).then((mess) => {
    console.log(mess);
});
