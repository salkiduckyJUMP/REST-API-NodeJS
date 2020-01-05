var cart = require('./cart');

//First Cart Instance
var fc = new cart();

fc.triggerAddItem ({
    productName: 'Pink Leash',
    productPrice: 4.30,
    quantity: 2
});

fc.triggerAddItem ({   
    productName: 'Milkbone',
    productPrice: .25,
    quantity: 50
});

//Second Cart Instance
var sc = new cart();

sc.triggerAddItem ({
    productName: 'Catnip Mouse',
    productPrice: 1.25,
    quantity: 3
});

sc.triggerAddItem({
    productName: 'Cat Tree',
    productPrice: 50,
    quantity: 1
});

sc.triggerAddItem({
   productName: 'Cat Litter Bin',
   productPrice: 10,
   quantity: 2 
})


console.log('----- Cart One');
console.log(fc.lineItems);
console.log(fc.totalAmount());
fc.triggerRemoveItem('Milkbone');
console.log('After Removing Milkbones!');
console.log(fc.lineItems);
console.log(fc.totalAmount());
console.log('----- Cart Two');
console.log(sc.lineItems);
console.log(sc.totalAmount());
sc.triggerRemoveItem('Cat Tree');
console.log('After Removing Cat Tree!');
console.log(sc.lineItems);
console.log(sc.totalAmount());
