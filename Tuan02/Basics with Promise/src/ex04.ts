const randomNumber = (): Promise<number> =>{
    return new Promise((resolve,reject) =>{
        const success = false;
        if(success){
            resolve(30)
        }else{
            reject("Something went wrong!")
        }
    })
}

randomNumber().then((mess)=>{
    console.log(mess);
}).catch((err)=>{
    console.error("Caught error:",err);
})