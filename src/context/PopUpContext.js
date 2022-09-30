import React , {createContext , useContext, useState} from "react";
import { useShoppingCart } from "./ShoppingCartContext";

const popUpContext = createContext()

export function usePopUp(){
    const context = useContext(popUpContext)
    if(!context) throw new Error('No pop-up context found!')
    return context
}


export default function PopUpProvider({children}){

    const {removeAll} = useShoppingCart()

    const [showMobileMenu,setShowMobileMenu] = useState(false)
    const [showCheckoutWindow,setShowCheckoutWindow] = useState(false)
    const [showCheckoutForm,setShowCheckoutForm] = useState(false)
    const [showSuccessfulOrderWindow,setShowSuccessfulOrderWindow] = useState(false)

    function toggleMobileMenu(){
        setShowMobileMenu(prev => !prev)
    }

    function toggleCheckoutWindow(){
        setShowCheckoutWindow(prev => !prev)
    }

    function toggleCheckoutForm(){
        setShowCheckoutForm(prev => !prev)
        setShowCheckoutWindow(prev => !prev)
    }

    function toggleSuccessfulOrderWindow(){
        setShowSuccessfulOrderWindow(true)
        // setShowCheckoutForm(false)
    }

    function backToHome(){
        removeAll()
        setShowCheckoutForm(false)
        setShowCheckoutWindow(false)
        setShowSuccessfulOrderWindow(false)
    }

    return(
        <popUpContext.Provider value={{backToHome,toggleSuccessfulOrderWindow,toggleCheckoutForm,toggleCheckoutWindow,toggleMobileMenu,showMobileMenu,showCheckoutWindow,showCheckoutForm,showSuccessfulOrderWindow}}>
            {children}
        </popUpContext.Provider>
    )
}