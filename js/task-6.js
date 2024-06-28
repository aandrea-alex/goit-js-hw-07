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
  inputNumber: document.querySelector('input[type="number"]'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  boxesContainer: document.getElementById('boxes'),
};


refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);
refs.inputNumber.addEventListener('input', onInputNumberInput);

setBtnsDisabled();

function onInputNumberInput() {
  setBtnsDisabled();
}


function onCreateButtonClick() {
  const amount = Number(refs.inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    refs.boxesContainer.innerHTML = '';
    createBoxesHtml(amount);
    refs.inputNumber.value = '';
  }
  setBtnsDisabled();
}


function onDestroyButtonClick() {
  refs.boxesContainer.innerHTML = '';
  setBtnsDisabled();
}


function createBoxesHtml(amount) {
  const baseSize = 30;
  let boxesMarkup = '';
  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = boxesMarkup; 
}


function setBtnsDisabled() {
  if (refs.boxesContainer.innerHTML === '') {
    refs.destroyButton.disabled = true;
  } else {
    refs.destroyButton.disabled = false;
  }
  const amount = Number(refs.inputNumber.value);

  if (amount && amount >= 1 && amount <= 100) {
    refs.createButton.disabled = false;
  } else {
    refs.createButton.disabled = true;
  }
}
