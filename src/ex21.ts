export function runEx21(): void {
  class Repository<T>{
    private items: T[] = [];
    add(item: T){ this.items.push(item); }
    getAll(): T[]{ return [...this.items]; }
  }
  const repo = new Repository<string>(); repo.add("one"); repo.add("two"); console.log(repo.getAll());
}
