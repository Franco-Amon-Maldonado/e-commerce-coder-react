import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
	return (
		<main className="mt-8 p-5 md:p-7">
			<section className="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 bg-white gap-5 p-3 place-items-center border rounded-2xl shadow-md">
				<div className="text-2xl md:text-3xl lg:text-5xl p-5 uppercase font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
					Bienvenido a nuestra tienda online
				</div>
				<div className="w-6/12">
					<img className="object-cover w-full" src="svgInicio.svg" alt="Imagen principal" />
				</div>
			</section>
			<h1 className="text-base md:text-2xl mt-10 [color:#1976D2] max-w-screen-lg mx-auto bg-white text-center font-extrabold mb-10 border p-3 rounded-2xl shadow-md uppercase">
				Todos nuestros productos
			</h1>
			<div className="container">
				<ItemListContainer />
			</div>
		</main>
	)
}

export default Home
