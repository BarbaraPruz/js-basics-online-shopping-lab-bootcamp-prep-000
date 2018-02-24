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
