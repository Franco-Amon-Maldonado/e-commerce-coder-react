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
			<article className="grid grid-cols-auto md:grid-cols-3 p-8 [min-height:100px]">
				<div className="col-span 3 md:col-span-1 mx-auto">
					<img src={image} alt={`Imagen producto ${title}`} className=" w-36 object-cover" />
				</div>

				<div className="flex flex-col lg:flex-row gap-10 col-auto md:col-span-2 p-5 border justify-between items-center">
					<h2 className="text-sm [text-wrap:balance] text-center">{title}</h2>
					<h3 className="text-xl font-semibold">${price}</h3>
					<div className="flex lg:flex-row gap-4">
						<h4 className="text-base text-center">Cantidad: {cantidad}</h4>
						<div className="flex lg:flex-col gap-1">
							<button onClick={handleCantidadSuma}>
								<SumaSvg className="text-red-500" />
							</button>

							<button onClick={handleCantidadResta}>
								<RestaSvg cantidad={cantidad}/>
							</button>
						</div>
					</div>

					<button
						onClick={() => eliminarDelCarrito(id)}
						className="bg-red-500 text-sm p-2 block text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300"
					>
						Eliminar
					</button>
				</div>
			</article>
		</>
	)
}

export default CarritoItems
