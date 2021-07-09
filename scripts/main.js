import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';
import listeners from './listeners.js';
import MenuNavigation from './menu-navigation.js';
import DateTime from './libraries/luxon.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

const navigation = new MenuNavigation();

const dateTime = DateTime;

navigation.init();

const setTime = () => {
  const dt = dateTime.now();
  const timeContainer = document.querySelector('.time-display');
  timeContainer.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
};

listeners.onSubmitEvent(form,
  { callback: bookUtilities.saveBook },
  { callback: bookUtilities.displayAllBooks });

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
  setTime();
});
