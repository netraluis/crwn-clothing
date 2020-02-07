import {createSelector} from 'reselect';

const selectCar = state => state.cart;

export const selectCarItems = createSelector(
    [selectCar],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCarItems],
    cartItems => cartItems.reduce((acumulator, cartItems) => acumulator + cartItems.quantity, 0)
)
