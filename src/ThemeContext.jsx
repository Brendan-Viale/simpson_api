/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GeneralContext = createContext(null);

const ThemeContext = ({children})=>{
    const [store, setStore] = useState({
        theme:"light",
    });
    return(
        <GeneralContext.Provider value={{store, setStore}}>
            {children}
        </GeneralContext.Provider>
    )
}

export default ThemeContext;