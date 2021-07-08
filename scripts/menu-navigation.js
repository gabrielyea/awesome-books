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

  /**
   * Toggles visibility of section object.
   *
   * @param {Object} section Is a DOM object representing a html section.
   */
  displaySection = (section) => {
    this.hideAll();
    section.classList.toggle('hide');
  }

  /**
   * Populates a dictionary with this structure: {id: {link, target}}
   *
   * @param {Array} navLinks Its a collection of li elements.
   * @param {Array} navTargets Its a collection of manually added sections.
   */
  populateDictionary = (navLinks, navTargets) => {
    Object.entries(navLinks).forEach((element) => {
      this.linksDictionary[element[1].id] = {
        link: element[1],
        target: navTargets[element[0]],
      };
    });
  }

  /**
   * Registers all links in dictionary to click event with callback function.
   *
   *  @param {Object} linkDictionary A dictionary: {id: {link:object, target:object}}.
   */
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
