import bookList from './book-list.js';

// Class that manages load and save events
class LocalStorage {
  // Saves book data, Its called after create or remove book from list.
  saveBookData = (bookList) => {
    window.localStorage.clear();
    window.localStorage.setItem('bookList', JSON.stringify(bookList));
  };

  // Loads the input data, its called on load.
  loadInputData = () => {
    if (localStorage.getItem('bookList') !== null) {
      const loadedData = JSON.parse(window.localStorage.getItem('bookList'));

      // Adds books found in local storage to the book list.
      loadedData.forEach((book) => {
        bookList.addBookToList(book);
      });
    }
  };
}

// Class instance.
const storage = new LocalStorage();
export { storage as default };
