const form = document.querySelector('form');

form.addEventListener('submit', (source) => {
  console.log(source);
  source.preventDefault();
});