
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { CartIconContainer, ItemCount, ShoppingIconn } from './cart-icon.styles'

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconn />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon;