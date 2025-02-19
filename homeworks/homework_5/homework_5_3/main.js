let i;
let start = 1;
let end = 100;
number = parseInt(prompt(`Введіть число`));

for (i = start; i <= end; i++) {
    if (number >= i * i ) {
        console.log(`квадрат числа ${i} перевищує число ${number}`);
    }
}