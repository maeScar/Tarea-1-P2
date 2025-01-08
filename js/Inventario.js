
const inventario = {
    producto1: { nombre: "Manzanas", precio: 1.5, cantidad: 100 },
    producto2: { nombre: "Naranjas", precio: 1.2, cantidad: 80 },
    producto3: { nombre: "Plátanos", precio: 0.8, cantidad: 120 },
    producto4: { nombre: "Peras", precio: 1.7, cantidad: 50 }
};

Object.seal(inventario);

// Función Vender un producto
function venderProducto(nombre, cantidad) {
    for (let clave in inventario) {
        const producto = inventario[clave];
        if (producto.nombre === nombre) {
            if (producto.cantidad >= cantidad) {
                producto.cantidad -= cantidad;
                console.log(`Venta exitosa: ${cantidad} ${nombre} vendidos.`);
            } else {
                console.log(`Error: No hay suficiente stock de ${nombre}.`);
            }
            return;
        }
    }
    console.log(`Error: El producto ${nombre} no existe.`);
}

    function aplicarDescuento(porcentaje) {
        for (let clave in inventario) {
            const producto = inventario[clave];
            const descuento = (producto.precio * porcentaje) / 100;
            let nuevoPrecio = producto.precio - descuento;
            if (nuevoPrecio < 0) {
                nuevoPrecio = 0;
            }
    
            producto.precio = nuevoPrecio;
        }
        console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
    }




venderProducto("Manzanas", 20);
venderProducto("Peras", 10);
venderProducto("Uvas", 5); 

aplicarDescuento(10); 

console.log("Inventario final:");
for (let clave in inventario){
    console.log(`${inventario[clave].nombre}: Precio: ${inventario[clave].precio}, Cantidad: ${inventario[clave].cantidad}`);
}