import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'
import DropdownMenu from './DropdownMenu'

function NavBar() {
	return (
		<>
			<div className="flex items-center justify-center text-sm md:text-base">
				<Link to="/">Tienda Online</Link>
			</div>
			<div className="nav px-2">
				<nav>
					<ul className="flex items-center justify-center text-xs md:text-base">
						<li>
							<Link to="/">Inicio</Link>
						</li>
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
