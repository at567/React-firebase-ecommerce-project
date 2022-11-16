import React , {useEffect} from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.contaniner';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageCointainer from '../collection/collection.container';

const  ShopPage = ({fetchCollectionsStart ,match}) => {
useEffect(() => {
fetchCollectionsStart();
},[fetchCollectionsStart])

return (
<div className='shop-page'>
<Route exact  path={`${match.path}`}  component={CollectionOverviewContainer}  />
<Route path={`${match.path}/:collectionId`} component={CollectionPageCointainer} />
</div>  
);      
} 
 
const mapDispatchToProps = dispatch => ({
fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
}); 

export default connect(null,mapDispatchToProps)(ShopPage);