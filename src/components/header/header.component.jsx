import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.utils';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from './../cart-icon/CartIcon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component'

import {connect} from 'react-redux';

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

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
    //currentUserVariable que usamos en el componente el primero sería el caso de que cojamos una variable del state
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);