import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'
import DropdownMenu from './DropdownMenu'

function NavBar() {
	return (
		<>
			<div className="flex items-center justify-center">
				<Link to="/">Logo</Link>
			</div>
			<div className="nav">
				<nav>
					<ul className="flex items-center justify-center">
						<li>
							<Link to="/">Inicio</Link>
						</li>
						{/* <li>
							<Link to="/nosotros">Nosotros</Link>
						</li>
						<li>
							<Link to="/contacto">Contacto</Link>
						</li> */}
						<li className="flex flex-col">
							<DropdownMenu />
						</li>
						<li className="flex">
							<CartWidget />
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default NavBar
