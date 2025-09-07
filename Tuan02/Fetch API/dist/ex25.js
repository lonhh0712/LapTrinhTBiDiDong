"use strict";
function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Download complete.");
            resolve();
        }, 3000);
    });
}
downloadFile();
