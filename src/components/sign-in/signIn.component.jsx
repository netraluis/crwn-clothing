import React, { useState } from "react";
import { connect } from "react-redux";

import "./signIn.styles.scss";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

// TODO form
const SignIn = ({emailSignInStart, googleSignInStart}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: "",
  //     password: ""
  //   };
  // }

  const [userCredentials, setCredentials] = useState({email: '', password: ''})

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };
  const {email, password} = userCredentials
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    emailSignInStart(email, password);

    // try{
    //   auth.signInWithEmailAndPassword(email,password);
    //   this.setState({ email: "", password: "" });
    // }catch(error){
    //   console.error(error)
    // }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
