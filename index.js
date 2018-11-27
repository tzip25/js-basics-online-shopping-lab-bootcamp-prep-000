var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 101);
var newObj = new Object({ itemName: item, itemPrice: price });
 cart.push(newObj);
 return `${item} has been added to your cart.`;
}

var myItems = [];
var myStr = `In your cart, you have`;

function viewCart() {
   if (cart.length === 0) {
    return `Your shopping cart is empty.`;
    } else {
for (let i = 0; i < cart.length; i++) {
  let myCartStr = `${cart.length === 1 ? '' : cart.length >= 2 ? ' and ' : ''}  ${cart[i].itemName} at $${cart[i].itemPrice}`;
    cart.insert(-1, ' and ');
  myItems.push(myCartStr);
  }
  }
  return `${myStr} ${myItems}.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
