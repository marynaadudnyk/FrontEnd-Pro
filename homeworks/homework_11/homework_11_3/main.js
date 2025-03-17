// Покласти в папку будь - які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.Вивести зображення, отримане випадковим чином(Math.random)
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

document.querySelector('.btn').addEventListener('click', () => {
    const img = document.createElement('img');
    const imgRandom = Math.floor(Math.random() * images.length);
    img.src = `images/${imgRandom}.jpg`;
    document.querySelector('.image-holder').appendChild(img);
});







