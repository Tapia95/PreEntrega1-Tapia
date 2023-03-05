const sumador = (a,b) => a+b;

const divisor = (a,b) => a/b;

function interes (a,b){
    if(b==3){
        return divisor (a,b);
    }
    if (b==6)
    {
        return divisor(a*1.15,b);
    }
    if (b==12){
        return divisor(a*1.25,b);
    }
}

function totalValorEnCuotas (a,b){

    let total = 0;

    if(b==3){
        return a;
    }
    if(b==6)
    {
        for(let i=0; i<b;i++){
            total = total+ interes(a,b);
        }
        return total;
    }
    if(b==12)
    {
        for(let i=0; i<b;i++){
            total = total+ interes(a,b);
        }
        return total;
    }
}

function menu ()
{
    let option = 0;
    let carro= 0;
    let cuotas = 0;
    let total = 0;
    let fechaActual = new Date();
    do {

        option=prompt("Ingrese una opcion");
     
        switch(option){
            case "1":
                carro= carro+parseInt(prompt("Ingrese un Valor"));
                break;
            case "2":
                if(carro == 0){
                    alert("Carro Vacio!");
                }else{
                    do {
                        cuotas=prompt("Ingrese cuotas(3,6 o 12)");
                    } while (cuotas!=3&&cuotas!=6&&cuotas!=12);
                     total=totalValorEnCuotas(carro,parseInt(cuotas));
                     console.log("Valor del Carro:"+carro);
                     console.log("Valor de la cuota:"+interes(carro,cuotas));
                     console.log("Valor total:"+total);
                     console.log("Fecha:"+fechaActual.toLocaleDateString()+" "+fechaActual.toLocaleTimeString());
                }
                break;
            case "3":
                console.log("Carro actual:"+ carro);
                console.log("Fecha:"+fechaActual.toLocaleDateString()+" "+fechaActual.toLocaleTimeString()); 
                break;
            case "4":
                alert("Se vació el carro.");
                carro = 0;
                break;
            case "0":
                alert("ADIOS!");
                break;
            default:
                console.log("Opcion Inexistente!");
                break;
            
                
        }


        
    } while (option!=0);

}

