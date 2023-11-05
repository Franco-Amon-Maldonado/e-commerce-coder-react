import { useEffect, useState } from 'react'
import CardProducts from '../CardProductos/CardProducts'
import { useParams } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../fireStorageConfig'
import Spinner from '../Spinner/Spinner'

function ItemListContainer() {
	const [productos, setProductos] = useState([])
	const [spinner, setSpinner] = useState(false)

	const { id } = useParams()

	useEffect(() => {
		async function getProductos() {
			setSpinner(true)
			try {
				let productosCollection = collection(db, 'products')

				const respuesta = await getDocs(productosCollection)
				const data = await respuesta.docs.map((productos) => {
					return {
						id: productos.id,
						...productos.data(),
					}
				})

				if (id) {
					const filterCategoria = data.filter((categoria) => categoria.category === id)
					setProductos(filterCategoria)
				} else {
					setProductos(data)
				}
			} catch (err) {
				console.error(err)
			} finally {
				setSpinner(false)
			}
		}
		getProductos()
	}, [id])

	return (
		<>
			{spinner ? (
				<div className=" grid place-items-center">
					<Spinner />
				</div>
			) : (
				<div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-3.5">
					{productos && productos.map((producto) => <CardProducts key={producto.id} producto={producto} />)}
				</div>
			)}
		</>
	)
}

export default ItemListContainer
