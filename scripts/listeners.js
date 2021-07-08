class Listeners {
  /**
   * Register click event with optional parameters.
   * The event will launch the callbacks in the options arguments.
   * @param {Object} eventSource Is a DOM object that can submit data.
   * @param {options} options Is an object, {callback:funName, param:any}.
   */
  onClickEvent = (eventSource, options) => {
    eventSource.addEventListener('click', () => {
      options.callback(options.param);
    });
  }

  /**
   * Register submit events, cabaple of registering multiple functions in submit
   * with optional parameters.
   * The event will launch the callbacks in the options arguments.
   * @param {Object} eventSource Is a DOM object that can submit data.
   * @param {options} options Is an object, {callback:funName, param:any}.
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

// Class instance
const listener = new Listeners();
export { listener as default };
