import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import CarritoItems from '../../components/CarritoItems/CarritoItems'
import CarritoVacio from '../../components/CarritoVacio/CarritoVacio'

function Carrito() {
	const { carrito } = useContext(CarritoContext)

	return (
		<main className="container h-screen">
			<section className="grid grid-cols-3 mt-10 gap-7 p-10">
				<div className="bg-white [minHeight:500px] col-span-3 md:col-span-2 flex justify-center items-center">
					{carrito.length > 0 ? (
						carrito.map((carrito) => <CarritoItems key={carrito.id} carrito={carrito} />)
					) : (
						<CarritoVacio />
					)}
				</div>

				<div className="bg-white h-52 col-span-3 md:col-span-1 sticky top-28">
					<h1>Resumen</h1>
				</div>
			</section>
		</main>
	)
}

export default Carrito
