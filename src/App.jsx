import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Inicio/Home'
// import Contacto from './pages/Contacto/Contacto'
// import Nosotros from './pages/Nosotros/Nosotros'
import Error404 from './components/Error404/Error404'
import DetallesProducto from './pages/DetallesProducto/DetallesProducto'

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/contacto" element={<Contacto />} />
					<Route path="/nosotros" element={<Nosotros />} /> */}
					<Route path="/categoria/:category" element={<Home/>} />
					<Route path="/detalle/:id" element={<DetallesProducto />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</Layout>
		</>
	)
}

export default App
