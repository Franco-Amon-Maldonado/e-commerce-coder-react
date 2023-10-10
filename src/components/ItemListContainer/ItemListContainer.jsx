import axios from "axios"
import { useEffect, useState } from "react"
import CardProducts from "../CardProduct/CardProducts"

function ItemListContainer() {
	const [productos, setProductos] = useState([])
	

	async function getProductos(){
		try{
			
			const response = await axios.get('https://fakestoreapi.com/products')
			setProductos(response.data)
		}catch(err){
			console.error(err)
		}
	}

	useEffect(()=>{
		getProductos()
	},[])
	
	
	return (
		<>
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-3.5">
			{productos && productos.map(producto  => (
				<CardProducts key={producto.id} producto={producto}/>
			))}

		</div>
		</>
	)
}

export default ItemListContainer
