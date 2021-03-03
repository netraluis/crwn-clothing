import React from 'react';

import './sign-in-sign-up.component.styles.scss';
import SignIn from './../../components/sign-in/signIn.component';
import SignUp from './../../components/sign-up/sign-up.component';

const signInsignUp = () =>(
    <div className='sign-in-and-sign-up'>
        SIGN IN
        <SignIn/>
        <SignUp/>
    </div>
)

export default signInsignUp;