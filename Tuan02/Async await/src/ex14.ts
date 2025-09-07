export function runEx14(): void{
  function delayT(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function tripleAfterDelay(num: number): Promise<number> {
  await delayT(100); 
  return num * 3;
}

tripleAfterDelay(5).then(result => console.log("Kết quả:", result));  
}

