// Є блок із текстом на сторінці та кнопка.При натисканні на кнопку текст змінює колір.При повторному натисканні – повертається попередній колір

document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.text-holder').classList.toggle('red');
});

document.querySelector