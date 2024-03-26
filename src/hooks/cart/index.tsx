import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ProductCardProps } from '../../interfaces/product';


interface CartContext{
    cart: ProductCardProps[];
    addItem:(product: ProductCardProps) => void; 
    deleteItem:(id: string) => void; 
}

const CartContext = createContext<CartContext>({} as CartContext)

export default function CartProvider({children}:{children: React.ReactNode}) { 
    const [cart, setCart] = useState<object[]>([])

    const addItem = useCallback((
    {imageUrl,
    price,
    description,
    productId} : ProductCardProps
    )=> {
        setCart((prev) => [...prev, {
            imageUrl,
            price,
            description,
            productId
        }])

    }, [])

    const deleteItem = useCallback((id: number) => {
        if(!cart.length)
            return
        
        setCart(prev => prev.filter(product => product.productId !== id))
        console.log("passou")
    }, [])

        // memoize
        const providerData = useMemo(() => {
            return {
                cart,
                addItem,
                deleteItem
            };
        }, [cart]);
    

    return (
        <CartContext.Provider value={providerData}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>  {
    const context = useContext(CartContext);

    if (!context)
        throw new Error('useCart must be used within an AuthProvider');

    return context;   
}