
let length = parseInt(prompt(`Enter the count of numbers:`));
let arr = [];
let number;
let i;

for (i = 0; i < length; i++) {
    number = parseInt(prompt(`Enter the  number: ${i + 1}:`));
    arr.push(number);
}
console.log(`New arr ${arr}`);

arr.sort((a, b) => a - b);
console.log(arr);

arr.splice(1, 3);
console.log(arr);


