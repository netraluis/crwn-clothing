import React from "react";

import "./signIn.styles.scss";
import FormInput from "./../form-input/form-input.component";
import CustomButton from './../custom-button/custom-button.component';
import {signInWithGoogle,auth} from './../../firebase/firebase.utils';

// TODO form
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state 
    
    try{
      auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
    }catch(error){
      console.error(error)
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className='buttons'>

            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
              </CustomButton>

          </div>
        
        </form>
      </div>
    );
  }
}

export default SignIn;
