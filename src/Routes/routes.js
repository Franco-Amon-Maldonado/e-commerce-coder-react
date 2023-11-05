import Carrito from '../pages/Carrito/Carrito'
import DetallesProducto from '../pages/DetallesProducto/DetallesProducto'
import Home from '../pages/Inicio/Home'
import VerificarCompra from '../pages/VerificarCompra/VerificarCompra'

export const routes = [
	{
		id: 'home',
		path: '/',
		Element: Home,
	},
	{
		id: 'categoria',
		path: '/categoria/:id',
		Element: Home,
	},
	{
		id: 'detalle',
		path: '/detalle/:id',
		Element: DetallesProducto,
	},
    {
		id: 'carrito',
		path: '/carrito',
		Element: Carrito,
	},
	{
		id: 'carrito',
		path: '/verificarcompra',
		Element: VerificarCompra
	},
]
