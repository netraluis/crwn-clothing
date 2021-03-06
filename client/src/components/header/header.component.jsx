import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.utils';
import {ReactComponent as Logo} from './../../assets/crown.svg';
// import './header.styles.scss';
import CartIcon from './../cart-icon/CartIcon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component'

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './../../redux/user/user.selector';
import {selectCarHidden} from './../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.action'

// antes era un div pero ha hecho el css con un jsx
import  {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

const Header =({currentUser,hidden, signOutStart})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className = 'logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to = '/shop'>
                SHOP
            </OptionLink>
            <OptionLink to = '/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick = {signOutStart}>SIGN OUT</OptionDiv>
                :
                <OptionLink to ='/signin'>SIGN IN</OptionLink>
            }

            <CartIcon/>
        </OptionsContainer>
        {
            (hidden) ? null : <CartDropdown/>
        }
        
    </HeaderContainer>

);

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

//Redux
/*
const mapStateToProps =  {user:{currentUser}} =>({
    currentUser: currentUser
})
*/
const mapStateToProps = createStructuredSelector({
    //currentUserVariable que usamos en el componente el primero sería el caso de que cojamos una variable del state
    currentUser: selectCurrentUser,
    hidden: selectCarHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);