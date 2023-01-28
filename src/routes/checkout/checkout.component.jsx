
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import {
    ChekoutContainer,
    ChekoutHeader,
    HeaderBlock,
    LastHeaderBlock,
    Total
} from './checkout.styles';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)

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
            <PaymentForm />

        </ChekoutContainer>

    )

}

export default Checkout;