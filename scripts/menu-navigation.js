import listeners from './listeners.js';

export default class MenuNavigation {
  navigationLinks = document.querySelector('.nav-links-container').getElementsByTagName('li');

  navigationTargets = [document.querySelector('.books-container'),
    document.querySelector('.input-container'),
    document.querySelector('.contact-information'),
  ]

  linksDictionary = {}

  init = () => {
    this.populateDictionary(this.navigationLinks, this.navigationTargets);
    this.registerLinksToClickEvent(this.linksDictionary);
  }

  displaySection = (section) => {
    this.hideAll();
    section.classList.toggle('hide');
  }

  populateDictionary = (navLinks, navTargets) => {
    Object.entries(navLinks).forEach((element) => {
      this.linksDictionary[element[1].id] = {
        link: element[1],
        target: navTargets[element[0]],
      };
    });
  }

  registerLinksToClickEvent = (linkDictionary) => {
    Object.entries(linkDictionary).forEach((dictionaryEntry) => {
      listeners.onClickEvent(dictionaryEntry[1].link,
        { callback: this.displaySection, param: dictionaryEntry[1].target });
    });
  }

  hideAll = () => {
    this.navigationTargets.forEach((target) => {
      target.classList.add('hide');
    });
  }
}
