console.log("External JS");

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

var newItem={name: "Watch", price:64,quantity:1};   // to add item manually
    addItem(newItem);                              //
  
 //5b
  
function sortCart()
  {
     //sortCart.sortBy(cart, 'name');
     //return (a-b)
     //sortCart(cart, item => [item.name, -item.price, item.quantity]);
    
     //cart.sort(function (a, b) 
    //{
    // return a.value - b.value;
    //});
    
     cart.sort(function(a, b) 
     {
         var name1 = a.name.toLowerCase(), name2 = b.name.toLowerCase()

        if(name1 < name2) return -1;

        if(name1 > name2) return 1;

        return 0;
      });
  
        return cart;
     
  }
 console.log(sortCart());