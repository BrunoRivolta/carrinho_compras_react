import { createContext, useState } from "react";

export const ProductContext = createContext();
ProductContext.displayName = "Product";

export default function ProductProvider({ children }) {
    const [Product, setProduct] = useState([]);
    return (
        <ProductContext.Provider
            value={{ Product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}