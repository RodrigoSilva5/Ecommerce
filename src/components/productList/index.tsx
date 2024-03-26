import { FormattedMessage } from "react-intl";
import ProductCard from "../productCard";
import { ContainerList } from "./styles";
import { ProductCardProps } from "../../interfaces/product";

interface Product {
    id: number;
    imageUrl: string;
    price: number;
    description: string;
}

interface ProductListProps {
    products: Product[] | ProductCardProps;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <ContainerList>
            <h1>
                <FormattedMessage 
                    id="product_list"
                    defaultMessage='View our options'
                />
            </h1>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    productId={product.id}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </ContainerList>
    );
};

export default ProductList;
