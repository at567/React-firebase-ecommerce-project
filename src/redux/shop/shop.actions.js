import ShopActionTypes from './shop.types';
export const fetchCollectionsStart = () => ({
type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
payload:collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
payload:errorMessage
});

// React Thunk 
// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());
//     collectionRef.get().then(snapshot => {
//         console.log(snapshot);
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         console.log(collectionsMap);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
       
//     }).catch( error => dispatch(fetchCollectionsFailure(error.message))  );
//  }
// }

// React Thunk 