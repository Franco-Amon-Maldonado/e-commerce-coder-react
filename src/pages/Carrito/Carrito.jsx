import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import CarritoItems from '../../components/CarritoItems/CarritoItems'
import CarritoVacio from '../../components/CarritoVacio/CarritoVacio'

function Carrito() {
	const { carrito, limpiarCarrito } = useContext(CarritoContext)

	return (
		<main className="container h-screen">
			<section className="grid grid-cols-3 mt-10 gap-7 p-10">
				<div className="bg-white [minHeight:500px] col-span-3 md:col-span-2 rounded-md">
					<h1 className='text-2xl ml-5 p-5 font-bold'>Productos</h1>
					{carrito.length > 0 ? (
						carrito.map((carrito) => <CarritoItems key={carrito.id} carrito={carrito} />)
					) : (
						<CarritoVacio />
					)}
				</div>

				<div className="bg-white h-52 col-span-3 md:col-span-1 sticky top-28 rounded-md">
					<h2 className="font-bold text-2xl text-center p-4 border-b-gray-500">Resumen de compra</h2>
					<div>{carrito.length > 0 ? <button onClick={limpiarCarrito}>Vaciar Carrito</button> : null}</div>
				</div>
			</section>
		</main>
	)
}

export default Carrito
