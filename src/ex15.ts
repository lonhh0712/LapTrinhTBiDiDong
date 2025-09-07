export function runEx15(): void {
  class Book { constructor(public title: string, public author: string){} }
  class User { constructor(public name: string){} }
  class Library {
    private books: Book[] = []; private users: User[] = [];
    addBook(b: Book){ this.books.push(b); }
    addUser(u: User){ this.users.push(u); }
    listBooks(){ console.log("Books:", this.books); }
  }
  const lib = new Library();
  lib.addBook(new Book("TS Cơ bản", "Trần Ban"));
  lib.addUser(new User("Hồ Việt"));
  lib.listBooks();
}
