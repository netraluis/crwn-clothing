import React from 'react'; 

import './checkout.styles.scss';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCarItems,selectCartTotal} from './../../redux/cart/cart.selector';

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
                return <CheckoutItem key = {cartItem.id}cartItem={cartItem}/>
            })
        }
        <div className='total'>TOTAL: ${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCarItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);