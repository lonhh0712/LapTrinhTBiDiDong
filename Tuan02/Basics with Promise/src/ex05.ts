function simulateTask(time:number) : Promise<string> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task done")
        },time)
    })
}

simulateTask(5000).then((mess)=>{
    console.log(mess);   
})