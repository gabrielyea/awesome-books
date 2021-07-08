class Listeners {
  // TODO: I can probably generate the events dynamically,
  // only need the event name, the structure will be the same.
  // try that later!!
  // there is probably something like delegates or actions or C# like events <- listener structure
  // Also try to copy the action.onAction += myFunc pattern, maybe is possible to stack up
  // function calls on one event (Asynchronous).
  // And also check if there is something like c++ operator overload on js.*
  // No operator overload on js :C *

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
