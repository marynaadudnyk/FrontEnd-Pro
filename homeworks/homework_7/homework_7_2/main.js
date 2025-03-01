let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sum = 0;
let count = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let countLess = 0;
let countOdd = 0;
let sumOdd = 0;
let countEven = 0;
let sumEven = 0;
let number = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum = sum + arr[i];
        count++;
    }

    if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }

    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }

    if (arr[i] < 0) {
        countLess++;
    }

    if (arr[i] % 2 != 0) {
        countOdd++;
        sumOdd = sumOdd + arr[i];
    }

    if (arr[i] % 2 === 0) {
        countEven++;
        sumEven = sumEven + arr[i];
    }

    if (arr[i] > 0) {
        number = number * arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
        arr[i] = 0;
    }
}

console.log(`Sum of positive numbers:, ${sum}`);
console.log(`Count of positive numbers: ${count}`);
console.log(`Min number: ${min} and it index ${minIndex}`);
console.log(`Max number: ${max} and it index ${maxIndex}`);
console.log(`Count of odd elements: ${countLess}`);
console.log(`Count of odd elements: ${countOdd}`);
console.log(`Count of even elements: ${countEven}`);
console.log(`Sum of odd elements: ${sumOdd}`);
console.log(`Sum of even elements: ${sumEven}`);
console.log(`Product of all positive elements: ${number}`);
console.log(`Product of all positive elements: ${arr}`);

