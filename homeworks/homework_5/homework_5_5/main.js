let i;
let start = 1;
let isOk = false;
let number = parseInt(prompt(`Введіть число`));

for (i = start; i <= number; i++) {
    if (number === 3 ** i) {
        isOk = true;
        console.log(`Число ${number} отримано шляхом возведення числа 3 в ступінь ${i}`);
    }
}

if (!isOk) {
    console.log(`Число ${number} не може бути отримано шляхом возведення числа 3 в будь яку ступінь`);
}


