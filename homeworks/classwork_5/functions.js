
function showCategories() {
  for (let i = 0; i < categories.length; i++) {
    console.log(`Category ${categories[i].id} | ${categories[i].title}`)
  }
}

function identifyProductsByCategory() {
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

  return products;
}

function showProducts() {
  for (let i = 0; i < products.length;i++) {
    console.log(`Product #${i+1} | ${products[i].title} $${products[i].price}`);
  }
}

function getProductNumber() {
  return getNumericValue(`Enter product number from 1 to ${products.length}`, 1, products.length)
}

function getProductAmount() {
  return getNumericValue('Enter product amount you wanna buy: ', 1, 100);
}

function getNumericValue(messageToUser, minValue, maxValue) {
  let value;
  do {
    value = parseInt(prompt(messageToUser));
  } while(isNaN(value) || value < minValue || value > maxValue);

  return value;
}

function priceCalculationAndAct() {
  let finalPrice = selectedProduct.price * productAmount;

  console.log(`The price of your order: $${finalPrice}`);
  
  if (finalPrice > SUM_FOR_DISCOUNT) {
    finalPrice = finalPrice * (1 - DISCOUNT);
    console.log(`The final price of your order: $${finalPrice}`);
  }
}