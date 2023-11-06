import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import CarritoItems from '../../components/CarritoItems/CarritoItems'
import CarritoVacio from '../../components/CarritoVacio/CarritoVacio'
import { Link } from 'react-router-dom'

function Carrito() {
	const { carrito, limpiarCarrito, calcularTotalCarrito } = useContext(CarritoContext)

	const total = calcularTotalCarrito()

	return (
		<main className="container h-screen">
			<section className="grid grid-cols-3 mt-10 gap-7 p-10">
				<div className="bg-white [minHeight:500px] col-span-3 lg:col-span-2 rounded-md">
					<h1 className="text-2xl ml-5 p-5 font-bold">Productos</h1>
					{carrito.length > 0 ? (
						carrito.map((carrito) => <CarritoItems key={carrito.id} carrito={carrito} />)
					) : (
						<CarritoVacio />
					)}
				</div>

				<div className="bg-white h-72 col-span-3 lg:col-span-1 sticky top-28 rounded-md">
					<h2 className="font-bold text-2xl text-center p-4 border-b-gray-500">Resumen de compra</h2>

					<div>
						{carrito.length > 0 && (
							<div className="flex flex-col text-center  gap-6 mt-5">
								<h2 className="text-2xl font-bold"> Total a pagar: ${total}</h2>
								<Link to="/verificar-compra" className="text-slate-50 bg-gradient-to-r self-center uppercase font-semibold from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2">
									finaliza compra
								</Link>
								<button
									className="text-slate-50 bg-gradient-to-r self-center  uppercase font-semibold from-red-500 to-red-700 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2"
									onClick={limpiarCarrito}
								>
									Vaciar Carrito
								</button>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	)
}

export default Carrito
