import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

function Home() {
	return (
		<main className="mt-10">
			<h1 className="text-base md:text-3xl bg-white text-center font-extrabold mb-10 [width:70%] m-auto border p-3 rounded-2xl shadow-md">
				Los mejores productos
			</h1>
			<div className="container m-auto">
				<ItemListContainer />
			</div>
		</main>
	)
}

export default Home
