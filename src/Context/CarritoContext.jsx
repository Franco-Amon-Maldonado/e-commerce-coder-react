import { createContext, useState } from 'react'

export const CarritoContext = createContext()

function CarritoContextComponente({ children }) {
	const [carrito, setCarrito] = useState([])

	const agregarProductoCarrito = (producto) => {
		const existe = carrito.some((carrito) => carrito.id === producto.id)

		if (existe) {
			let nuevoCarrito = carrito.map((item) => {
				if (item.id === producto.id) {
					return { ...item, cantidad: item.cantidad + producto.cantidad }
				} else {
					return item
				}
			})
			setCarrito(nuevoCarrito)
		} else {
			setCarrito([...carrito, producto])
		}
	}

	return (
		<CarritoContext.Provider
			value={{
				carrito,
				agregarProductoCarrito,
			}}
		>
			{children}
		</CarritoContext.Provider>
	)
}

export default CarritoContextComponente
