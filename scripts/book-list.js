class BookList {
  bookList = [];

  addBookToList = (book) => {
    this.bookList.push(book);
  }

  removeBookFromList = (id) => {
    this.bookList = this.bookList.filter((book) => book.id !== id);
  }

  get getList() {
    return this.bookList;
  }

  getBookById = (id) => {
    const foundBook = this.bookList.find((book) => book.id === id);
    return foundBook;
  }
}

const bookList = new BookList();
export { bookList as default };
