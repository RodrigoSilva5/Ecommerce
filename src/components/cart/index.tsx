import React from "react";
import styled from "styled-components"; // Importar styled-components
import { Button, LogoutButton } from "../../styles/button";
import { FormattedMessage } from "react-intl";
import { MainContainer } from "../../styles/mainContainer";
import { useCart } from "../../hooks/cart";
import { StyledLink } from "../../styles/link";

// Estilos para o container dos produtos
const ProductContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${props => props.theme.navbar_background}
`;

// Estilos para a imagem do produto
const ProductImage = styled.img`
  width: 100px;
  margin-right: 20px;
`;

// Estilos para o conteúdo do produto
const ProductContent = styled.div`
  flex-grow: 1;
`;

// Estilos para o botão de remover
const RemoveButton = styled(LogoutButton)`
  background-color: #f00;
  color: #fff;
  height: fit-content;
`;

interface Product {
  description: string;
  imageUrl: string;
  price: number;
  productId: number;
}

interface ProductListProps {
  products: Product[];
  deleteItem: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, deleteItem }) => {

  return (
    <div>
      {products.map(product => (
        <ProductContainer key={product.productId}>
          <ProductImage src={product.imageUrl} alt="Product" />
          <ProductContent>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Product ID: {product.productId}</p>
          </ProductContent>
          <RemoveButton onClick={() => deleteItem(product.productId)}>
            <FormattedMessage
              id='remove_item_cart'
              defaultMessage={"Delete from cart"}
            />
          </RemoveButton>
        </ProductContainer>
      ))}
    </div>
  );
};

export const CartScreen = () => {
  const { cart, deleteItem } = useCart();

  if (cart.length > 0) {
    return (
      <MainContainer>
        <ProductList products={cart} deleteItem={deleteItem} />
        <Button onClick={() => alert("success")}>
          <FormattedMessage 
            id="cart_end"
          />
        </Button>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
        <StyledLink to={'/'}>
          <Button>
            <FormattedMessage 
              id="buy_here"
            />
          </Button>
        </StyledLink>
    </MainContainer>
  );
};
