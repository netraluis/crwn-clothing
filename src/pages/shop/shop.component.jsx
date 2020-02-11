import React from "react";

import { selectShopCollections } from "./../../redux/shop/shop.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Route} from 'react-router-dom';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({match, history,location}) => {

  // console.log('match',match,'history',history,'location', location)
  return (
    <div className="shop-page">
      <Route exact path = {`${match.path}`} component={CollectionsOverview}/>
      <Route path = {`${match.path}/:collectionId`} component = {CollectionPage}/>
        
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
