import { createContext, useState } from 'react'

export const CarritoContext = createContext()

function CarritoContextComponente({ children }) {
	const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || [])

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
		localStorage.setItem('carrito', JSON.stringify(productoEliminado))
	}

	const limpiarCarrito = () => {
		setCarrito([])
		localStorage.removeItem('carrito')
	}

	const calcularTotalCarrito = () => {
		const total = carrito.reduce((accum, total) => total.price * total.cantidad + accum, 0)
		return total
	}

	const actualizarCantidadProductoCarrito = (id, nuevaCantidad) => {
		const nuevoCarrito = carrito.map((item) => {
			if (item.id === id) {
				return { ...item, cantidad: nuevaCantidad }
			} else {
				return item
			}
		})

		setCarrito(nuevoCarrito)
		localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
	}

	return (
		<CarritoContext.Provider
			value={{
				carrito,
				agregarProductoCarrito,
				obtenerCantidad,
				limpiarCarrito,
				eliminarDelCarrito,
				calcularTotalCarrito,
				actualizarCantidadProductoCarrito,
			}}
		>
			{children}
		</CarritoContext.Provider>
	)
}

export default CarritoContextComponente
