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
            // state.carItems = []
            // let array = []
            // array =  addItemToCart(state.carItems, action.payload)
            // console.log('reducer',array,action.payload,state.carItems)
            // state.carItems 
            return {
                cartItems: addItemToCart(state.carItems, action.payload),
                ...state,
            };

        default:
            return state;
    }

} 

export default cartReducer;