import bookList from './book-list.js';

class LocalStorage {
  saveBookData = (bookList) => {
    localStorage.clear();
    localStorage.setItem('bookList', JSON.stringify(bookList));
  };

  loadInputData = () => {
    if (localStorage.getItem('bookList') !== null) {
      const loadedData = JSON.parse(localStorage.getItem('bookList'));

      loadedData.forEach((book) => {
        bookList.addBookToList(book);
      });
    }
  };
}

const storage = new LocalStorage();
export { storage as default };