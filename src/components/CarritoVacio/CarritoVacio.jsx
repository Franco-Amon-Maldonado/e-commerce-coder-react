import { Link } from 'react-router-dom'
import SvgCarritoVacio from './SvgCarritoVacio'

function CarritoVacio() {
	return (
		<div className="flex flex-col mt-10 justify-center items-center gap-4">
			<SvgCarritoVacio />
			<h3 className="text-center">¡Empieza un carrito de compras!</h3>
			<Link
				to="/"
				className="text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2"
			>
				Descubre nuestros productos
			</Link>
		</div>
	)
}

export default CarritoVacio
