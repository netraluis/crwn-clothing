import React from 'react'; 

import './checkout.styles.scss';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from './../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems,total}) =>(
    <div className = 'checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            
        </div>
        {
            cartItems.map(cartItem=>{
                return <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
            })
        }
        <div>4242 4242 4242 4242 -Exp:01/20 -CW:123</div>
        <div className='total'>TOTAL: ${total}</div>
        <StripeCheckoutButton price = {total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);