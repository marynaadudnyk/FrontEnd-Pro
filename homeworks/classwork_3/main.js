// Creating array of products, where is product is an object
const products = [
    { name: 'iPhone', price: 1500, description: 'Lorem ipsum ....', accum: 5000 },
    { name: 'Galaxy', price: 1700, description: 'Lorem ipsum ....', accum: 5000 },
    { name: 'Huawei', price: 700, description: 'Lorem ipsum ....', accum: 5000 },
    { name: 'LG', price: 500, description: 'Lorem ipsum ....', accum: 5000 },
    { name: 'Nokia', price: 100, description: 'Lorem ipsum ....', accum: 5000 },
];


// Show products
for (let i = 0; i < products.length; i++) {
    console.log(`Product #${i + 1}: ${products[i].name} | $${products[i].price}`)
}


// Get from user the number of product he wants to buy
let productNumber;

do {
    productNumber = parseInt(prompt('Enter number of product:'));
} while (productNumber < 0 || productNumber > products.length || isNaN(productNumber));


// Get from user the amount of products he wants to buy
let productAmount;

do {
    productAmount = parseInt(prompt('Enter amount of products:'));
} while (productAmount < 0 || productAmount > 10 || isNaN(productAmount));

productNumber--; // decreasing productNumber by 1, because numbers starts from 1, but indexes - from 0.

// identify the product object from the products array
const selectedProduct = products[productNumber];

// calculating final price using the product price and amount of products user entered
const finalPrice = selectedProduct.price * productAmount;


console.log(`Congrats! Your order is finished. Final price is: $${finalPrice}`);