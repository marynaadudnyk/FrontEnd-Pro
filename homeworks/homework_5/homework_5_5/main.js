let i;
let start = 1;
let number = parseInt(prompt(`Введіть число`));

for (i = start; i <= number; i++) {
    if (number === 3 * i) {
        console.log(`Число ${number} отримано шляхом возведення числа 3 в ступінь ${i}`);
    } else {
        console.log(`Число ${number} не можливо отримати шляхом возведення числа 3 в дюбу ступінь`);
    }
}