import React from 'react';

import { selectShopCollections } from "./../../redux/shop/shop.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Route} from 'react-router-dom';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

import {firestore, convertCollectionsSnapshotToMap} from './../../firebase/firebase.utils';

import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/withSpinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     loading: true
  //   }
  // }

  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot =>{
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log('mapeo',collectionMap)
      updateCollections(collectionMap)
      this.setState({loading: false});

    })
  }
  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path = {`${match.path}`} render={props=>(
          <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
          ) 
        }
        />
        <Route path = {`${match.path}/:collectionId`} render={props=>(
          <CollectionPageWithSpinner isLoading = {loading} {...props} />
        )}
        
        />
          
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

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopCollections
// });

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
