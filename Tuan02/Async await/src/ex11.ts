export function runEx11(): void{
function delay(ms: number) : Promise<string>{
    return new Promise(resovle => 
        setTimeout(resovle,ms)
    )
}
async function sayHello() : Promise<string>{
    await delay(500)
    return "Hello Async";
}
sayHello().then(result =>
    console.log(result)    
)   
}
