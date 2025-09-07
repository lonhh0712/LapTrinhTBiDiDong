async function queueProcess() {
  const ids = [1, 2, 3, 4, 5];
  for (const id of ids) {
    const result = await fakeAsyncTask(id); // reusing fakeAsyncTask from above
    console.log("Sequential:", result);
  }
}

queueProcess();
