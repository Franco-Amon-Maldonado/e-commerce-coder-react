import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import DetalleProducto from "../../components/DetalleProducto/DetalleProducto"

function DetallesProducto() {
    const [producto, setProducto] = useState({})
	
    let { id } = useParams()


	async function getProducto(){
		try{
			
			const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
			setProducto(response.data)
		}catch(err){
			console.error(err)
		}
	}

	

	useEffect(()=>{
		getProducto()
	},[id])

    
    
    return ( 
        <div>
            {producto.id ? <DetalleProducto producto={producto}/> : null}
        </div>
     );
}

export default DetallesProducto;