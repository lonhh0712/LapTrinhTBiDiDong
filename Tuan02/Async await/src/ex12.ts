export function runEx12(): void{
function simulateTask(ms: number) : Promise<string>{
    return new Promise((resovle,reject) =>
        setTimeout(() =>{
            resovle (`Task complete after ${ms} ms`);
        },ms)
    )
}
async function runTask() : Promise<void> {
    const result = await simulateTask(500);
    console.log(result);
    
}

runTask();    
}