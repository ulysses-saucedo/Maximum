class Producto {

    constructor (nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
// Funciones

function existeElProducto(nombreDelProducto){

    let encontrado = false;

    for(const producto of ListaDeProductos){

        if(producto.nombre === nombreDelProducto){
            encontrado = true;
            break;

        }
    }
    return encontrado;
}

function agregarProducto(){

    let productoAIngresar = prompt("Ingrese el nombre del prducto que desea agregar");
    while(!existeElProducto(productoAIngresar)){
        productoAIngresar = prompt("Ingrese el nombre del prducto que desea agregar");
    }

    let stock = parseInt(prompt("Ingrese la cantidad que desea agregar"));
    while(stock <= 0){
        stock = parseInt(prompt("Ingrese un stock valido"));
    }

    carrito.push({
        nombre: productoAIngresar,
        cantidad: stock,
    })

}

function finalizarCompra(){
    let mensaje = "Los Productos que agrego son:"

    for (const productoAgregadoAlCarrito of carrito){

        mensaje += productoAgregadoAlCarrito.nombre + " - Cantidad:" + productoAgregadoAlCarrito.cantidad + "\n";

    }
}
// inicio de programa

const ListaDeProductos = [
    new Producto ("Aquarius", 900, 30),
    new Producto ("Levite", 800, 35),
    new Producto ("Baggio Fresh", 500, 80),
    new Producto ("Coca Cola", 1200, 40,),
    new Producto ("Sprite", 1200, 50),
    new Producto ("Fanta", 1200, 50),
    new Producto ("Cepita", 900, 100),
    new Producto ("Soda", 450, 100),
    new Producto ("Yerba Mañanita", 950, 70),
    new Producto ("Yerba Taragüi", 980, 80),
    new Producto ("Fideo Matarazzo", 500, 70),
    new Producto ("Fideo La Providencia", 400, 75),
    new Producto ("Arroz Molino Don Jose", 700, 100),
    new Producto ("Arroz Amanda", 650, 80),
    new Producto ("Harina Las Cañuelas", 250, 50),
    new Producto ("Harina Pureza", 550, 65),
    new Producto ("Polenta Prestopronta", 400, 90),
    new Producto ("Azucar AG", 900, 120),
    new Producto ("Aceite Pureza", 1100, 90),
    new Producto ("Aceite Cañuelas", 990, 100),
];
const carrito = [];

let operacion = prompt("ingrese la operacion que desea realizar: 1_ Agregar un Producto / 2_ Finalizar la compra / 0_ Salir");

while(operacion !== "0") {
        switch(operacion){

            case "1":
                agregarUnProducto();
                break;

            case "2":
                finalizarCompra();
                break;

            default:
                alert("Opcion Incorrecta");
                break;

        }
        operacion = prompt("ingrese la operacion que desea realizar: 1_ Agregar un Producto / 2_ Finalizar la compra / 0_ Salir");
}

