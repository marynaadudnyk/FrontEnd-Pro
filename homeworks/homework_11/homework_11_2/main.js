// Є блок із текстом на сторінці та кнопка.При натисканні на кнопку текст змінює колір.При повторному натисканні – повертається попередній колір

const textElement = document.getElementsByClassName('text-holder');
const buttonElement = document.getElementsByClassName('btn');

document.querySelector('.btn').addEventListener("click", function () {
    document.querySelector('.text-holder').classList.toggle("red");
});

document.querySelector