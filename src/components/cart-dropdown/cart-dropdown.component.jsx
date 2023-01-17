import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>

                {
                    cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    ) : (
                        <EmptyMessage>Your cart is emty</EmptyMessage>
                    )
                }


            </CartItems>

            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropdownContainer>
    )

}

export default CartDropdown;