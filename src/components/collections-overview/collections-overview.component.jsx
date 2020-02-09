import React from "react";

import "./collection-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "./../../redux/shop/shop.selector";

import {CollectionPreview} from './../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => {
    return (
      <div className="shop-page">
        <CollectionsOverview/>
      </div>
    );
  };

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);
