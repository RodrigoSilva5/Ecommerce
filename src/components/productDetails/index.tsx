import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Title, DetailItem } from './styles';
import { StyledLink } from '../../styles/link';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Button } from '../../styles/button';
import { useCart } from '../../hooks/cart';
import { MainContainer } from '../../styles/mainContainer';

const fetchProductById = async (id: string | undefined) => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
};

const ProductDetailsPage: React.FC = () => {
    const { productId } = useParams();
    const { addItem } = useCart();

    
    const { isLoading, error, data } = useQuery({
        queryKey: ['products', productId],
        queryFn: async () => await fetchProductById(productId)
      })
    
    
     function handleAddToCart() {
        addItem(
            {
                imageUrl:data.imageUrl,
                price:data.price,
                description:data.description,
                productId:data.id
            }
        );
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error:</div>;
    }

    return (
        <MainContainer>
            <Container>
                <Title>
                    <FormattedMessage
                        id='title_product'
                        defaultMessage={"Product Details"}
                    />
                    </Title>
                <DetailItem>ID: {data.id}</DetailItem>
                <DetailItem>
                    <FormattedMessage 
                        id='description_product'
                        defaultMessage={"Description:"}
                    />
                    {data.description}</DetailItem>
                <DetailItem>
                    <FormattedMessage 
                        id='price_product'
                        defaultMessage={"Price:"}
                    />

                    <FormattedNumber currency='brl' value={255}/>
                     ${data.price}</DetailItem>
                <StyledLink to={"/cart"}>
                    <Button onClick={handleAddToCart}>
                        <FormattedMessage id='button_cart' />
                    </Button>
                </StyledLink>
            </Container>
        </MainContainer>
    );
};

export default ProductDetailsPage;

