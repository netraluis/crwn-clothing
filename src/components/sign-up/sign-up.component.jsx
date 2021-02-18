import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {connect} from 'react-redux';
import { signUpStart } from './../../redux/user/user.action'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super()

        this.state={
            displayName: '', 
            email: '', 
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        const { signUpStart } = this.props

        if (password !== confirmPassword){
            alert('passwords differents')
            return;
        }

        signUpStart({displayName, email, password})
        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );

        //     await createUserProfileDocument(user, {displayName})
        // }catch(error){
        //     console.error(error)
        // }
    }

    handleChange = event => {
        // event.target[name]
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }
    
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className = 'sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange = {this.handleChange}
                        label = 'Display name'
                        required
                        />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange = {this.handleChange}
                        label = 'email'
                        required
                        />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange = {this.handleChange}
                        label = 'password'
                        required
                        />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange = {this.handleChange}
                        label = 'confirmPassword'
                        required
                        />

                    <CustomButton type = 'submit'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);