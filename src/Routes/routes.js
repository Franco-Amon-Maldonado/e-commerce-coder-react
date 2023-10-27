import DetallesProducto from '../pages/DetallesProducto/DetallesProducto'
import Home from '../pages/Inicio/Home'

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
]
