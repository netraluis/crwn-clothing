import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections 
)



export const selectCollection = collectionUrlParam => 
createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
    // collections.find(
        //     collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam]) ------- era cuando era array --------
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key]) //-----pasar de objeto a array a el no le va si es objeto a mi si 
)