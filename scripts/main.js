import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';
import listeners from './listeners.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

listeners.onSubmitEvent(form,
  { callback: bookUtilities.saveBook },
  { callback: bookUtilities.displayAllBooks });

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
});
