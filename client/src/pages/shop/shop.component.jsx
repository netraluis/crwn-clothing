import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
// import { fetchollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';



const ShopPage = ({fetchollectionsStart, match}) => {

  useEffect(()=>{
    fetchollectionsStart()
  }, [fetchollectionsStart])

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
      </div>
    );

  

}


const mapDispatchToProps = dispatch => ({
  fetchollectionsStart: () => dispatch(fetchollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);
