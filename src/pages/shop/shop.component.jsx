import React from 'react';

import { selectShopCollections } from "./../../redux/shop/shop.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Route } from 'react-router-dom';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';



import { fetchollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/withSpinner/with-spinner.component';

import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     loading: true
  //   }
  // }

  // state = {
  //   loading: true
  // }
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {fetchollectionsStartAsync} = this.props 
    fetchollectionsStartAsync()
    // const { updateCollections } = this.props
    // const collectionRef = firestore.collection('collections');

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log('mapeo',collectionMap)
    //   updateCollections(collectionMap)
    //   this.setState({ loading: false });
    // }) 
    // esto es con observables de firebase


    // collectionRef.get().then(snapshot => {
      // const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log('mapeo',collectionMap)
      // updateCollections(collectionMap)
      // this.setState({ loading: false });
    // })
    // promise no se actualiza hasta que no cargas de nuevo el componente

  //   fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-f05ce/databases/(default)/documents/collections`)
  //   .then(response=>response.json())
  //   .then(collections=>console.log(collections))
  //fetch tipico
  // componentWillUnmount(){
  //   this.unsubscribeFromSnapshot();
  // } esto es si es observable
  }
  render() {
    const { isCollectionFetching,match,isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer
        }
        />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}

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
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  fetchollectionsStartAsync: () => dispatch(fetchollectionsStartAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage);
