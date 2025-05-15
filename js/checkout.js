const tableBody = document.querySelector('tbody')
const btnCompras = document.getElementById('btnComprar');

function retornarTablaHTML(producto) {
    return `<tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.imagen}</td>
            </tr>`
}
if (carritoFrutas.length > 0) {
    carritoFrutas.forEach((producto)=> {
        tableBody.innerHTML += retornarTablaHTML(producto)
    })
}
btnCompras.addEventListener('click',(e) =>{
    if (carritoFrutas.length > 0 ) {
    localStorage.clear()
    tableBody.innerHTML =[]
    carritoFrutas.length = 0;
    Swal.fire("GRACIAS POR SU COMPRA!!");
    }
    else {
        Swal.fire("SU CARRITO SE ENCUENTRA VACIO!")
    }
})

