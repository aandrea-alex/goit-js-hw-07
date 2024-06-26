'use strict';

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних.
//  HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в <li>. Для створення розмітки використовуй шаблонні рядки
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const galleryRef = document.querySelector(".gallery");

// Function for create of markup (string) for 1 item (li) with img
const imageMarkup = (image) => {
  return `<li class="gallery-item"><img class="gallery-img" src="${image.url}" alt="${image.alt}" width="360" ></li>`;
};

// Create of markup (string) for all items
const imagesMarkup = images.map(imageMarkup).join("");
console.log(imagesMarkup);

// Insert in DOM
galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);
