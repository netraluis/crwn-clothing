import {CartActionTypes} from './cart.types';

import {addItemToCart} from './cart.utils'

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
            console.log('clear item')
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem=> {
                    console.log('cart',cartItem.id,'payload', action.payload.id)
                    return cartItem.id!== action.payload.id
                })
            }

        default:
            return state;
    }

} 

export default cartReducer;