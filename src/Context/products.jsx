import { createContext, useState } from "react";

export const ProductsContext = createContext();
ProductsContext.displayName = "Products";

export default function ProductsProvider({ children }) {
    const [Products, setProducts] = useState([]);
    return (
        <ProductsContext.Provider
            value={{ Products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}