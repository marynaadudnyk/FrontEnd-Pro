//1
let a = 4;
let b = 44;

if (a == b) {
    console.log(`${a} = ${b}`);
} else if (a > b) {
    console.log("`${a} > ${b}`");
} else {
    console.log(`${a} < ${b}`);
}

//2
let kilometr = parseInt(prompt(`введите число`));
let foot = parseInt(prompt(`введите еще одно число`));

let state_1 = kilometr * 1000;
let state_2 = foot * 0.305;

if (state_1 > state_2) {
    console.log(`первое растояние больше второго`);
} else {
    console.log(`второе растояние больше первого`)
}

//3
a = 120;
b = 60;

 if (b % a === 0) {
    console.log(`число ${a} есть делителем числа ${b}`);
 } if (a > b) {
     if (a % b === 0) {
         console.log(`число ${b} есть делителем числа ${a}`);
     } else {
         console.log(`число ${b} не есть делителем числа ${a}`)
     }
 } ;

//4
let number = parseInt(prompt(`введите число`));
let number_new = number % 10;

if (number_new % 2 === 0) {
    console.log(`${number_new} парное число`);
} else {
    console.log(`${number_new} не парное число`);
}

//5
number = 34;
number_1 = console.log(parseInt(number / 10));
number_2 = console.log(number % 10);

if (number_1 > number_2) {
    console.log(`первое значение больше второго`);
} else console.log(`второе значение больше первого`);

//6
let threeDigitNumber = parseInt(prompt(`введите трехзначное число`));
let threeDigitNumber_1 = (parseInt((threeDigitNumber / 100) % 10));
let threeDigitNumber_2 = (parseInt((threeDigitNumber / 10) % 10));
let threeDigitNumber_3 = (parseInt(threeDigitNumber % 10));

if ((threeDigitNumber_1 + threeDigitNumber_2 + threeDigitNumber_3) % 2 === 0) {
    console.log(`сумма чилел ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} есть парной`);
} else {
    console.log(`сумма чилел ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} не есть парной`);
}

if ((threeDigitNumber_1 + threeDigitNumber_2 + threeDigitNumber_3) % 5 === 0) {
    console.log(`сумма чилел ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} кратна 5`);
} else {
    console.log(`сумма чилел ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} не кратна 5`);
}

if ((threeDigitNumber_1 * threeDigitNumber_2 * threeDigitNumber_3) > 100) {
    console.log(`произведение цифр ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} больше 100`);
} else {
    console.log(`произведение цифр ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} меньше 100`);
}

if (threeDigitNumber_1 == threeDigitNumber_2 && threeDigitNumber_2 == threeDigitNumber_3) {
    console.log(`цифры ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} одинаковые`);
} else {
    console.log(`цифры ${threeDigitNumber_1} ${threeDigitNumber_2} ${threeDigitNumber_3} разные`);
}

if (threeDigitNumber_1 == threeDigitNumber_2) {
    console.log(`цифры ${threeDigitNumber_1} ${threeDigitNumber_2} одинаковые`);
} else if(threeDigitNumber_1 == threeDigitNumber_3) {
    console.log(`цифры ${threeDigitNumber_1} ${threeDigitNumber_3} ${threeDigitNumber_3} одинаковые`);
} else if (threeDigitNumber_2 == threeDigitNumber_3) {
    console.log(`цифры ${threeDigitNumber_1} ${threeDigitNumber_3} ${threeDigitNumber_3} одинаковые`);
} else {
    console.log(`все цмфры разные`);
}

//7
let numberMirror = 123321;

let numberMirror_1 = (parseInt((numberMirror / 100000) % 10));
let numberMirror_2 = (parseInt((numberMirror / 10000) % 10));
let numberMirror_3 = (parseInt((numberMirror / 1000) % 10))
let numberMirror_4 = (parseInt((numberMirror / 100) % 10))
let numberMirror_5 = (parseInt((numberMirror / 10) % 10));
let numberMirror_6 = (parseInt(numberMirror % 10));

if (numberMirror_1 === numberMirror_6 && numberMirror_2 === numberMirror_5 && numberMirror_3 === numberMirror_4) {
    console.log(`число зеркальное`);
} else {
    console.log(`число не зеркальное`);
}



