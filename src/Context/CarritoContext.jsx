import { createContext } from 'react'

export const CarritoContext = createContext()

function CarritoContextComponente({ children }) {
	
    return (
    
    
    <CarritoContext.Provider value={{

    }}>
        {children}
    </CarritoContext.Provider>
    
    )
}


export default CarritoContextComponente
