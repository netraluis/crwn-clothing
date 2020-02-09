import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectShopCollections } from "./../../redux/shop/shop.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from './../../components/collection-preview/collection-preview.component'

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
