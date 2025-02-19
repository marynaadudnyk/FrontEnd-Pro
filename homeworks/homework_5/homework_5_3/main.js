let dateBirth = parseInt(prompt(`Год твоего рождения?`));

let city = prompt(`В каком городе ты живешь?`);

let age = (2025 - dateBirth);

if (city == `Киев`){
    city = `ты жтвешь в городе ${city} столице Украины`;
} else if (city == `Лондон`) {
    city = `ты жтвешь в городе ${city} столице Англии`;
} else if (city == `Вашингтон`) {
    city = `ты живешь в городе ${city} столице Америки`;
} else {
    city = `ты живешь в городе ${city}`;
}

alert(`тебе ${age} лет и ${city}`);

let sport = prompt("Твой любимый вид спорта?");
let message = "Круто";

if (sport === "Футбол") {
    alert(`${message}! Хочешь стать футболистом`);
} else if (sport === "Теннис") {
    alert(`${message}! Хочешь стать теннисистом`);
} else if (sport === "Бейсбол") {
    alert(`${message}! Хочешь стать бейсболистом`);
} else {
    alert(`Интеремній вібор, удачи тебе в єтом спорте`);
}

