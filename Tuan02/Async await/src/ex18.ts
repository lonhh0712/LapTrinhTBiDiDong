
export function runEx18(): void{
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`
      });
    }, 100); 
  });
}

fetchUser(1).then(user => console.log(" Fetched user:", user));   
}