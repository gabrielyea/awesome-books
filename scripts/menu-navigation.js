import listeners from './listeners.js';

export default class MenuNavigation {
  toAllBooks = document.querySelector('#test');

  allBooks = document.querySelector('.books-container');

  linksDic = {}

  init = () => {
    this.populateDict();
    listeners.onClickEvent(this.toAllBooks,
      { callback: this.displayMessage, param: this.linksDic[this.toAllBooks.id] });
  }

  displayMessage = (obj) => {
    console.log(obj);
  }

  populateDict = () => {
    this.linksDic[this.toAllBooks.id] = this.allBooks;
  }
}