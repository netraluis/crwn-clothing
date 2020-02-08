import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CARD_HIDDEN,
    // payload: user
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = (item)=>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
    
})