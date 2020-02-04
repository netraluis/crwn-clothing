import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepages/homepage.component';
import Header from './components/header/header.component';
import signInsignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';



class App extends React.Component {
constructor(){
  super();
  this.state = {
    currentUser: null
  }
}

unsubsribeFromAuth = null

componentDidMount(){
  this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    console.log(userAuth)
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        console.log(snapShot.data())
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        },()=>{
          console.log(this.state)
        })
      })
    }else{
      this.setState({
        currentUser:userAuth
      })
    }
    // createUserProfileDocument(userAuth)
    // this.setState({
    //   currentUser:userAuth
    // });
    // console.log(user);
  });
}

componentWillUnmount(){
  this.unsubsribeFromAuth();
}
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage}/>
          <Route path='/signin' component = {signInsignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
