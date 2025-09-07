async function fakeAsyncTask(id: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Task ${id} done`), 1000);
  });
}

async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map(id => fakeAsyncTask(id));
  const results = await Promise.all(tasks);
  console.log("Batch Results:", results);
}

batchProcess();
