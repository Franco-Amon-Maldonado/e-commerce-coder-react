import { useState } from 'react'
import RatingStars from '../RatingStars/RatingStars'
import RestaSvg from './RestaSvg'
import SumaSvg from './SumaSvg'

function DetalleProducto({ producto, agregarProducto, cantidadInicial = 1 }) {
	const [cantidad, setCantidad] = useState(cantidadInicial)

	const { id, title, image, price, description, rate } = producto || {}
	if (!title || !image || !price || !description || !id || !rate === undefined) {
		return null
	}

	const handleCantidadSuma = () => {
		setCantidad(cantidad + 1)
	}

	const handleCantidadResta = () => {
		if (cantidad === 1) {
			return
		}
		setCantidad(cantidad - 1)
	}

	return (
		<>
			<div className=" bg-white border rounded-2xl shadow-lg items-center flex">
				<img className="object-cover w-6/12 md:w-6/12 mx-auto p-3 md:p-0" src={image} alt="" />
			</div>

			<div className=" border p-3 rounded-2xl bg-white shadow-lg flex flex-col justify-between">
				<h3 className="text-xl font-bold text-center [text-wrap:balance]">{title}</h3>
				<div className="flex gap-2 mt-5">
					<span>{rate}</span>
					<span>
						<RatingStars rate={rate} />
					</span>
				</div>

				<div className="text-sm md:text-base mt-10">
					<p className="px-2">{description}</p>
				</div>

				<div className="mt-10 text-end">
					<span className="text-slate-500 mr-5 text-3xl">${price}</span>
				</div>

				<div className="flex gap-3">
					<span>Cantidad:</span>
					<button onClick={handleCantidadResta}>
						<RestaSvg cantidad={cantidad} />
					</button>
					{cantidad}
					<button onClick={handleCantidadSuma}>
						<SumaSvg />
					</button>
				</div>

				<div className="mt-10 flex justify-center">
					<button
						type="button"
						onClick={() => agregarProducto(cantidad)}
						className="text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2"
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default DetalleProducto
