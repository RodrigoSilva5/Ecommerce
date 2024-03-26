import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../interfaces/product';
import { useCart } from '../../hooks/cart';
import { CardContainer, ProductImage, ProductDescription, ProductPrice } from './styles';
import { StyledLink } from '../../styles/link';

import { Button, LogoutButton } from '../../styles/button';
const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, price, description, productId, buttonDelete }) => {
    const { addItem, deleteItem } = useCart();

    function handleAddToCart() {
        addItem({ imageUrl, price, description, productId });
    }
    

    return (
        <CardContainer>
            <ProductImage src={imageUrl} alt="Product" />
            <ProductDescription>
                <FormattedMessage id='product_description' /> {description}
            </ProductDescription>
            <ProductPrice>
                <FormattedMessage id='product_price' /> ${price}
            </ProductPrice>
            <Link to={`/product/${productId}`}>
                <Button>
                    <FormattedMessage id='button_details' />
                </Button>
            </Link>
            {buttonDelete ? 
            <LogoutButton>
                <FormattedMessage 
                    id='remove_item_cart'
                    defaultMessage={"Delete from cart"}
                />
            </LogoutButton> :
            <StyledLink to={"/cart"} >
            <Button onClick={handleAddToCart}>
                <FormattedMessage id='button_cart' />
            </Button>
        </StyledLink>
  }
  
        </CardContainer>
    );
};

export default ProductCard;
