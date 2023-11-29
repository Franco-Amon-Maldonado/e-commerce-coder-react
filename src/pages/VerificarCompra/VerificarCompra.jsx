import { TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { serverTimestamp, collection, addDoc } from 'firebase/firestore'
import { db } from '../../../fireStorageConfig'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import IconVolver from '../DetallesProducto/IconVolver'

function VerificarCompra() {
	const [error, setError] = useState({})
	const [usuarioDatos, setUsuarioDatos] = useState({
		nombre: '',
		telefono: '',
		email: '',
	})

	const navegate = useNavigate()

	const [ordenId, setOrdenId] = useState(null)

	const { carrito, calcularTotalCarrito, limpiarCarrito } = useContext(CarritoContext)

	const total = calcularTotalCarrito()

	const handleChangeDatos = (e) => {
		setUsuarioDatos({
			...usuarioDatos,
			[e.target.name]: e.target.value,
		})
	}

	const notificacion = () => {
		Swal.fire({
			title: 'Compra realizada con éxito',
			text: 'Pulse en el boton para continuar',
			icon: 'success',
		})
	}

	const validacionForm = () => {
		let errors = {}
		let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
		let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
		let regexTelefono = /^[0-9]{1,11}$/

		if (!usuarioDatos.nombre.trim()) {
			errors.nombre = 'El campo nombre es requerido'
		} else if (!regexNombre.test(usuarioDatos.nombre.trim())) {
			errors.nombre = "El campo 'nombre' solo acepta letras y espacios en blanco "
		}

		if (!usuarioDatos.telefono.trim()) {
			errors.telefono = 'El campo telefono es requerido o es incorrecto'
		} else if (!regexTelefono.test(usuarioDatos.telefono.trim())) {
			errors.telefono = "El campo 'telefono' es incorrecto"
		}

		if (!usuarioDatos.email.trim()) {
			errors.email = 'El campo email es requerido o es incorrecto'
		} else if (!regexEmail.test(usuarioDatos.email.trim())) {
			errors.email = "El campo 'email' es incorrecto"
		}

		return errors
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const erroresTemp = validacionForm()

		if (Object.keys(erroresTemp).length > 0) {
			setError(erroresTemp)
			return
		}

		let orden = {
			buyer: usuarioDatos,
			items: carrito,
			total,
			date: serverTimestamp(),
		}

		try {
			const colleccionOrdenes = collection(db, 'ordenes')

			const respuesta = await addDoc(colleccionOrdenes, orden)
			setOrdenId(respuesta.id)
			notificacion()
			limpiarCarrito()
		} catch (error) {
			console.error(error)
		}
	}

	const handleBlur = (campo) => {
		setError({ ...error, [campo]: validacionForm()[campo] })
	}

	return (
		<main className="container h-screen p-10 md:p-0">
			<h1 className="text-base md:text-2xl [color:#1976D2] font-extrabold text-center mt-10 mx-auto [width:70%;] bg-white border p-3 rounded-2xl shadow-md uppercase">
				Finaliza tu compra
			</h1>
			<div className="flex justify-between mt-5">
				<Link onClick={() => navegate(-1)} className="flex items-center gap-3 font-bold ">
					<IconVolver /> Volver
				</Link>
				<Link className="font-semibold underline" onClick={() => navegate(-3)}>
					Ir al Inicio
				</Link>
			</div>

			<>
				{ordenId ? (
					<div className="bg-white border p-10 rounded-2xl shadow-md w-full md:[width:50%;] mt-10 mx-auto [height:50%;] flex flex-col items-center justify-evenly">
						<h2 className="text-center font-bold text-3xl">¡Gracias por su compra!</h2>
						<p className="text-center mt-10 text-sm">
							Su numero de ticket es: <span className="[color:#2563EB] font-bold text-lg">{ordenId}</span>{' '}
						</p>
						<Link
							className=" mx-auto block text-slate-50 bg-gradient-to-r uppercase self-end font-semibold from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-7 py-3 text-center"
							to="/"
						>
							Volver al inicio
						</Link>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="bg-white border p-10 rounded-2xl shadow-md uppercase w-full max-w-2xl mt-10 mx-auto"
					>
						<header>
							<h2 className="text-xs text-gray-400">Ingrese sus datos para finalizar la compra</h2>
						</header>

						<div className="flex gap-5 flex-col mt-10">
							<TextField
								onChange={handleChangeDatos}
								onBlur={() => handleBlur('nombre')}
								name="nombre"
								type="text"
								id="outlined-basic"
								label="Nombre"
								variant="outlined"
							/>

							{error.nombre && <p className="text-red-500 text-xs">{error.nombre}</p>}
							<TextField
								onChange={handleChangeDatos}
								onBlur={() => handleBlur('telefono')}
								name="telefono"
								type="tel"
								id="outlined-basic"
								label="Teléfono"
								variant="outlined"
							/>
							{error.telefono && <p className="text-red-500 text-xs">{error.telefono}</p>}
							<TextField
								onChange={handleChangeDatos}
								onBlur={() => handleBlur('email')}
								name="email"
								type="email"
								id="outlined-basic"
								label="Email"
								variant="outlined"
							/>
							{error.email && <p className="text-red-500 text-xs">{error.email}</p>}
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
