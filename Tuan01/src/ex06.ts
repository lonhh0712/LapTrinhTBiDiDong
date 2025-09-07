export function runEx06(): void {
  class Book {
    constructor(public title: string, public author: string, public year: number) {}
  }
  const b = new Book("Lập trình Java", "Hồ Việt", 2023);
  console.log("Book:", b);
}
