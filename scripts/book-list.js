/**
 * Wrap class, adds functionality to the array bookList.
 */
class BookList {
  bookList = [];

  /**
 * Adds a book to the book list.
 *
 * @param {Book} book an object type of Book
 */
  addBookToList = (book) => {
    this.bookList = this.bookList.concat(book);
  }

  /**
 * Removes book by id
 *
 * @param {number} id The id of the selected book
 */
  removeBookFromList = (id) => {
    this.bookList = this.bookList.filter((book) => book.id !== id);
  }

  /**
 * Returns the bookList
 *
 * @return {Array} booklist.
 */
  get getList() {
    return this.bookList;
  }

  /**
 * Returns book by id
 *
 * @param {number} id The id of the selected book
 * @return {Book} foundBook.
 */
  getBookById = (id) => {
    const foundBook = this.bookList.find((book) => book.id === id);
    return foundBook;
  }
}

const bookList = new BookList();
export { bookList as default };
