import {
    CartItemContainer, Img,
    ItemDetails,
    Name
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )

}

export default CartItem;