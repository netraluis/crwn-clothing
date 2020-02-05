import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepages/homepage.component';
import Header from './components/header/header.component';
import signInsignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';



class App extends React.Component {
// constructor(){
//   super();
//   this.state = {
//     currentUser: null
//   }
// }

unsubsribeFromAuth = null

componentDidMount(){

  const {setCurrentUser} = this.props;
  this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    console.log(userAuth)
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
      })
    }else{
      setCurrentUser(userAuth)
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
      <Header/>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage}/>
          <Route path='/signin' component = {signInsignUp} />
        </Switch>
      </div>
    );
  }
}

//cambiamos una variable global signIN signOUT
const mapDispatchToProps = dispatch =>({
  // dentro de dispatch es lo que modifica el user con el objeto user que sera el payload
  //setCurrentUser de la izquierda es el nombre para usar en el componente y le entras () un tipo user | this.props.setCurrentUser(user)
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
//usamos segundo argumento el primero sirve para coger una variable este para cambiarla
export default connect(null,mapDispatchToProps)(App);
