import { createContext, useState } from 'react'

export const CarritoContext = createContext()

function CarritoContextComponente({ children }) {
	const [carrito, setCarrito] = useState([])

	return (
		<CarritoContext.Provider
			value={{
				carrito
			}}
		>
			{children}
		</CarritoContext.Provider>
	)
}

export default CarritoContextComponente
