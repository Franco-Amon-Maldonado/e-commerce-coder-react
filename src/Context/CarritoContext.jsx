import { createContext, useState } from 'react'

export const CarritoContext = createContext()

function CarritoContextComponente({ children }) {
	const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])

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
			localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
		} else {
			setCarrito([...carrito, producto])
			localStorage.setItem('carrito', JSON.stringify([...carrito, producto]))
		}
	}

	const obtenerCantidad = (id) => {
		const productoCantidad = carrito.find((carrito) => carrito.id === id)
		return productoCantidad?.cantidad
	}

	const eliminarDelCarrito = (id) => {
		const productoEliminado = carrito.filter((producto) => producto.id !== id)
		setCarrito(productoEliminado)
		localStorage.setItem('carrito', JSON.stringify(productoEliminado));
	} 

	const limpiarCarrito = () => {
		setCarrito([])
		localStorage.removeItem('carrito')

	}

	return (
		<CarritoContext.Provider
			value={{
				carrito,
				agregarProductoCarrito,
				obtenerCantidad,
				limpiarCarrito,
				eliminarDelCarrito
			}}
		>
			{children}
		</CarritoContext.Provider>
	)
}

export default CarritoContextComponente
