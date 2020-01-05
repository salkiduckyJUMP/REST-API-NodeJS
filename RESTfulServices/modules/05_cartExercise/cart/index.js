//First Solution: Constructor

// var Cart = function () {
//     this.lineItems = [];
//     this.lineItem = {
//         productName: null,
//         productPrice: null,
//         quantity: null
//     };

//     //Add Item To Cart
//     this.triggerAddItem = function(item) {
//         this.lineItems.push(item);
//     };

//     //Remove Item From Cart
//     this.triggerRemoveItem = function(pName) {
//         this.lineItems = this.lineItems.filter((p) => {
//             return p.productName != pName;
//         });
//     }

//     //Get Total Amount Price of Items in Cart
//     this.totalAmount = function() {
//         let total = 0;
//         this.lineItems.forEach(function (p) {
//             total = total + (p.productPrice * p.quantity);
//         });
//         return total;
//     }

// };

// exports.create = function(info) {
//     //It's possible to create multiple instances of cart using this export from Cart!
//     //It's essentially a factory!
//     var instance = new Cart();

//     return instance;
// };

//Using ES6 Classes instead we avoid having to use the factory pattern.
module.exports = class Cart {
  constructor() {
    this.lineItems = [];
  }

  triggerAddItem(item) {
    this.lineItems.push(item);
  };

  triggerRemoveItem(pName) {
    this.lineItems = this.lineItems.filter(p => {
      return p.productName != pName;
    });
  };

  totalAmount() {
    let total = 0;
    this.lineItems.forEach(function(p) {
      total = total + p.productPrice * p.quantity;
    });
    return total;
  };
};
