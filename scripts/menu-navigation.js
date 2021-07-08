import listeners from './listeners.js';

export default class MenuNavigation {
  navigationLinks = document.querySelector('.nav-links-container').getElementsByTagName('li');

  navigationTargets = [document.querySelector('.books-container'),
    document.querySelector('.input-container'),
    document.querySelector('.contact-information'),
  ]

  linksDic = {}

  init = () => {
    this.populateDict();
    this.assignLinkToTarget();
  }

  displaySection = (section) => {
    this.hideAll();
    section.classList.toggle('hide');
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
        { callback: this.displaySection, param: dictionaryEntry[1].target });
    });
  }

  hideAll = () => {
    this.navigationTargets.forEach((target) => {
      target.classList.add('hide');
    });
  }
}
