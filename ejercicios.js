//FUNCIONES
//#region 
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
//#endregion

//VARIABLES
//#region 
var productos = [];
var run = true;
//#endregion

//MAIN
//#region 
while(run == true)
{
switch(parseInt(prompt('Elija su opcion \n 1)Calcular cuotas \n 2)Agregar productos al carrito \n 3)Mostrar carrito \n 4)Salir')))
{
    case 1:
        {
            alert (calcularcuotas(prompt("Ingrese el valor de su producto "),prompt("Ingrese la cantidad de cuotas (1,3,6,12)")))
            break;
        }
    case 2:
        {            
            switch(parseInt(prompt('Elija un producto \n 1)Leche la serenisima \n 2)Fideos don satur \n 3)Nescafe dolca')))
            {
                case 1:
                {
                    productos.push('Leche la serenisima');
                    break;
                }
                case 2:
                {
                    productos.push('Fideos don satur');
                    break;
                }
                case 3:
                {
                    productos.push('Nescafe dolca');
                    break;
                }
                default:
                {
                    alert('Opcion invalida. Las opciones validas son \n 1)Leche la serenisima \n 2)Fideos don satur \n 3)Nescafe dolca')
                    break;
                }
            }
            break;
        }
    case 3:
        {
            let string = '';
            for(let i=0; i<productos.length;i++)
            {
                string = string + productos[i] + '\n';
            }
            alert(string)
            break;
        }
        case 4:
            {
                alert('Gracias por comprar en zets market vuelva prontos')
                run = false;
            }
    default:
        {
            alert('Opcion invalida. Las opciones validas son \n 1)Calcular cuotas \n 2)Agregar productos al carrito \n 3)Mostrar carrito')
            break;
        }
}
}
//#endregion


