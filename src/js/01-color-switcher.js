const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let interval = null;

refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stopInterval);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled');

  interval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopInterval() {
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
  clearInterval(interval);
}
