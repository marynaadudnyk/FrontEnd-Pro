//2
let i;
let j;
let start = 10;
let end = 20;
let number;

for (i = start; i <= end; i++) {
    console.log(`Завдання 2: ${i} * ${i} = ` +  i * i + `,`);
}

//3
number = 7;

for (i = start; i <= end; i++) {
    console.log(`Завдання 3: ${i} * 7 = ` + i * 7);
}

//4
start = 1;
end = 15;
number = 0;

for (i = start; i <= end; i++) {
    number = number + i;
}
console.log(`Завдання 4: ${number}`);

//5
start = 15;
end = 35;
number = 1;

for (i = start; i <= end; i++) {
    number = number * i;
}
console.log(`Завдання 5: ${number}`);

//6
start = 1;
end = 500;
number = 1;

for (i = start; i <= end; i++) {
    number = (number + i);
}
number = number / 500;
console.log(`Завдання 6: ${number}`);

//7
start = 30;
end = 80;
number = 1;

for (i = start; i <= end; i++) {
    if (i % 2 === 0) {
        number = number + i;
    }
}
console.log(`Завдання 7: ${number}`);

//8
start = 100;
end = 200;
number = 1;

for (i = start; i <= end; i++) {
    if (i % 3 === 0) {
        console.log(`Завдання 8: числа в діапазоні від 100 до 200, кратне 3 - ` + i + `,`);
    }
}

//9
start = 1;
end;
evenSum = 0;
evenCount = 0;

do {
    number = parseInt(prompt(`Введіть цифру бшльше 0`));
} while (number <= 0);

for (i = start; i <= number; i++) {
    if (number % i === 0) {
        console.log(`Завдання 9: дільник числа ${number} є ${i}`);

        if(i % 2 === 0) {
            evenSum = evenSum + i;
            console.log(`Завдання 9: числo ${i} є парним дільником числа ${i}`);
            evenCount = evenCount + 1;
        }
    }
}
console.log(`Завдання 9: число ${evenSum} є суммою парних дільників числа ${number}`);
console.log(`Завдання 9: число ${evenCount} є кількысть парних дільників числа ${number}`);


//10
start = 1;
end = 10;

for (let i = start; i <= end; i++) {
    console.log(`Таблиця множення: множення на ${i}`);

    for (let j = start; j <= end; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

