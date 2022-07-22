import React from "react";
import { ProductType } from "../products/ProductType";

const useAddToCart = () => {
    const [carItem, setCartItem] = React.useState<ProductType>({} as ProductType);
    const addToCart = React.useCallback((item: ProductType) => {
        setCartItem(item);
    }, []);

    return { carItem, addToCart }
}

export default useAddToCart;