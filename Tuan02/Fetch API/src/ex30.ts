async function handleMultipleAPIs() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/invalid-url", 
  ];

  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1} Success:`, result.value);
    } else {
      console.error(`API ${index + 1} Failed:`, result.reason);
    }
  });
}

handleMultipleAPIs();
