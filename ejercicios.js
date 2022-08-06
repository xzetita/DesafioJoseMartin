let valordeproducto = prompt("Ingrese el valor de su producto ")
let  cantidaddecuotas = prompt("Ingrese la cantidad de cuotas (1,3,6,12)");

function calcularcuotas(valordeproducto,cantidaddecuotas){
    switch (cantidaddecuotas){
        case "1":
            return valordeproducto / cantidaddecuotas
            break;
        case "3":
            return valordeproducto / cantidaddecuotas
            break;

        case "6":
            return valordeproducto / cantidaddecuotas
            break;
        case "12":
            return valordeproducto / cantidaddecuotas
            break;
    }
}
alert (calcularcuotas(valordeproducto,cantidaddecuotas))