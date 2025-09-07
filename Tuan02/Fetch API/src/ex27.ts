async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn(`Attempt ${attempt + 1} failed. Retrying...`);
      if (attempt === retries - 1) throw error;
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Final error:", err));
