import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

function CartSvg() {
	const { carrito } = useContext(CarritoContext)
	return (
		<>
			<span style={{ width: '50px', height: '50px' }} className="relative">
				<Link to="/carrito">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 64 64"
						enableBackground="new 0 0 64 64"
						xmlSpace="preserve"
					>
						<g id="cart-outline-bot_x5F_s1g1_x5F_s2g1_x5F_s3g1_x5F_s4g2">
							<path
								fill="none"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								d="   M21.09,24.548l-1.34-6.315c-0.397-1.815-1.978-3.074-3.858-3.074H14.5"
							/>

							<circle
								fill="#E6E9EC"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								cx="28.319"
								cy="46"
								r="2.182"
							/>

							<circle
								fill="#E6E9EC"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								cx="42.319"
								cy="46"
								r="2.182"
							/>
						</g>
						<g id="cart-outline-top_x5F_s1g1_x5F_s2g2_x5F_s3g1_x5F_s4g2_x5F_background">
							<g id="Layer_5"></g>

							<path
								fill="#FFFFFF"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								d="   M40.346,16.25h-9.691c-1.19,0-2.154,0.965-2.154,2.154V21.5h14v-3.096C42.5,17.215,41.535,16.25,40.346,16.25z"
							/>
						</g>
						<g id="cart-outline-top_x5F_s1g1_x5F_s2g1_x5F_s3g1_x5F_s4g2_x5F_background">
							<path
								fill="#FFFFFF"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								d="   M41.507,39H29.131c-2.891,0-5.38-1.92-5.947-4.587l-2.18-10.254c-0.292-1.376,0.826-2.659,2.317-2.659h23.995   c1.491,0,2.609,1.283,2.317,2.659l-2.18,10.254C46.887,37.08,44.398,39,41.507,39z"
							/>
						</g>
						<g id="cart-outline-top_x5F_s1g1_x5F_s2g2_x5F_s3g1_x5F_s4g1_x5F_background">
							<line
								fill="none"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								x1="40.569"
								y1="33.127"
								x2="40.569"
								y2="28.068"
							/>

							<line
								fill="none"
								stroke="#000000"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								x1="30.069"
								y1="33.127"
								x2="30.069"
								y2="28.068"
							/>
						</g>
					</svg>
				</Link>
				<span className="absolute top-0 right-0">
					<sup className="block bg-red-700 text-white rounded-xl p-2 py-3">{carrito.length}</sup>
				</span>
			</span>
		</>
	)
}

export default CartSvg
