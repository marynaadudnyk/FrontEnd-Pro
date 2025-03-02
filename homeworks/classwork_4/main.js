const categories = [
    {
        id: 'phns',
        title: 'Phones',
        products: [
            { id: 1, title: 'iPhone', price: 1000 },
            { id: 2, title: 'Samsung Galaxy S25', price: 1200 },
        ],
    },
    {
        id: 'lapts',
        title: 'Laptops',
        products: [
            { id: 3, title: 'Macbook', price: 2000 },
            { id: 4, title: 'Dell laptop', price: 1500 },
        ],
    },
    {
        id: 'guns123',
        title: 'Guns',
        products: [
            { id: 5, title: 'AR15', price: 1700 },
            { id: 6, title: 'AKM', price: 1000 },
        ],
    },
    {
        id: 'cars333',
        title: 'Cars',
        products: [
            { id: 7, title: 'VW Golf', price: 20000 },
        ],
    },
];

// const categories = {
//   phns: {
//     id: 'phns',
//     title: 'Phones',
//     products: [
//       {id: 1, title: 'iPhone', price: 1000},
//       {id: 2, title: 'Samsung Galaxy S25', price: 1200},
//     ],
//   },
//   lapts: {
//     id: 'lapts',
//     title: 'Laptops',
//     products: [
//       {id: 3, title: 'Macbook', price: 2000},
//       {id: 4, title: 'Dell laptop', price: 1500},
//     ],
//   },
//   guns123: {
//     id: 'guns123',
//     title: 'Guns',
//     products: [
//       {id: 5, title: 'AR15', price: 1700},
//       {id: 6, title: 'AKM', price: 1000},
//     ],
//   },
//   cars333: {
//     id: 'cars333',
//     title: 'Cars',
//     products: [
//       {id: 7, title: 'VW Golf', price: 20000},
//     ],
//   },
// };


const SUM_FOR_DISCOUNT = 10000;
const DISCOUNT = 0.05;

for (let i = 0; i < categories.length; i++) {
    console.log(`Category ${categories[i].id} | ${categories[i].title}`)
}

// for (let key in categories) {
//   console.log(`Category ${categories[key].id} | ${categories[key].title}`)
// }

let selectedCategory;
let products;
do {
    selectedCategory = prompt('Enter category ID that you want to select');
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === selectedCategory) {
            products = categories[i].products;
            break;
        }
    }
} while (!products);

// do {
//   selectedCategory = prompt('Enter category ID that you want to select');
//   products = categories[selectedCategory].products;
// } while (!products);


for (let i = 0; i < products.length; i++) {
    console.log(`Product #${i + 1} | ${products[i].title} $${products[i].price}`);
}

let productNumber;
do {
    productNumber = parseInt(prompt(`Enter product number from 1 to ${products.length}`));
} while (isNaN(productNumber) || productNumber < 1 || productNumber > products.length);

let productAmount;
do {
    productAmount = parseInt(prompt('Enter product amount you wanna buy: '));
} while (isNaN(productAmount) || productAmount < 1 || productAmount > 100);


const selectedProduct = products[productNumber - 1];

let finalPrice = selectedProduct.price * productAmount;

console.log(`The price of your order: $${finalPrice}`);

if (finalPrice > SUM_FOR_DISCOUNT) {
    finalPrice = finalPrice * (1 - DISCOUNT);
    console.log(`The final price of your order: $${finalPrice}`);
}

