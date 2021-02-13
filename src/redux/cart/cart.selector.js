import {createSelector} from 'reselect';

const selectCar = state => state.cart;

export const selectCartItems = createSelector(
    [selectCar],
    (cart) => cart.cartItems
);

export const selectCarHidden = createSelector(
    [selectCar],
    (cart)=> cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acumulator, cartItems) => acumulator + cartItems.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((acumulator,cartItems) => acumulator + cartItems.price*cartItems.quantity, 0)

)