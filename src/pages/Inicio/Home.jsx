import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
	return (
		<main className="mt-8 p-5 md:p-7">
			<section className="grid  grid-cols-1 md:grid-cols-2 bg-white gap-5 p-3 place-items-center border rounded-2xl shadow-md">
				<div className='text-lg md:text-6xl lg:text-8xl p-5 uppercase font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Bienvenidos a nuestra tienda online</div>
				<div className="w-7/12">
					<img className="object-cover w-full" src="svgInicio.svg" alt="Imagen principal" />
				</div>
			</section>
			<h1 className="text-base md:text-2xl mt-10 [color:#1976D2] bg-white text-center [font-weight:900] mb-10 [width:70%] m-auto border p-3 rounded-2xl shadow-md uppercase">
				Todos nuestros productos
			</h1>
			<div className="container">
				<ItemListContainer />
			</div>
		</main>
	)
}

export default Home
