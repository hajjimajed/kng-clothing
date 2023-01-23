import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { async } from "@firebase/util";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);

    const { isCartOpen } = useContext(CartContext);


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