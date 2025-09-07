"use strict";
const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        const success = false;
        setTimeout(() => {
            if (success) {
                resolve(1);
            }
            else {
                reject("Something went wrong!");
            }
        }, 1000);
    });
};
rejectPromise().then((mess) => {
    console.log(mess);
}).catch((err) => {
    console.error("Caught error:", err);
});
