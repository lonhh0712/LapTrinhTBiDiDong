 export function runEx13(): void{
function simulateTasks(ms : number) : Promise<string>{
    return new Promise((resovle,reject)=>{
        setTimeout(()=>
        {
            if(ms>1500){
            resovle(`Task completed after ${ms} ms`)
        }else{
            reject(new Error("task fail"))
        }
        },ms)
    })
}
 async function runTasks():Promise<void> {
     try {
        const result = await simulateTasks(500) ;
        console.log(result);
            
     } catch (error) {
        console.error(error as Error);
        
     }
 }
 runTasks();    
}