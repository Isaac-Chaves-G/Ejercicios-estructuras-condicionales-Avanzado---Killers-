console.log("holaaa")

let dias = prompt("ingresa el numero de dias")
let verificar = false;
let añosOut = " años"
let mesesOut = " meses"
let diasOut = " dias"
let diasIn;


function convertirDias (dias)
//DIAS
{
    if (dias >= 1 && dias < 30){
        let mensaje = dias + " dias"
        console.log(mensaje)
    } 

    //meses
    else if (dias > 30 && dias < 365){
        let diasIn = (dias%30);
        let meses = Math.floor(dias/30)
        let mensaje = meses + " Meses " + diasIn + " Dias";  
        console.log(mensaje)
    }

    //años
    else if(dias>365){
        let años = Math.floor(dias/365)
        let meses = Math.floor((dias % 365) / 30);
        let diasIn = (dias%30);
        let mensaje = años + " " + añosOut + " " +  meses + mesesOut + " " + diasIn + " Dias"; 
        console.log(mensaje);
    }
    
    
}

convertirDias(dias)

console.log(dias%30)