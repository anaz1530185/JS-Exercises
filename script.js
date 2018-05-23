console.log("External JS");

//5a

 var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

//5a
function addItem(newitem)

{
    cart.push(newitem);
    console.log(cart);
}
var newItem={name: "Watch", price:64,quantity:1};// to add item manually
  addItem(newItem);                             //