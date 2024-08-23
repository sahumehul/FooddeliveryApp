import React, { createContext, useContext, useReducer } from "react";



const CartState = createContext();
const CartDispatch = createContext();

const reducer =(state,action)=>{
    switch(action.type){
        case  "ADD" :
            return [...state, {
                id: action.id, name:action.name,price: action.price, quantity : action.quantity, size: action.size, img:action.img
            }]
        case "REMOVE" :
            let newArr = [...state]
            newArr.splice(action.index,1)
            return newArr
        case "UPDATE" : 
            let arr = [...state];
            arr.find((food , index)=>{
                if(food.id === action.id){
                    arr[index] = {...food, quantity : parseInt(action.quantity) + food.quantity , price : action.price + food.price}
                }
                return arr
            })
            return arr
            case "DROP" :
                let empArray = [];
                return empArray
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