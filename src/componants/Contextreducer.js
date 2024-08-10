import React, { createContext, useContext, useReducer } from "react";



const CartState = createContext();
const CartDispatch = createContext();

const reducer =(state,action)=>{
    switch(action.type){
        case  "ADD" :
            return [...state, {
                id: action.id, name:action.name,price: action.price, quantity : action.quantity, size: action.size, img:action.img
            }]
        default :
            console.log("Error in reducer");
            
    }
}
export const Cartprovider =({children})=>{

    const [state, dispatch] = useReducer(reducer, [])
    return(
        <CartDispatch.Provider value={dispatch}>
            <CartState.Provider value={state}>
                {children}
            </CartState.Provider>
        </CartDispatch.Provider>
    )
};

export const useCart = ()=> useContext(CartState);
export const useDispatch = ()=> useContext(CartDispatch)