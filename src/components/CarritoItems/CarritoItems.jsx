import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'

function CarritoItems({ carrito }) {
	const { title, price, cantidad, image, id } = carrito
	const { eliminarDelCarrito } = useContext(CarritoContext)

	return (
		<>
			<article className="flex justify-between p-8 gap-3 [min-height:100px]">
				<img src={image} alt={`Imagen producto ${title}`} className=" w-20 object-center" />
				<div className="flex gap-10 p-5 w-11/12 border justify-between items-center">
					<h1>{title}</h1>
					<h1>{price}</h1>
					<h1>Cantidad: {cantidad}</h1>
					<button
						onClick={() => eliminarDelCarrito(id)}
						className="bg-red-500 p-3 block text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300"
					>
						Eliminar
					</button>
				</div>
			</article>
		</>
	)
}

export default CarritoItems
