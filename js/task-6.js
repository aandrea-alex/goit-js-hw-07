'use strict';
/* Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція.
Натисненням на кнопку Очистити, колекція елементів очищається.
 <div id="controls">
    <input type="number" min="1" max="100" step="1" id="input-number" />
    <button type="button" data-create>Create</button>
    <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору. */

import getRandomHexColor from './getRandomHexColor.js';

const refs = {
  inputNumber:  document.querySelector('input[type="number"]'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  boxesContainer: document.getElementById('boxes'),
};

refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);

function createBoxes(amount) {
  const baseSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const divRef = document.createElement('div');
    divRef.style.width = `${size}px`;
    divRef.style.height = `${size}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divRef);
  }
  console.log(fragment);
  refs.boxesContainer.appendChild(fragment);
}

function onCreateButtonClick() {
  const amount = Number(refs.inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    refs.boxesContainer.innerHTML = '';
    // createBoxes(amount);
    createBoxesHtml(amount);
    refs.inputNumber.value = '';
  }
}

function onDestroyButtonClick() {
  refs.boxesContainer.innerHTML = '';
}



function createBoxesHtml(amount) {
  const baseSize = 30;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }

  // Вставляем разметку в контейнер
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = boxesMarkup;
}