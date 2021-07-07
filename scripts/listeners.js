class Listeners {
  // TODO: I can probably generate the events dynamically,
  // only need the event name, the structure will be the same.
  // try that later!!
  // there is probably something like delegates or actions or C# like events <- listener structure

  /**
   * Register click event with optional parameters.
   * The event will launch the callbacks in the options arguments.
   * @param {Object} eventSource Is a DOM object that can submit data.
   * @param {options} options Is an object, {options:callback, options:param}.
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
   * @param {options} options Is an object, {options:callback, options:param}.
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
