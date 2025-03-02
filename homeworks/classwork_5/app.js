const SUM_FOR_DISCOUNT = 10000;
const DISCOUNT = 0.05;

showCategories();
let products = identifyProductsByCategory();
showProducts();
let productNumber = getProductNumber();
let productAmount = getProductAmount();
const selectedProduct = products[productNumber - 1];
priceCalculationAndAct();
