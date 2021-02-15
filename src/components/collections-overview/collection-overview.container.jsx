import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import WithSpinner from './../withSpinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

import { compose } from 'redux' //es para hacer el container más limpio

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

// const CollectionsOverviewContainer = compose(
//     connect(mapStateToProps),
//     WithSpinner
// )(CollectionsOverview);

export default CollectionsOverviewContainer;



