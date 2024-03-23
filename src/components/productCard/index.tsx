import { Link } from 'react-router-dom';

interface ProductCardProps {
    imageUrl: string;
    price: number;
    description: string;
    productId: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, price, description, productId }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', marginBottom: '20px' }}>
            <img src={imageUrl} alt="Product" style={{ width: '100%', marginBottom: '10px' }} />
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <Link to={`/product/${productId}`}>
                <button>Details</button>
            </Link>
            <Link to="/cart">
                <button>Add to Cart</button>
            </Link>
        </div>
    );
};

export default ProductCard;
