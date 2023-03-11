import { createContext, useState } from "react";

export const OrderContext = createContext();
OrderContext.displayName = "Order";

export default function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);
    return (
        <OrderContext.Provider
            value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    )
}