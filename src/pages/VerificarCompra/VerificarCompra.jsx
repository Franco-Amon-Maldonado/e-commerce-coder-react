import { TextField } from '@mui/material'
import {useState} from "react"

function VerificarCompra() {

    const [datos, setDatos] = useState({
        nombre: "",
        telefono:"",
        email:""
    })

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }


	return (
		<main className="container h-screen p-10 md:p-0">
			<h1 className="text-base md:text-2xl [color:#1976D2] font-extrabold text-center mt-10 mx-auto [width:70%;] bg-white border p-3 rounded-2xl shadow-md uppercase">
				Finaliza tu compra
			</h1>

			<form className="bg-white border p-10 rounded-2xl shadow-md uppercase w-full md:[width:50%;] mt-10 mx-auto [height:50%;]">
				<header>
					<h1 className="text-xs text-gray-400" >Ingrese sus datos para finalizar la compra</h1>
				</header>

				<div className="flex gap-5 flex-col mt-10">
					<TextField onChange={handleChangeDatos} name="nombre" type="text" id="outlined-basic" label="Nombre" variant="outlined" />
					<TextField onChange={handleChangeDatos} name="telefono" type="tel" id="outlined-basic" label="Apellido" variant="outlined" />
					<TextField onChange={handleChangeDatos} name="email" type="email" id="outlined-basic" label="Email" variant="outlined" />
				</div>

				<button className="mt-5 mx-auto block text-slate-50 bg-gradient-to-r uppercase self-end font-semibold from-cyan-500 to-blue-500 hover:bg-gradient-to-bl transition-opacity hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-7 py-3 text-center">
					Comprar
				</button>
			</form>
		</main>
	)
}

export default VerificarCompra
