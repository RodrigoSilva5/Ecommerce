import { Key } from "react";

interface ProductCardProps {
    id?: Key | null | undefined | number;
    imageUrl: string;
    price: number;
    description: string;
    productId: Key | null | undefined | number;
    buttonDelete?: boolean
}
export type {ProductCardProps}