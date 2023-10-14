import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto'
import Spinner from '../../components/Spinner/Spinner'
import IconBack from './IconBack'

function DetallesProducto() {
	const [producto, setProducto] = useState({})
	const [spinner, setSpinner] = useState(false)

	let { id } = useParams()

	const navegate = useNavigate()

	async function getProducto() {
		setSpinner(true)
		try {
			const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
			setProducto(response.data)
		} catch (err) {
			console.error(err)
		} finally {
			setSpinner(false)
		}
	}

	useEffect(() => {
		getProducto()
	}, [id])

	return (
		<main className="container">
			<h1 className="text-base md:text-2xl [color:#1976D2] font-extrabold text-center mt-10 mx-auto [width:70%;] bg-white border p-3 rounded-2xl shadow-md uppercase">
				Detalles del producto
			</h1>
			<Link onClick={() => navegate(-1)} className="flex items-center gap-3 font-bold mt-5">
				<IconBack /> Volver
			</Link>
			<div className='flex justify-center'>
				{spinner ? <Spinner />  : producto && producto.id ? <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10"><DetalleProducto producto={producto} /></div>  : null}
			</div>
		</main>
	)
}

export default DetallesProducto
