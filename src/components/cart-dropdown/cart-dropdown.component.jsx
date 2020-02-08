import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButton from './../custom-button/custom-button.component';
import CartItem from './../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

import {selectCarItems} from './../../redux/cart/cart.selector' 
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from './../../redux/cart/cart.action'

const CartDropdown = ({cartItems, history,dispatch}) =>(
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>

            {
                cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key ={cartItem.id} item={cartItem} />)
                )
                :
                (<span className='empty-message'>Your cart is empty</span>)
            }


        </div>
        <CustomButton onClick = {()=>{
            history.push('checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCarItems
})
//si no ponemos segundo argumento nos pasa el dispatch 
// const mapDispatchToProps = dispatch =>({
   
//     toggleCartHidden: () => dispatch(toggleCartHidden())
//   })

export default withRouter(connect(mapStateToProps)(CartDropdown));