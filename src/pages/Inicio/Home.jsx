import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
	return (
		<main className="mt-10">
			<h1 className="text-base md:text-2xl [color:#1976D2] bg-white text-center [font-weight:900] mb-10 [width:70%] m-auto border p-3 rounded-2xl shadow-md uppercase">
				Todos nuestros productos
			</h1>
			<div className="container m-auto">
				<ItemListContainer />
			</div>
		</main>
	)
}

export default Home
