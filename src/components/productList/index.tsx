import ProductCard from "../productCard";

interface Product {
    id: number;
    imageUrl: string;
    price: number;
    description: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    productId={product.id}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductList;
