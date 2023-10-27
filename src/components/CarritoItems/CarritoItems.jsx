function CarritoItems({carrito}) {

    const { nombre, precio} = carrito;

    return ( 
        <div>
            <h1>{nombre}</h1>
            <h1>{precio}</h1>
        </div>
     );
}

export default CarritoItems;