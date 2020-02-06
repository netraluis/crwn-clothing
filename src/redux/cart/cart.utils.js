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
console.log('cartutils',[...cartItems, {...cartItemToAdd, quantity:1}])
return [...cartItems, {...cartItemToAdd, quantity:1}];
// return cartItems.push({...cartItemToAdd, quantity:1})
}
