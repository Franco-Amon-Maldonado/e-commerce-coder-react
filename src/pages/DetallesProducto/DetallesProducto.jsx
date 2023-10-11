import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto'
import Spinner from '../../components/Spinner/Spinner'

function DetallesProducto() {
	const [producto, setProducto] = useState({})
	const [spinner, setSpinner] = useState(false)

	let { id } = useParams()

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
			<h1 className='text-3xl font-extrabold text-center mt-10 mx-auto [width:70%;] border p-3 rounded-2xl shadow-md'>Detalles del producto</h1>
			<div className="grid grid-cols-3 gap-4 p-10">
				{spinner ? <Spinner /> : producto && producto.id ? <DetalleProducto producto={producto} /> : null}
			</div>
		</main>
	)
}

export default DetallesProducto
