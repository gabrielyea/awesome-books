import listeners from './listeners.js';

// Class that handles menu navigation.
export default class MenuNavigation {
  navigationLinks = document.querySelector('.nav-links-container').getElementsByTagName('li');

  // Manually assigns the sections, could be done automatically if a naming patern is defined.
  navigationTargets = [document.querySelector('.books-container'),
    document.querySelector('.input-container'),
    document.querySelector('.contact-information'),
  ]

  // Dictionary to store reference between links and sections
  linksDic = {}

  /**
   * Main function to be called from this class.
   * Populates the dictionary with availible entries.
   * Assigns each link to its target.
   */
  init = () => {
    this.populateDict(this.navigationLinks, this.navigationTargets);
    this.assignLinkToTarget(this.linksDic);
  }

  /**
   * Internal function, only to be used in MenuNavigation class.
   * Toggles visibility of section object.
   * @param {Object} section Is a DOM object representing a html section.
   */
  displaySection = (section) => {
    this.hideAll();
    section.classList.toggle('hide');
  }

  /**
   * Internal function, only to be used in MenuNavigation class.
   * Populates a dictionary with this structure: {id: {link, target}}
   * @param {Array} navLinks Its a collection of li elements.
   * @param {Array} navTargets Its a collection of manually added sections.
   */
  populateDict = (navLinks, navTargets) => {
    // For each navigation link it will create one entry in the dictionary.
    Object.entries(navLinks).forEach((element) => {
      this.linksDic[element[1].id] = {
        // element[1] will be the link
        link: element[1],
        // here I take advantage of element[0] that stores the index ot the entries.
        target: navTargets[element[0]],
      };
    });
  }

  /**
   * Internal function, only to be used in MenuNavigation class.
   * Dinamically assigns links to targets.
   *  @param {Object} linkDictionary A dictionary: {id: {link:object, target:object}}.
   */
  assignLinkToTarget = (linkDictionary) => {
    // For each dictionary entry it will register a click event and assign a callback function
    Object.entries(linkDictionary).forEach((dictionaryEntry) => {
      // I use onClickEvent that is capable of adding callbacks to the events with parameters.
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
