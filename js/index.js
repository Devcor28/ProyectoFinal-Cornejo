
const contenedor = document.querySelector('div.container');
const URL = '/productos.json';
const productos = [];

function retornarCardHTML(producto) {
    return  `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

const activarClickEnBotones= ()=> {
    const botonesAgregar = document.querySelectorAll('button.button-outline.button-add');
    if (botonesAgregar !== null) {
        for (let boton of botonesAgregar) {
            boton.addEventListener('click', (e) =>{
                agregarAlCarrito(e.target.id)
                almacenarCarrito()
                Swal.fire("Producto Agregado!");
            })
        }
    }
}

const cargarProducto = (array)=>{
    if (array.length > 0) {
    array.forEach((producto) => {
        contenedor.innerHTML += retornarCardHTML(producto);     
        })
        activarClickEnBotones()
    }
    
}
function obtenerPrductos() {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => productos.push(...data))
    .then(()=> cargarProducto(productos))
}
obtenerPrductos()
