import axios from 'axios'
import { useEffect, useState } from 'react'
import CardProducts from '../CardProductos/CardProducts'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
	const [productos, setProductos] = useState([])

	const { id } = useParams()

	useEffect(() => {
		async function getProductos() {
			try {
				const response = await axios.get('https://fakestoreapi.com/products')

				if (id) {
					const filterCategoria = response.data.filter((categoria) => categoria.category === id)
					setProductos(filterCategoria)
				} else {
					setProductos(response.data)
				}
			} catch (err) {
				console.error(err)
			}
		}
		getProductos()
	}, [id])



	return (
		<>
			<div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-3.5">
				{productos && productos.map((producto) => <CardProducts key={producto.id} producto={producto} />)}
			</div>
		</>
	)
}

export default ItemListContainer
