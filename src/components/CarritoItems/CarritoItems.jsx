function CarritoItems({carrito}) {

    const { title, price, cantidad} = carrito;

    return ( 
        <div className="flex flex-col">
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{cantidad}</h1>
        </div>
     );
}

export default CarritoItems;