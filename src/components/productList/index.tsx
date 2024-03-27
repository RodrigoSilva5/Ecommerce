import { FormattedMessage } from "react-intl";
import ProductCard from "../productCard";
import { ContainerList } from "./styles";
import { ProductCardProps } from "../../interfaces/product";
import { Key } from "react";

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
    if (!Array.isArray(products)) {
        // Se não for, retornamos algo para lidar com esse caso
        return <div>Products is not an array</div>;
      }

    return (
        <ContainerList>
            <h1>
                <FormattedMessage 
                    id="product_list"
                    defaultMessage='View our options'
                />
            </h1>
            {products.map((product: { id: Key | null | undefined; imageUrl: string; price: number; description: string; }) => (
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
