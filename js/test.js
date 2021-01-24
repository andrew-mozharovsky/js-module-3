const productOne = {
  name: 'potato',
  price: 200,
  count: 1,
};

const productTwo = {
  name: 'cherry',
  price: 600,
  count: 1,
};

const productThree = {
  name: 'meet',
  price: 900,
  count: 1,
};
/*method*/
const basket = {
  products: [],

  addProduct(newProduct) {
    for (const product of this.products) {
      if (product.name === newProduct.name) {
        product.count += 1;
        return;
      }
    }
    this.products.push(newProduct);
  },
  deleteProduct(nameProduct) {
    for (let i = 0; i < this.products.length; i += 1) {
      const product = this.products[i];
      if (product.name === nameProduct) {
        product.count -= 1;
      }
      if (product.count - 1 === -1) {
        this.products.splice(i, 1);
      }
    }
  },
  totalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.price * product.count;
    }
    console.log(`Общяя стоимость товаров ${totalPrice}`);
  },
  clearBask() {
    this.products = [];
  },
};

/*------------------------------------------------------------------*/
/*-----------------------ВЫЗОВ МЕТОДА------------------------------ */
/*------------------------------------------------------------------*/

basket.addProduct(productOne);
basket.addProduct(productTwo);
basket.addProduct(productThree);
basket.addProduct(productThree);
basket.addProduct(productThree);
basket.addProduct(productOne);

basket.deleteProduct('potato');

basket.deleteProduct('meet');
// basket.deleteProduct('meet');
// basket.deleteProduct('meet');
// basket.clearBask();

console.table(basket.products);
basket.totalPrice();
