import bookList from './book-list.js';

class LocalStorage {
  saveBookData = (bookList) => {
    window.localStorage.clear();
    window.localStorage.setItem('bookList', JSON.stringify(bookList));
  };

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

const storage = new LocalStorage();
export { storage as default };
