let number = parseInt(prompt(`enter a three-digit number`));

console.log(number);

let numbe_1 = (parseInt((number / 100) % 10));
let numbe_2 = (parseInt((number / 10) % 10));
let numbe_3 = (parseInt(number % 10));

console.log(numbe_1);
console.log(numbe_2);
console.log(numbe_3);

if (numbe_1 === numbe_2 && numbe_2 === numbe_3) {
    console.log(`all numbers are seme`);
} else if (numbe_1 === numbe_2) {
    console.log(`The number ${numbe_1} is equal to ${numbe_2}`);
} else if (numbe_1 === numbe_3) {
    console.log(`The number ${numbe_1} is equal to ${numbe_3}`);
} else if (numbe_2 === numbe_3){
    console.log(`The number ${numbe_2} is equal to ${numbe_3}`);
} else {
    console.log(`all numbers are different`);
}
