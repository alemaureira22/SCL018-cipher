//import cipher from './cipher.js';

//boton que realizara el cifrado//
const botonCifrar= document.getElementById("botoncifrar");
botonCifrar.addEventListener("click", mostrarCifrado); 


function mostrarCifrado (){
    
    let desplazamiento=document.getElementById("entradaclave").value; 
    let textoCifar=document.getElementById("textoentrada").value;

    if(desplazamiento==""){
        alert("ingresarNumeroDesplazamiento")
    }else if(textoCifar==""){
        alert("ingresar texto a cifrar")  
    }else{
        cifrar(textoCifar, parseInt(desplazamiento));
    }
    
}


//funcion cifrado//
function cifrar (textoCifar, desplazamiento){
    let palabra=""+textoCifar;
    let palabracifrada="";
    
    for (let i=0; i<palabra.length; i++){
    let posicioncifrada=0;
    let posicionoriginal=palabra.charCodeAt(i);
    if (posicionoriginal>= 65 && posicionoriginal<=90){
        console.log(posicionoriginal);
    posicioncifrada=(posicionoriginal- 65 + desplazamiento) % 26 + 65;
    }else if (posicionoriginal>= 97 && posicionoriginal<=122){
        console.log(posicionoriginal);
    posicioncifrada=(posicionoriginal- 97 + desplazamiento) % 26 + 97;
    }else{
        console.log(posicionoriginal+"else");
        posicioncifrada=posicionoriginal;
    }
    palabracifrada+=String.fromCharCode(posicioncifrada);
    
    }
     
    alert (palabracifrada);


}



//console.log(cipher);
