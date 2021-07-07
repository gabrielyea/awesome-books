import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';
import listeners from './listeners.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

listeners.onSubmitEvent(form,
  { callback: bookUtilities.saveBook },
  { callback: bookUtilities.displayAllBooks });

// form.addEventListener('submit', (source) => {
//   bookUtilities.saveBook(new Book(null, form.title.value, form.author.value));
//   bookUtilities.displayAllBooks();
//   source.preventDefault();
// });

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
});
