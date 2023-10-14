import RatingStars from '../RatingStars/RatingStars'
import RestaSvg from './RestaSvg'
import SumaSvg from './SumaSvg'

function DetalleProducto({ producto }) {
	const { id, title, image, price, description, rating } = producto || {}
	if (!title || !image || !price || !description || !id || !rating === undefined) {
		return null
	}
	return (
		<>
			<div className="col-span-2 bg-white border p-3 rounded-2xl shadow-lg">
				<img className="object-cover w-5/12 mx-auto h-full" src={image} alt="" />
			</div>

			<div className="border p-3 rounded-2xl bg-white shadow-lg">
				<h3 className="text-xl font-bold text-center [text-wrap:balance]">{title}</h3>
				<div className="flex gap-2 mt-2">
					<span>{rating.rate}</span>
					<span>
						<RatingStars rating={rating} />
					</span>
				</div>

				<div className="mt-10">
					<p>{description}</p>
				</div>

				<div className="mt-10 text-end">
					<span className="text-slate-500 text-3xl">${price}</span>
				</div>

				<div className="flex gap-3">
					<span>Cantidad:</span>
					<SumaSvg />
					2
					<RestaSvg />
				</div>

				<div className="mt-10">
					<button
						type="button"
						className="text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default DetalleProducto
