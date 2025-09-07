export function runEx15(): void{
  function delayS(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function task1(): Promise<string> {
  await delayS(100);
  return "Task 1 completed";
}

async function task2(): Promise<string> {
  await delayS(100);
  return "Task 2 completed";
}

async function task3(): Promise<string> {
  await delayS(100);
  return "Task 3 completed";
}

async function runSequentialTasks(): Promise<void> {
  const result1 = await task1();
  console.log(result1);

  const result2 = await task2();
  console.log(result2);

  const result3 = await task3();
  console.log(result3);
}

runSequentialTasks();  
}