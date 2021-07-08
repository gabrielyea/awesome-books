class Listeners {
  /**
   * Register object in click event
   *
   * @param {Object} eventSource Is a DOM object that can submit data.
   * @param {options} options Is an object: {callback:funName, param:any}.
   */
  onClickEvent = (eventSource, options) => {
    eventSource.addEventListener('click', () => {
      options.callback(options.param);
    });
  }

  /**
   * Register objects in submit event
   *
   * @param {Object} eventSource Is a DOM object that can submit data.
   * @param {options} options Is an object: {callback:funName, param:any}.
   */
  onSubmitEvent = (eventSource, ...options) => {
    eventSource.addEventListener('submit', (e) => {
      options.forEach((option) => {
        option.callback(option.param);
      });
      e.preventDefault();
    });
  }
}

const listener = new Listeners();
export { listener as default };
