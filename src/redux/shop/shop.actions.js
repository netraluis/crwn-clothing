import ShopActionsTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

 const fetchollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

 const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

 const fetchCollectionsFailure = errorMessage =>({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchollectionsStartAsync = () => {
  // para esto se necesita redux-thunk para dispachear una funcion no un objeto
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchollectionsStart())
    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error)))
  };
};
