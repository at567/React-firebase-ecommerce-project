import React from 'react';
import { HeaderContainer , LogoContainer , OptionsContainer , OptionDiv , OptionLink } from './header.styles';
import { createStructuredSelector } from 'reselect'; 
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
const Header = ({currentUser,hidden,signOutStart}) => (
<HeaderContainer>
<LogoContainer to="/" >
   <Logo /> 
</LogoContainer>
<OptionsContainer>
<OptionLink  to='/shop' >
SHOP
</OptionLink>
<OptionLink to='/shop' >
CONTACT
</OptionLink>
{
currentUser ? <OptionDiv onClick={signOutStart}>Sign Out</OptionDiv>
: <OptionLink className='option' to='/signin' >
Sign In
</OptionLink>
}
<CartIcon/>
</OptionsContainer>
{ hidden ? null :<CartDropdown/>
}
</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
currentUser:selectCurrentUser,
hidden:selectCartHidden
});


const mapDispatchToProps = dispatch => ({
signOutStart: () => dispatch(signOutStart())
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(Header);