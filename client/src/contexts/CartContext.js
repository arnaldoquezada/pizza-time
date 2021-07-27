import { createContext, useState } from 'react';


export const CartContext = createContext();

export const MycartProvider = ({ children }) => {
    
    const [cart, setCart] = useState({
        items:[],///cantidad de pizas
        total:0
    });
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            { children }
        </CartContext.Provider>
    )

}