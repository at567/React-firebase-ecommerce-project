import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { firestore } from '../../firebase/firebase.utils';

const CollectionPage = ({collection}) => {
useEffect(() => {
 console.log('I am subscribing');
 const unScribingFromCollections = firestore.collection('collections').onSnapshot(Snapshot => console.log(Snapshot));
 return () => {
 console.log('I am Unsubscribing');
 unScribingFromCollections();
 };
},[])

console.log(collection);
const { title , items } = collection;
return (
<div className='collection-page'>
<h2 className='title' >{title}</h2>
<div className='items' >
{
    items.map(
        item => <CollectionItem key={item.id} item={item}/>
    )
}
</div>
</div>
);
};

const mapStateToProps = (state, ownProps) => ({
collection:selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);