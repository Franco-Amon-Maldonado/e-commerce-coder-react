import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import CarritoContextComponente from './Context/CarritoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CarritoContextComponente>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CarritoContextComponente>
	</React.StrictMode>
)
