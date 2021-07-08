import listeners from './listeners.js';

export default class MenuNavigation {
  toAllBooks = document.querySelector('#nav-1');

  navigationLinks = document.querySelector('.nav-links-container').getElementsByTagName('li');

  navigationTargets = [document.querySelector('.books-container'),
    document.querySelector('.input-container'),
    document.querySelector('.contact-information'),
  ]

  linksDic = {}

  init = () => {
    this.populateDict();
    this.assignLinkToTarget();
    // listeners.onClickEvent(this.toAllBooks,
    //   { callback: this.displayMessage, param: this.linksDic[this.toAllBooks.id] });
  }

  displayMessage = (obj) => {
    console.log(obj);
  }

  populateDict = () => {
    Object.entries(this.navigationLinks).forEach((element) => {
      this.linksDic[element[1].id] = {
        link: element[1],
        target: this.navigationTargets[element[0]],
      };
    });
  }

  assignLinkToTarget = () => {
    Object.entries(this.linksDic).forEach((dictionaryEntry) => {
      listeners.onClickEvent(dictionaryEntry[1].link,
        { callback: this.displayMessage, param: dictionaryEntry[1].target });
    });
  }
}
