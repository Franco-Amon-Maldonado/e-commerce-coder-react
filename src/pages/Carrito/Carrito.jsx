import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import CarritoItems from '../../components/CarritoItems/CarritoItems'
import CarritoVacio from '../../components/CarritoVacio/CarritoVacio'
import { Link, useNavigate } from 'react-router-dom'
import IconVolver from '../DetallesProducto/IconVolver'

function Carrito() {
	const { carrito, limpiarCarrito, calcularTotalCarrito } = useContext(CarritoContext)

	const total = calcularTotalCarrito()
	const navegate = useNavigate()
	return (
		<main className="container">
			<h1 className="text-base md:text-2xl [color:#1976D2] font-extrabold text-center mt-10 mx-auto [width:70%;] bg-white border p-3 rounded-2xl shadow-md uppercase">
				Carrito de compras
			</h1>
			<div className="flex p-4 justify-between mt-5">
				<Link onClick={() => navegate(-1)} className="flex items-center gap-3 font-bold ">
					<IconVolver /> Volver
				</Link>
				<Link className="font-semibold underline" onClick={() => navegate(-2)}>
					Ir al Inicio
				</Link>
			</div>

			<section className="grid grid-cols-3 mt-10 gap-7 p-5 md:p-0">
				<div className="bg-white col-span-3 lg:col-span-2 rounded-md overflow-y-auto max-h-80 md:max-h-fit">
					<h1 className=" text-lg md:text-2xl ml-5 p-5 font-bold text-center">Productos</h1>
					{carrito.length > 0 ? (
						carrito.map((carrito) => <CarritoItems key={carrito.id} carrito={carrito} />)
					) : (
						<CarritoVacio />
					)}
				</div>

				{carrito.length > 0 && (
					<div className="bg-white h-72 col-span-3 lg:col-span-1 sticky top-28 rounded-md">
						<h2 className="font-bold text-lg md:text-2xl text-center p-4 border-b-gray-500">Resumen de compra</h2>

						<div>
							{carrito.length > 0 && (
								<div className="flex flex-col text-center gap-6 mt-5">
									<h2 className="text-base md:text-2xl font-bold"> Total a pagar: ${parseFloat(total).toFixed(2)}</h2>
									<Link
										to="/verificar-compra"
										className="text-slate-50 bg-gradient-to-r self-center uppercase font-semibold from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-xs px-7 py-3 text-center"
									>
										finaliza compra
									</Link>
									<button
										className="text-slate-50 bg-gradient-to-r self-center  uppercase font-semibold from-red-500 to-red-700 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none rounded-lg text-xs px-7 py-3 text-center"
										onClick={limpiarCarrito}
									>
										Vaciar Carrito
									</button>
								</div>
							)}
						</div>
					</div>
				)}
			</section>
		</main>
	)
}

export default Carrito
