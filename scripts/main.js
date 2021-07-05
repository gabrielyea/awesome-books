import Book from './book.js';
import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

form.addEventListener('submit', (source) => {
  bookUtilities.saveBook(new Book(null, form.title.value, form.author.value));
  bookUtilities.displayAllBooks();
  source.preventDefault();
});

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
});
