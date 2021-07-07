import bookList from './book-list.js';
import listeners from './listeners.js';
import storage from './localStorage.js';
import Book from './book.js';

// Utility class, Manages DOM elements, displays the books, adds functionality to buttons.
export default class BookUtilities {
  // ------DOM references------
  bookTemplate = document.getElementById('book-template');

  templateTarget = document.querySelector('.book-list');

  form = document.querySelector('form');

  // ---------------------------

  /**
 * Adds the book to the bookList.
 * Saves the data on localStorage.
 */
  saveBook = () => {
    bookList.addBookToList(this.getBookData());
    storage.saveBookData(bookList.getList);
  }

  /**
 * Removes book from list by id.
 * Displays the updated list
 * Saves the data on localStorage.
 *
 * @param {number} id The id of the selected book.
 */
  removeBook = (id) => {
    bookList.removeBookFromList(id);
    this.displayAllBooks();
    storage.saveBookData(bookList.getList);
  }

  /**
 * Creates a clone based on the DOM template.
 * Fills the properties with data from book object.
 *
 * @param {Book} book an empty object type of Book, destructured.
 * @return {Book} a book object with properties filled.
 */
  createBookElement = ({ id, title, author }) => {
    const clone = this.bookTemplate.content.firstElementChild.cloneNode(true);
    const btn = clone.querySelector('.book-remove-btn');
    clone.querySelector('.book-desc').innerText = `${title} by, ${author}`;
    listeners.onClickEvent(btn, { callback: this.removeBook, param: id });
    return clone;
  }

  // Appends all the books in the ul templateTarget.
  displayAllBooks = () => {
    this.clearBookList();
    bookList.getList.forEach((book) => {
      this.templateTarget.appendChild(this.createBookElement(book));
    });
  }

  // Gets called in displayAllBooks and removeBooks, clears the book list.
  clearBookList = () => {
    while (this.templateTarget.lastChild) {
      this.templateTarget.removeChild(this.templateTarget.lastChild);
    }
  }

  /**
 * Returns a book filled with data.
 * @return {Book} a book object with properties filled.
 */
  getBookData = () => {
    const book = new Book(bookList.getList.length, this.form.title.value, this.form.author.value);
    return book;
  }
}
