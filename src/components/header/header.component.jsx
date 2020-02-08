import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.utils';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from './../cart-icon/CartIcon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component'

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './../../redux/user/user.selector';
import {selectCarHidden} from './../../redux/cart/cart.selector';

const Header =({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className = 'logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to = '/shop'>
                SHOP
            </Link>
            <Link className='option' to = '/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className = 'option' onClick = {()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to ='/signin'>SIGN IN</Link>
            }

            <CartIcon/>
        </div>
        {
            (hidden) ? null : <CartDropdown/>
        }
        
    </div>

);

//Redux

const mapStateToProps = createStructuredSelector({
    //currentUserVariable que usamos en el componente el primero sería el caso de que cojamos una variable del state
    currentUser: selectCurrentUser,
    hidden: selectCarHidden
})

export default connect(mapStateToProps)(Header);