let i;
let sum = 0;
let number = parseInt(prompt(`Введіть число`));

if (number >= 1) {
    for (i = 1; i <= number; i++) {
        sum = sum + 1;
    }

    if (sum === 2) {
        console.log(`${number} - просте число`);
    } else {
        console.log(`${number} - не просте число`);
    }
} else {
    console.log(`${number} - не просте число`);
}