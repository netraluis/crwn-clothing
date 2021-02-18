import React from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
// import { fetchollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';



class ShopPage extends React.Component {

  componentDidMount() {
    const {fetchollectionsStart} = this.props 
    fetchollectionsStart()

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
  fetchollectionsStart: () => dispatch(fetchollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);
