import { Children, createContext, use, useContext } from "react";

export const ContextData = createContext();

export const Dataprovier = ({ children }) => {
    const name = "Dishank"
    const age = 21
    return (
        <ContextData.Provider value={{ name, age }}>
            {children}
        </ContextData.Provider>
    )
}

export const useBioContext = ()=>{
    // const contect = useContext(ContextData) // using custom hook
    const contect = use(ContextData) // using use hook
    if(contect === undefined){
        throw new Error("Components must be wraped with Dataprovider")
    }
    return contect;
}