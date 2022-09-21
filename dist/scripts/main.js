const body = document.querySelector('body');
const id = document.querySelector('.number');
const advice = document.querySelector('.quote');
const getAdvice = document.querySelector('.get-advice');

const url = 'https://api.adviceslip.com/advice';

const getData = async () => {
  const response = await fetch(url, { cache: 'no-cache' });
  const data = await response.json();

  body.classList.add('fetching');

  setTimeout(() => {
    body.classList.remove('fetching');
  }, 1500);

  id.textContent = data.slip.id;
  advice.textContent = data.slip.advice;
};

window.addEventListener('DOMContentLoaded', getData);
getAdvice.addEventListener('click', getData);
