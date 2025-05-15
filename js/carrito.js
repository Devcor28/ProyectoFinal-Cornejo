const agregarAlCarrito = (frutaId) => {
    if (frutaId > 0) {
        let productoEncontrado = productos.find((producto)=> producto.id === parseInt(frutaId))
        if (productoEncontrado !== undefined) {
            carritoFrutas.push(productoEncontrado)
            console.table(productoEncontrado)
        }
    }

}

const almacenarCarrito = () => {
    if (carritoFrutas.length > 0) {
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas));
    }
}
const recuperarCarrito = () => {
        return JSON.parse(localStorage.getItem('carritoFrutas')) || [];
}
const carritoFrutas = recuperarCarrito();

