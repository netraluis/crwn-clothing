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

  componentDidMount() {
    const {fetchollectionsStartAsync} = this.props 
    fetchollectionsStartAsync()

  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>

      </div>
    );

  }

}


const mapDispatchToProps = dispatch => ({
  fetchollectionsStartAsync: () => dispatch(fetchollectionsStartAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage);
