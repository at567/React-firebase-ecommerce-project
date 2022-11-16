import { takeLatest , put , all , call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { SignInSuccess , SignInFailure  , signOutFailure , signOutSuccess , signUpSuccess , signUpFailure } from './user.actions';

import { auth , googleprovider , createUserProfileDocument , getCurrentUser  } from '../../firebase/firebase.utils';

// export function* signupfortest(){
//   console.log('Hello testing');
// }


export function* signInAfterSignup({ payload: {user,additionalData} }){

yield getSnapshotFromUserAuth(user,additionalData);
}

export function* signUpWithCredentials({ payload : { email , password ,displayName } }) {

try {
const  user  = yield auth.createUserWithEmailAndPassword(email,password);
console.log(user,'testing');
yield put(signUpSuccess({user , additionalData:{displayName}})) 
} catch (error) {
console.log(error.message);
yield put(signUpFailure(error))  
}
}


export function* signInWithGoogle() { 
       
try {
const { user }  = yield auth.signInWithPopup(googleprovider);
yield getSnapshotFromUserAuth(user);
} catch(error) {
yield put(SignInFailure(error));
} 
}

export function* isUserAuthenticated(){
try {
const userAuth = yield getCurrentUser();
if (!userAuth) return;
yield getSnapshotFromUserAuth(userAuth);
} catch(error) {
yield put(SignInFailure(error));
}
}

export function* getSnapshotFromUserAuth(userAuth) {
 try { 

 const userRef =  yield  call(createUserProfileDocument , userAuth);

 const userSnapshot = yield userRef.get();
 yield put(SignInSuccess({ id:userSnapshot.id , ...userSnapshot.data() }));
 } catch(error) {
   
 yield put(SignInFailure(error));
 }
    
} 

export function* signInWithEmail({ payload : { email , password } }) {
try {
const { user } = yield auth.signInWithEmailAndPassword(email,password);
yield getSnapshotFromUserAuth(user);
} catch(error) {
yield put(SignInFailure(error));
} 
} 

export function* signOut() {
try {
yield auth.signOut();
yield put(signOutSuccess());
} catch(error) {
yield put(signOutFailure(error));

}
}


export function* onsignUpStart() {
yield takeLatest(UserActionTypes.SIGN_UP_START,signUpWithCredentials)
} 

export function* onGoogleSignInStart() {
yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START , signInWithGoogle)
} 

export function* onEmailSignInStart() {
yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
} 

export  function* onCheckUserSession() {
 yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)   
}

export  function* onSignOutStart() {

yield takeLatest(UserActionTypes.SIGN_OUT_START , signOut)

}


export function* onSignUpSuccess() {

yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS , signInAfterSignup)

} 

export  function*  userSagas() {

yield  all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOutStart),call(onsignUpStart),call(onSignUpSuccess)]) 

} 