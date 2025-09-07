
export function runEx17(): void{
function simulateTaskk(id: number, delayMs: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Task ${id} completed after ${delayMs}ms`);
    }, delayMs);
  });
}

async function runTasksSequentially(): Promise<void> {
  const taskPromises: Promise<string>[] = [
    simulateTaskk(1, 100),
    simulateTaskk(2, 150),
    simulateTaskk(3, 500)
  ];

  for await (const result of taskPromises) {
    console.log(result);
  }
}

runTasksSequentially();    
}