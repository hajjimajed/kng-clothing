
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
    ChekoutContainer,
    ChekoutHeader,
    HeaderBlock,
    LastHeaderBlock,
    Total
} from './checkout.styles';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <ChekoutContainer>
            <ChekoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <LastHeaderBlock>
                    <span>Remove</span>
                </LastHeaderBlock>
            </ChekoutHeader>
            {
                cartItems.map((cartItem) => (

                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />

                ))
            }

            <Total>Total: ${cartTotal}</Total>

        </ChekoutContainer>

    )

}

export default Checkout;