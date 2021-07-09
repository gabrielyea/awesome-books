import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';
import listeners from './listeners.js';
import MenuNavigation from './menu-navigation.js';
import DateTime from './libraries/luxon.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

const navigation = new MenuNavigation();

navigation.init();

const dateTime = () => {
  const dt = DateTime.now();
  const dateTime = document.querySelector('.time-display');
  dateTime.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
};

listeners.onSubmitEvent(form,
  { callback: bookUtilities.saveBook },
  { callback: bookUtilities.displayAllBooks });

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
  dateTime();
});
