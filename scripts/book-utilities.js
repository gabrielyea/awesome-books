import bookList from './book-list.js';
import listeners from './listeners.js';
import storage from './localStorage.js';
import Book from './book.js';

export default class BookUtilities {
  bookTemplate = document.getElementById('book-template');

  templateTarget = document.querySelector('.book-list');

  form = document.querySelector('form');

  saveBook = () => {
    bookList.addBookToList(this.getBookData());
    storage.saveBookData(bookList.getList);
  }

  removeBook = (id) => {
    bookList.removeBookFromList(id);
    this.displayAllBooks();
    storage.saveBookData(bookList.getList);
  }

  createBookElement = ({ id, title, author }) => {
    const clone = this.bookTemplate.content.firstElementChild.cloneNode(true);
    const btn = clone.querySelector('.book-remove-btn');
    clone.querySelector('.book-desc').innerText = `${title} by, ${author}`;
    listeners.onClickEvent(btn, { callback: this.removeBook, param: id });
    return clone;
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

  getBookData = () => {
    const book = new Book(bookList.getList.length, this.form.title.value, this.form.author.value);
    return book;
  }

  clearBookData = () => {
    const inputs = this.form.getElementsByClassName('input');
    Object.entries(inputs).forEach((inp) => {
      inp[1].value = '';
    });
  }
}
