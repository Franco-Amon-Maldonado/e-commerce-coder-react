import { TextField, dividerClasses } from '@mui/material'
import { useContext, useState } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { db } from '../../../fireStorageConfig'
import { Link } from 'react-router-dom'

function VerificarCompra() {
	const [usuarioDatos, setUsuarioDatos] = useState({
		nombre: '',
		telefono: '',
		email: '',
	})

	const [ordenId, setOrdenId] = useState(null)

	const { carrito, calcularTotalCarrito } = useContext(CarritoContext)

	const total = calcularTotalCarrito()

	const handleChangeDatos = (e) => {
		setUsuarioDatos({
			...usuarioDatos,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		let orden = {
			buyer: usuarioDatos,
			items: carrito,
			total,
			date: serverTimestamp(),
		}

		const colleccionOrdenes = collection(db, 'ordenes')

		const respuesta = await addDoc(colleccionOrdenes, orden)
		setOrdenId(respuesta.id)
	}

	return (
		<main className="container h-screen p-10 md:p-0">
			<h1 className="text-base md:text-2xl [color:#1976D2] font-extrabold text-center mt-10 mx-auto [width:70%;] bg-white border p-3 rounded-2xl shadow-md uppercase">
				Finaliza tu compra
			</h1>

			<>
				{ordenId ? (
					<div className="bg-white border p-10 rounded-2xl shadow-md w-full md:[width:50%;] mt-10 mx-auto [height:50%;] flex flex-col items-center justify-evenly">
						<h2 className="text-center font-bold text-3xl">¡Gracias por su compra!</h2>
						<p className="text-center mt-10 text-sm">
							Su numero de ticket es: <span className="[color:#2563EB] font-bold text-lg">{ordenId}</span>{' '}
						</p>
                        <Link className=' mx-auto block text-slate-50 bg-gradient-to-r uppercase self-end font-semibold from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-7 py-3 text-center' to="/">Volver al inicio</Link>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="bg-white border p-10 rounded-2xl shadow-md uppercase w-full md:[width:50%;] mt-10 mx-auto [height:50%;]"
					>
						<header>
							<h2 className="text-xs text-gray-400">Ingrese sus datos para finalizar la compra</h2>
						</header>

						<div className="flex gap-5 flex-col mt-10">
							<TextField
								onChange={handleChangeDatos}
								name="nombre"
								type="text"
								id="outlined-basic"
								label="Nombre"
								variant="outlined"
							/>
							<TextField
								onChange={handleChangeDatos}
								name="telefono"
								type="tel"
								id="outlined-basic"
								label="Teléfono"
								variant="outlined"
							/>
							<TextField
								onChange={handleChangeDatos}
								name="email"
								type="email"
								id="outlined-basic"
								label="Email"
								variant="outlined"
							/>
						</div>

						<button className="mt-5 mx-auto block text-slate-50 bg-gradient-to-r uppercase self-end font-semibold from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-7 py-3 text-center">
							Comprar
						</button>
					</form>
				)}
			</>
		</main>
	)
}

export default VerificarCompra
