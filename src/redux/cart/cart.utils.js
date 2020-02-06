export const addItemToCart = (cartItems, cartItemToAdd) =>{
    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )


if (existingCartItem){
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        )
}
// console.log('cartutils sssssss',[...cartItems, {...cartItemToAdd, quantity:1}]);
// let arrayResultado = [...cartItems, {...cartItemToAdd, quantity:1}].sort((a,b)=>{
//     if(a.quantity > b.quantity){
//         return -1;
//     }
//     if(a.quantity<b.quantity){
//         return 1
//     }
//     return 0;
// // })

// console.log('arrayResultado', arrayResultado)

return [...cartItems, {...cartItemToAdd, quantity:1}];
// return cartItems.push({...cartItemToAdd, quantity:1})
}
