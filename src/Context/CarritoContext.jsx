import { createContext, useState } from 'react'

export const CarritoContext = createContext()

function CarritoContextComponente({ children }) {
	const [carrito, setCarrito] = useState([])

	const agregarProductoCarrito = (producto) => {
		const existe = carrito.some((carrito) => carrito.id === producto.id)

		if (existe) {
			let nuevoCarrito = carrito.map((item) => {
				if (item.id === producto.id) {
					return { ...item, cantidad: producto.cantidad }
				} else {
					return item
				}
			})
			setCarrito(nuevoCarrito)
		} else {
			setCarrito([...carrito, producto])
		}
	}

	const obtenerCantidad = (id) => {
		const productoCantidad = carrito.find((carrito) => carrito.id === id)
		return productoCantidad?.cantidad
	}

	return (
		<CarritoContext.Provider
			value={{
				carrito,
				agregarProductoCarrito,
				obtenerCantidad
			}}
		>
			{children}
		</CarritoContext.Provider>
	)
}

export default CarritoContextComponente
