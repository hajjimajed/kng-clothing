import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { onSignOutStart } from "../../store/user/user.saga";
import { signOutStart } from "../../store/user/user.action";

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { async } from "@firebase/util";

import { selectIsCartOpen } from "../../store/cart/cart.selector";


const Navigation = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink >)
                            : (<NavLink to='/auth'>
                                SIGN IN
                            </NavLink>)

                    }

                    <CartIcon />

                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;