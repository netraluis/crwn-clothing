import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import { fetchollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchollectionsStart } from "../../redux/shop/shop.actions";
// import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
// import CollectionPageContainer from '../../pages/collection/collection.container';
import Spinner from "../../components/spinner/spinner.component";
const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../../pages/collection/collection.container")
);

const ShopPage = ({ fetchollectionsStart, match }) => {
  useEffect(() => {
    fetchollectionsStart();
  }, [fetchollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback = {<Spinner/>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchollectionsStart: () => dispatch(fetchollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
