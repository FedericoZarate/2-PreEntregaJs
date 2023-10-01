//array de productos.
let productos = [
  { nombre: "termo 1 lt", precio: 25000 },
  { nombre: "termo 1.25 lt", precio: 28000 },
  { nombre: "mate acero inoxidable", precio: 15000 },
  { nombre: "bolso matero", precio: 9000 },
];

// la funcion, al elegir la opcion 2, busca los productos y los agrega al carrito.
function buscarProducto(nombre) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      return productos[i];
    }
  }
  return null;
}

//carrito y total en cero.
let carrito = [];
let total = 0;

//ciclo del e-commerce
while (true) {
  let opcion = prompt(
    "Bienvenido a ProductoMates🧉.!! \n¿En que le podemos ayudar?\n1. Ver productos.\n2. Agregar Productos.\n3. Vaciar carrito.\n4. Finalizar compra.\n5. Salir."
  );

  //condicionales....

  //opcion 1, busca en el array productos y lo muestra con el nombre y precio.
  if (opcion === "1") {
    let productosDisponibles = "Productos:\n";
    for (let i = 0; i < productos.length; i++) {
      productosDisponibles +=
        productos[i].nombre + ": " + productos[i].precio + " ARS\n";
    }
    alert(productosDisponibles);

    //opcion 2, pide el producto que queres llevar.

    // si el producto existe, seleccionas la cantidad que queres, se guarda en la variable carrito que se suma el producto + el precio y hace el calculo del subtotal
  } else if (opcion === "2") {
    let nombreProducto = prompt("Ingrese el producto que desea llevar:");
    let producto = buscarProducto(nombreProducto);
    if (producto === null) {
      alert("Lo sentimos, no tenemos ese producto en stock o no existe.");
    } else {
      let cantidad = prompt("¿Cuantos desea?:");
      let subtotal = producto.precio * cantidad;
      carrito.push({
        producto: producto,
        cantidad: cantidad,
        subtotal: subtotal,
      });
      total += subtotal;
      alert("Producto agregado al carrito con éxito.");
    }

    //opcion 3 te pregunta por seguridad si ¿se quiere vaciar el carrito o no? Al ingresar "si" se llama a la funcion vaciar carrito, quedando en 0
  } else if (opcion === "3") {
    let vaciarCarritoCompras = prompt("Quieres vaciar el carrito? (si/no)");
    if (vaciarCarritoCompras.toLowerCase() === "si") {
      vaciarCarrito();
    }

    //opcion 4 te lleva al carrito.
  } else if (opcion === "4") {
    if (carrito.length === 0) {
      alert("No hay productos.");
    } else {
      let factura = "Sus productos:\n";
      for (let i = 0; i < carrito.length; i++) {
        factura +=
          carrito[i].cantidad +
          " x " +
          carrito[i].producto.nombre +
          " = " +
          carrito[i].subtotal.toFixed(2) +
          " ARS\n";
      }

      // "ACEPTAR" o "CANCELAR" para confirmar la compra.

      //si "ACEPTAR", hay un mensaje diciendo que se completó la compra, llama a la funcion vaciar carrito antes mencionada.

      // si pone "CANCELAR", llama a la funcion vaciar carrito.

      factura +=
        "Total: " + total.toFixed(2) + " ARS\nDeseas confirmar tu compra?";
      if (confirm(factura)) {
        alert("Gracias por su compra. Esperamos vuelvas pronto!");
      } else {
        alert("Compra cancelada. Que tengas buen dia!");
      }
      vaciarCarrito();
    }

    //opcion 5, el ciclo finaliza con el break.
  } else if (opcion === "5") {
    break;

    // en caso de ingresar otra cosa que no sea las opciones del 1 al 5, te avisará que no reconoce la opcion.
  } else {
    alert("Opción desconocida, pruebe de nuevo.");
  }
}

//el carrito se vacía y el total se va a cero.

function vaciarCarrito() {
  carrito = [];
  total = 0;
  alert("El carrito esta vacio.");
}
