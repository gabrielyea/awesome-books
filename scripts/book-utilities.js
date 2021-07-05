import bookList from './book-list.js';
import storage from './localStorage.js';

export default class BookUtilities {
  bookTemplate = document.getElementById('book-template');

  templateTarget = document.querySelector('.book-list');

  saveBook = ({ title, author }) => {
    const id = bookList.getList.length;
    bookList.addBookToList({ id, title, author });
    storage.saveBookData(bookList.getList);
  }

  // Callback function added in createBookElement to click event
  removeBook = (id) => {
    bookList.removeBookFromList(id);
    this.displayAllBooks();
    storage.saveBookData(bookList.getList);
  }

  createBookElement = ({ id, title, author }) => {
    const clone = this.bookTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('.book-title').innerText = title;
    clone.querySelector('.book-author').innerText = author;
    clone.querySelector('.book-remove-btn').addEventListener('click', () => {
      this.removeBook(id);
    });
    return clone;
  }

  displayBook = () => {

  }

  displayAllBooks = () => {
    this.clearBookList();
    bookList.getList.forEach((book) => {
      this.templateTarget.appendChild(this.createBookElement(book));
    });
  }

  clearBookList = () => {
    while (this.templateTarget.lastChild) {
      this.templateTarget.removeChild(this.templateTarget.lastChild);
    }
  }
}
