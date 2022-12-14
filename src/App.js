import React , { useEffect } from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';
const  App = ({checkUserSession , currentUser}) => {
 useEffect(()=> {
  checkUserSession()
 },[checkUserSession])
 
 return (
   <div>
    <Header />   
    <Switch>  
     <Route exact  path='/' component={HomePage} />
     <Route  path='/shop' component={ShopPage} />
     <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)  } />
     <Route path='/checkout' component={CheckoutPage}/>
    </Switch>
    </div>
  );
  }


const mapStateToProps = createStructuredSelector({
currentUser:selectCurrentUser,

});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
