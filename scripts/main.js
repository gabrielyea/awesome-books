import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';
import listeners from './listeners.js';
import MenuNavigation from './menu-navigation.js';
import luxon from './libraries/luxon.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

const navigation = new MenuNavigation();

const dateTime = luxon;

navigation.init();

const setTime = () => {
  const dt = dateTime.now();
  const timeContainer = document.querySelector('.time-display');
  timeContainer.textContent = dt.toLocaleString(dateTime.DATETIME_MED);
};

listeners.onSubmitEvent(form,
  { callback: bookUtilities.saveBook },
  { callback: bookUtilities.displayAllBooks },
  { callback: bookUtilities.clearBookData });

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
  setTime();
});

document.querySelector('.test').addEventListener('click', () => {
  document.querySelector('.scroll').scroll({ top: 0, behavior: 'smooth' });
});
