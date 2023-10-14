import axios from 'axios'
import { useEffect, useState } from 'react'
import CardProducts from '../CardProductos/CardProducts'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
	const [productos, setProductos] = useState([])

	const { category } = useParams()

	async function getProductos() {
		try {
			const response = await axios.get('https://fakestoreapi.com/products')

			if (category) {
				const filterCategory = response.data.filter((categoria) => categoria.category === category)
				setProductos(filterCategory)
			} else {
				setProductos(response.data)
			}
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getProductos()
	}, [category])

	return (
		<>
			<div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-3.5">
				{productos && productos.map((producto) => <CardProducts key={producto.id} producto={producto} />)}
			</div>
		</>
	)
}

export default ItemListContainer
