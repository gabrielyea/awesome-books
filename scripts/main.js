import BookUtilities from './book-utilities.js';
import storage from './localStorage.js';
import listeners from './listeners.js';
import MenuNavigation from './menu-navigation.js';

const form = document.querySelector('form');

const bookUtilities = new BookUtilities();

const navigation = new MenuNavigation();

navigation.init();

listeners.onSubmitEvent(form,
  { callback: bookUtilities.saveBook },
  { callback: bookUtilities.displayAllBooks });

window.addEventListener('load', () => {
  storage.loadInputData();
  bookUtilities.displayAllBooks();
});
