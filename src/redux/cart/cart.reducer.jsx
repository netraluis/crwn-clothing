import {CartActionTypes} from './cart.types';

import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
    hidden:true,
    carItems: []
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
                // cartItems: state.carItems.push(...(addItemToCart(state.carItems, action.payload))),
                carItems:addItemToCart(state.carItems, action.payload),
            };

        default:
            return state;
    }

} 

export default cartReducer;