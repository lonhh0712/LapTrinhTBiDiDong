function readArr(arr: number[]) : Promise<number[]>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const evenNumber = arr.filter(n => n%2===0);
            resolve(evenNumber);
        },1000);
    });
}
readArr([1,2,3,4,5,6]).then((mess)=>{
    console.log(mess);
})
