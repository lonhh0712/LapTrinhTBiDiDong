
export function runEx16(): void{
function delayA(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function task4(): Promise<string> {
  await delayA(100);
  return "Task 1 completed";
}

async function task5(): Promise<string> {
  await delayA(100);
  return "Task 2 completed";
}

async function task6(): Promise<string> {
  await delayA(100);
  return "Task 3 completed";
}

async function runParallelTasks(): Promise<void> {
  const results = await Promise.all([task4(), task5(), task6()]);
  results.forEach(result => console.log(result));
}

runParallelTasks();    
}