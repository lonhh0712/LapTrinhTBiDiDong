
export function runEx19(): void{
    interface User {
  id: number;
  name: string;
}

async function fetchUserr(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`
      });
    }, 100); 
  });
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  const userPromises = ids.map(id => fetchUserr(id));
  const users = await Promise.all(userPromises); 
  return users;
}

fetchUsers([1, 2, 3]).then(users => console.log(" Users fetched:", users));
}