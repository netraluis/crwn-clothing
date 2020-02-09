import {CartActionTypes} from './cart.types';

import {addItemToCart, removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                // hidden: action.payload
                hidden : !state.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // cartItems: state.cartItems.push(...(addItemToCart(state.cartItems, action.payload))),
                cartItems:addItemToCart(state.cartItems, action.payload),
            };
        
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem=> {
                    return cartItem.id!== action.payload.id
                })
            };

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }

} 

export default cartReducer;