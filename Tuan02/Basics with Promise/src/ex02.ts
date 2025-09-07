const delayedPromisePro = (): Promise<number> =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(10)
        },10000)
    });
}
delayedPromisePro().then((message) =>{
    console.log(message);
    
});