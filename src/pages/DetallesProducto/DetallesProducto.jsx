import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import DetalleProducto from "../../components/DetalleProducto/DetalleProducto"
import Spinner from "../../components/Spinner/Spinner"

function DetallesProducto() {
    const [producto, setProducto] = useState({})
	const [spinner, setSpinner] = useState(false)
	
    let { id } = useParams()


	async function getProducto(){
		setSpinner(true)
		try{
			
			const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
			setProducto(response.data)
		}catch(err){
			console.error(err)
		}finally{
			setSpinner(false)
		}
	}

	

	useEffect(()=>{
		getProducto()
	},[id])

    
    
    return ( 
        <main className="grid place-items-center p-10 m-auto container">
            {spinner ? <Spinner/> : (producto && producto.id ? <DetalleProducto producto={producto} /> : null)}
        </main>
     );
}

export default DetallesProducto;