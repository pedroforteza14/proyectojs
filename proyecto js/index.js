do {
     nombre = prompt("BIENVENIDO");
     if (nombre !== "") {
       alert("El nombre ingresado es: " + nombre);
     }
   } while (nombre != "");

function iniciarSesion() {
    const USUARIO = prompt("Ingresa tu usuario");
    const PASSWORD = prompt("Ingresa tu contraseña");
 
    if (USUARIO == "leoMessi" && PASSWORD == "91218") {
      alert("Bienvenido " + USUARIO);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
}
 
iniciarSesion();


 let seleccionUsuario = parseInt(
 prompt(
   "Que operacion desea realizar:\n 1.resumen de tarjeta"
 )
);
if (seleccionUsuario === 1) {
 alert("Usted selecciono resumen de tarjeta");
}


let importe = 0;
let descuento = 0;

const IVA = 1.21;
const suma = (valorUno, valorDos) => valorUno + valorDos;
const resta = (valorUno, valorDos) => valorUno - valorDos;
const calcularIva = (subtotal) => subtotal * IVA;
const mostrarPrecioFinal = (precio) => alert(precio);

const solicitarValores = () => {
 importe = parseFloat(prompt("Ingrese el numero de tarjeta"));
 descuento = parseFloat(prompt("Ingrese el descuento correspondiente"));
};

solicitarValores();

let subtotal = resta(importe, descuento);
const VALOR_IVA = calcularIva(subtotal);
const PRECIO_FINAL = suma(subtotal, VALOR_IVA);

mostrarPrecioFinal(PRECIO_FINAL);
