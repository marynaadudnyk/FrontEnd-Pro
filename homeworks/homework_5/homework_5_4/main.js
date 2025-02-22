let i;
let number = parseInt(prompt(`Введіть число`));
let sum = true;

for (i = 2; i < number; i++) {
    if (number % i === 0) {
        sum = false;
        break
    }
}

if (sum) {
    console.log(`${number} - просте число`);
} else {
    console.log(`${number} - не просте число`);
}
