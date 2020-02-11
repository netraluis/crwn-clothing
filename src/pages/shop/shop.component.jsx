import React from 'react';

import { selectShopCollections } from "./../../redux/shop/shop.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Route} from 'react-router-dom';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

import {firestore} from './../../firebase/firebase.utils'

class ShopPage extends React.Component {
  constructor(props){
    super(props)
  }
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot =>{
      console.log(snapshot)
    })
  }
  render(){
    const {match} = this.props
    return (
      <div className="shop-page">
        <Route exact path = {`${match.path}`} component={CollectionsOverview}/>
        <Route path = {`${match.path}/:collectionId`} component = {CollectionPage}/>
          
      </div>
    );

  }
  

}


// const ShopPage = ({match, history,location}) => {

//   // console.log('match',match,'history',history,'location', location)
//   return (
//     <div className="shop-page">
//       <Route exact path = {`${match.path}`} component={CollectionsOverview}/>
//       <Route path = {`${match.path}/:collectionId`} component = {CollectionPage}/>
        
//     </div>
//   );
// };

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
