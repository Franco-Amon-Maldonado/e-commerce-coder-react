import { createContext, useState } from 'react'
import Swal from 'sweetalert2'

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

	const mensajeConfirmacion = (mensaje, confirmCallback) => {
		Swal.fire({
			title: mensaje.title || 'Confirmación',
			text: mensaje.text || '¿Está seguro de realizar esta acción?',
			icon: mensaje.icon || 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: mensaje.confirmButtonText || 'Si, deseo eliminarlo',
		}).then((result) => {
			if (result.isConfirmed) {
				confirmCallback()
				Swal.fire({
					title: 'Eliminado',
					text: 'Producto eliminado del carrito',
					icon: 'success',
				})
			}
		})
	}

	const eliminarDelCarrito = (id) => {
		const mensaje = {
			title: 'Eliminar producto',
			text: '¿Desea eliminar este producto del carrito?',
			icon: 'warning',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
		}

		mensajeConfirmacion(mensaje, () => {
			const productoEliminado = carrito.filter((producto) => producto.id !== id)
			setCarrito(productoEliminado)
			localStorage.setItem('carrito', JSON.stringify(productoEliminado))
		})
	}

	const limpiarCarrito = () => {
		const mensaje = {
			title: 'Vaciar carrito',
			text: '¿Desea vaciar el carrito?',
			icon: 'warning',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, deseo vaciarlo',
		}

		mensajeConfirmacion(mensaje, () => {
			setCarrito([])
			localStorage.removeItem('carrito')
		})
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
