import React, { useEffect } from "react";
import "./App.css";

//TODO  routing
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepages/homepage.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import SignInsignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.action";

// import {selectCollectionsForPreview} from './redux/shop/shop.selector';

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(()=>{
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInsignUp />
          }
        />
      </Switch>
    </div>
  );
};

/*
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

//cambiamos una variable global signIN signOUT
// const mapDispatchToProps = dispatch =>({
//   // dentro de dispatch es lo que modifica el user con el objeto user que sera el payload
//   //setCurrentUser de la izquierda es el nombre para usar en el componente y le entras () un tipo user | this.props.setCurrentUser(user)
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })
//usamos segundo argumento el primero sirve para coger una variable este para cambiarla
export default connect(mapStateToProps, mapDispatchToProps)(App);
