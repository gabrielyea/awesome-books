import bookList from './book-list.js';
import storage from './localStorage.js';

// Utility class, Manages DOM elements, displays the books, adds functionality to buttons.
export default class BookUtilities {
  // ------DOM references------
  bookTemplate = document.getElementById('book-template');

  templateTarget = document.querySelector('.book-list');
  // ---------------------------

  /**
 * Creates an id for the book.
 * Adds the book to the bookList.
 * Saves the data on localStorage.
 *
 * @param {Book} book an object type of Book, destructured.
 */
  saveBook = ({ title, author }) => {
    const id = bookList.getList.length;
    bookList.addBookToList({ id, title, author });
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
    clone.querySelector('.book-title').innerText = title;
    clone.querySelector('.book-author').innerText = author;
    clone.querySelector('.book-remove-btn').addEventListener('click', () => {
      this.removeBook(id);
    });
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

  // TODO:
  // Maby create a custom event: OnListChange to manage all functions that get called
  // every time the list is modified, it will decouple the code more.
}
