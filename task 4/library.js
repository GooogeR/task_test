class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isAvailable = true;
    }
  }
  
  class Library {
    constructor() {
      this.books = []; 
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    borrowBook(isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (book) {
        if (book.isAvailable) {
          book.isAvailable = false;
          console.log(`Книга "${book.title}" взята.`);
        } else {
          console.log(`Книга "${book.title}" уже занята.`);
        }
      } else {
        console.log("Книга не найдена.");
      }
    }
  
    returnBook(isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (book) {
        if (!book.isAvailable) {
          book.isAvailable = true;
          console.log(`Книга "${book.title}" возвращена.`);
        } else {
          console.log(`Книга "${book.title}" уже доступна.`);
        }
      } else {
        console.log("Книга не найдена.");
      }
    }
  
    listAvailableBooks() {
      const availableBooks = this.books.filter(b => b.isAvailable);
      if (availableBooks.length > 0) {
        console.log("Доступные книги:");
        availableBooks.forEach(book => {
          console.log(`- ${book.title} (Автор: ${book.author}, ISBN: ${book.isbn})`);
        });
      } else {
        console.log("Нет доступных книг.");
      }
    }
  }
  
  const library = new Library();
  const book1 = new Book("1984", "Джордж Оруэлл", "1234567890");
  const book2 = new Book("Мастер и Маргарита", "Михаил Булгаков", "0987654321");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.listAvailableBooks();
  library.borrowBook("1234567890");
  library.listAvailableBooks();
  library.returnBook("1234567890");
  library.listAvailableBooks();
  