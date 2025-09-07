
export function runEx20(): void{
interface User {
  id: number;
  name: string;
}

function fetchUserf(id: number): Promise<User> {
  const delay = Math.random() * 300; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, delay);
  });
}

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(` Request timed out after ${ms}ms`));
    }, ms);
  });
}

async function fetchUserWithTimeout(id: number, timeoutMs = 200): Promise<User> {
  return await Promise.race([
    fetchUserf(id),
    timeout(timeoutMs)
  ]);
}

fetchUserWithTimeout(1)
  .then(user => console.log("User fetched:", user))
  .catch(error => console.error("Error:", error.message));    
}