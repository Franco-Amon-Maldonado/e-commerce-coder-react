import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import SumaSvg from '../DetalleProducto/SumaSvg'
import RestaSvg from '../DetalleProducto/RestaSvg'

function CarritoItems({ carrito }) {
	const { title, price, cantidad, image, id } = carrito
	const { eliminarDelCarrito, actualizarCantidadProductoCarrito } = useContext(CarritoContext)

	const handleCantidadSuma = () => {
		actualizarCantidadProductoCarrito(id, cantidad + 1)
	}

	const handleCantidadResta = () => {
		if (cantidad === 1) {
			return
		}
		actualizarCantidadProductoCarrito(id, cantidad - 1)
	}

	return (
		<>
			<article className="grid col-auto md:grid-cols-3 p-5 space-y-3">
				<div className="grid place-items-center mx-auto col-span-3 md:col-span-1">
					<img src={image} alt={`Imagen producto ${title}`} className="w-1/6 md:w-3/6 object-cover " />
				</div>

				<div className="p-5 border flex-col md:grid grid-flow-col grid-cols-2 items-center space-y-2 text-center justify-items-center col-span-3 md:col-span-2">
					<h2 className="text-xs [text-wrap:balance] text-center">{title}</h2>
					<h3 className=" text-sm md:text-xl font-semibold">${price}</h3>
					<div className="gap-4 flex justify-center md:grid md:grid-flow-col place-items-center">
						<h4 className="text-base text-center">Cantidad: {cantidad}</h4>
						<div className="flex lg:flex-col gap-1">
							<button onClick={handleCantidadSuma}>
								<SumaSvg className="text-red-500" />
							</button>

							<button onClick={handleCantidadResta}>
								<RestaSvg cantidad={cantidad} />
							</button>
						</div>
						<button
						onClick={() => eliminarDelCarrito(id)}
						className="bg-red-500 text-xs p-2 inline-block text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300"
					>
						Eliminar
					</button>
					</div>

					
				</div>
			</article>
		</>
	)
}

export default CarritoItems
