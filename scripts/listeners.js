class Listeners {
  onClickEvent = (eventSource, options) => {
    eventSource.addEventListener('click', () => {
      options.callback(options.param);
    });
  }

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
