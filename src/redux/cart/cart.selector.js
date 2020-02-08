import {createSelector} from 'reselect';

const selectCar = state => state.cart;

export const selectCarItems = createSelector(
    [selectCar],
    (cart) => cart.cartItems
);

export const selectCarHidden = createSelector(
    [selectCar],
    (cart)=> cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCarItems],
    cartItems => cartItems.reduce((acumulator, cartItems) => acumulator + cartItems.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCarItems], 
    cartItems => cartItems.reduce((acumulator,cartItems) => acumulator + cartItems.price*cartItems.quantity,0)

)