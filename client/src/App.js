import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";

//TODO  routing
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/user/user.action";

// import {selectCollectionsForPreview} from './redux/shop/shop.selector';

const HomePage = lazy(() => import("./pages/homepages/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInsignUp = lazy(() =>
  import("./pages/sign-in-sign-up/sign-in-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
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
          </Suspense>
        </ErrorBoundary>
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
