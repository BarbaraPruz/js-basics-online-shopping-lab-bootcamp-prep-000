var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { [item]: Math.floor(Math.random() * 100) + 1});
  console.log (`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    let str = "In your cart, you have"
    var i = 0;
    var key;
    while (i<cart.length-1) {
      key = Object.keys(cart[i])[0];
      str = str.concat(' ' + key + ' at $' + cart[i][key]+ ' and');
    });
    str = str.slice(0,str.length-4) + '.';    
    console.log(str);
  }
}
     In your cart, you have orange at $36, pear at $70, and quince at $97. 

function total() {
  var sum=0;
  for (var i=0; i<cart.length; ++i) {
    sum +=Object.entries(cart[i])[0][1];
  }
  return sum;
}

function removeFromCart(item) {

  var idx = cart.indexOf (function (obj) { 
    return obj.hasOwnProperty(item)
  });
  if (idx >= 0) {
    cart.splice(idx, 1);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log('Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber);
    cart = [];
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  return cart;
}
