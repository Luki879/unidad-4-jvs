

const productosEnStock = ["Remera", "Pantalón", "Zapatillas", "Buzo", "Campera"];


productosEnStock.push("Gorra");       
productosEnStock.unshift("Medias");    


const productoEliminado = productosEnStock.pop();
console.log(`Se ha eliminado el elemento: ${productoEliminado}`);


let busqueda = prompt("¿Qué producto querés buscar en el catálogo?");

if (busqueda && productosEnStock.includes(busqueda)) {
    let posicion = productosEnStock.indexOf(busqueda);
    console.log(`El producto "${busqueda}" está en stock en la posición: ${posicion}`);
    alert(`¡Sí! "${busqueda}" está disponible en la posición ${posicion}.`);
} else {
    console.log(`El producto "${busqueda}" no se encuentra en el catálogo.`);
    alert(`El producto "${busqueda}" no está disponible actualmente.`);
}


productosEnStock.splice(2, 1, "Pantalón de Jean");


function listarProductos(lista) {
    console.log("--- CATÁLOGO DE PRODUCTOS EN STOCK ---");
    for (const producto of lista) {
        console.log(`Producto: ${producto}`);
    }
    console.log(`Total disponible: ${lista.length} productos.`);
}

listarProductos(productosEnStock);



function pedirDatos() {
    let nombre = prompt("¿Cuál es tu nombre?");

    let producto = prompt(
        "¿Qué producto querés comprar?\n" +
        "1 - Remera ($15000)\n" +
        "2 - Pantalón ($25000)\n" +
        "3 - Zapatillas ($40000)"
    );

    let cantidad = parseInt(prompt("¿Cuántas unidades querés comprar?"));

    let precio;

    if (producto === "1") {
        producto = "Remera";
        precio = 15000;
    } else if (producto === "2") {
        producto = "Pantalón";
        precio = 25000;
    } else if (producto === "3") {
        producto = "Zapatillas";
        precio = 40000;
    } else {
        alert("Producto inválido.");
        return null;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La cantidad ingresada no es válida.");
        return null;
    }

    return {
        nombre: nombre,
        producto: producto,
        precio: precio,
        cantidad: cantidad
    };
}

function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;

    return total;
}

function aplicarDescuento(total, descuento) {
    let montoDescuento = total * descuento / 100;
    let totalFinal = total - montoDescuento;

    return totalFinal;
}

function mostrarResultado(nombre, producto, cantidad, total, descuento, totalFinal) {
    console.log("===== RESUMEN DE COMPRA =====");
    console.log("Cliente: " + nombre);
    console.log("Producto: " + producto);
    console.log("Cantidad: " + cantidad);
    console.log("Total sin descuento: $" + total);
    console.log("Descuento: " + descuento + "%");
    console.log("Total final: $" + totalFinal);

    alert(
        "===== RESUMEN DE COMPRA =====\n\n" +
        "Cliente: " + nombre + "\n" +
        "Producto: " + producto + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Total sin descuento: $" + total + "\n" +
        "Descuento: " + descuento + "%\n" +
        "TOTAL FINAL: $" + totalFinal
    );
}

const verificarDescuento = (cantidad) => {
    if (cantidad >= 3) {
        return 10;
    } else {
        return 0;
    }
};

let continuar = true;

while (continuar) {

    let datos = pedirDatos();

    if (datos === null) {
        continuar = false;
    } else {

        let total = calcularTotal(datos.precio, datos.cantidad);

        let descuento = verificarDescuento(datos.cantidad);

        let totalFinal = aplicarDescuento(total, descuento);

        mostrarResultado(
            datos.nombre,
            datos.producto,
            datos.cantidad,
            total,
            descuento,
            totalFinal
        );

        let respuesta = prompt(
            "¿Querés realizar otra compra?\n" +
            "Escribí SI o NO"
        );

        if (respuesta.toLowerCase() !== "si") {
            continuar = false;
        }
    }
}

console.log("Simulador finalizado.");
alert("Gracias por usar el simulador.");