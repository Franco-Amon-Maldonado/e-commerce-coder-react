import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto'
import Spinner from '../../components/Spinner/Spinner'
import IconVolver from './IconVolver'
import { CarritoContext } from '../../Context/CarritoContext'
import { db } from '../../../fireStorageConfig'
import { collection, doc, getDoc } from 'firebase/firestore'

function DetallesProducto() {
	const [producto, setProducto] = useState({})
	const [spinner, setSpinner] = useState(false)

	let { id } = useParams()

	const navegate = useNavigate()

	const { agregarProductoCarrito, obtenerCantidad } = useContext(CarritoContext)

	let cantidadActual = obtenerCantidad(producto.id)

	useEffect(() => {
		async function getProducto() {
			setSpinner(true)
			try {
				const response = await collection(db, 'products')
				const itemProducto = doc(response, id)
				const data = await getDoc(itemProducto)
				setProducto({ id: data.id, ...data.data() })
			} catch (err) {
				console.error(err)
			} finally {
				setSpinner(false)
			}
		}
		getProducto()
	}, [id])

	const agregarProducto = (cantidad) => {
		let nuevoObjeto = {
			...producto,
			cantidad: cantidad,
		}
		agregarProductoCarrito(nuevoObjeto)
	}

	return (
		<main className="container">
			<h1 className="text-base md:text-2xl [color:#1976D2] font-extrabold text-center mt-10 mx-auto [width:70%;] bg-white border p-3 rounded-2xl shadow-md uppercase">
				Detalles del producto
			</h1>
			<Link onClick={() => navegate(-1)} className="flex items-center gap-3 font-bold mt-5">
				<IconVolver /> Volver
			</Link>
			<div className="flex justify-center">
				{spinner ? (
					<Spinner />
				) : producto && producto.id ? (
					<div className="grid md:grid-cols-3 gap-4 p-10">
						<DetalleProducto producto={producto} agregarProducto={agregarProducto} cantidadInicial={cantidadActual} />
					</div>
				) : null}
			</div>
		</main>
	)
}

export default DetallesProducto
