import  { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { ProductCardProps } from '../../interfaces/product';

interface CartContext {
    cart: ProductCardProps[];
    addItem: (product: ProductCardProps) => void;
    deleteItem: (id: string) => void;
}

const CartContext = createContext<CartContext | undefined>(undefined);

export default function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<ProductCardProps[]>([]);

    const addItem = useCallback((product: ProductCardProps) => {
        setCart(prev => [...prev, product]);
    }, []);

    const deleteItem = useCallback((id: string) => {
        setCart(prevCart => prevCart.filter(product => product.productId !== id));
    }, []);

    const providerData = useMemo(() => {
        return {
            cart,
            addItem,
            deleteItem
        };
    }, [cart, addItem, deleteItem]);

    return (
        <CartContext.Provider value={providerData}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = (): CartContext => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};
