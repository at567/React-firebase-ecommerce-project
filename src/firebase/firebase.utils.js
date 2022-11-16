import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
apiKey: "AIzaSyCZZNVPsl8d5uvH0itf2hXx24IYUGPgFhI",
authDomain: "react1-c616f.firebaseapp.com",
databaseURL: "https://react1-c616f.firebaseio.com",
projectId: "react1-c616f",
storageBucket: "react1-c616f.appspot.com",
messagingSenderId: "48528013121",
appId: "1:48528013121:web:b02a657eb612f2a8e813c0",
measurementId: "G-1RWGQ7DY3N"
}
firebase.initializeApp(config);



export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
       unsubscribe();
       resolve(userAuth);
     }, reject);
   });
 };




export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth,additionalData) => {
// const { user } = usarAuth;
// console.log(user);
if(!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();


if(!snapShot.exists) {
 const { displayName , email } = userAuth;
 const createdAt = new Date();
 try {
 await userRef.set({ 
 displayName,
 email,
 createdAt,
 ...additionalData
 })
 } catch(error) {
    console.log('error creating object',error.message);
 }
}

return userRef;

};

export const addCollectionAndDocuments = async (collectionkey , objectsToAdd ) => {
const collectionRef = firestore.collection(collectionkey);
console.log(collectionRef);

const batch  = firestore.batch();
objectsToAdd.forEach(obj => {
const newDocRef = collectionRef.doc();
console.log(newDocRef);
batch.set(newDocRef,obj);
}); 

return await batch.commit();

};

export const convertCollectionsSnapshotToMap = ( collections ) => {
const transformedCollection = collections.docs.map( 
 doc => { 
    const { title , items } = doc.data();
    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items 
   };
   });   
console.log(transformedCollection);
return transformedCollection.reduce( (accumulator,collection ) => {
accumulator[collection.title.toLowerCase()] = collection;
return accumulator;
}, {});
};


export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({ promt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(googleprovider); 

export default firebase;

