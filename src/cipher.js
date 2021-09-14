const cipher = {
    
 encode: (desplazamientoCifrar,textoCifar ) => {
     let validation1= desplazamientoCifrar=== undefined || textoCifar === undefined;
     let validation2= desplazamientoCifrar===null && Array.isArray(textoCifar);
     let validation3= desplazamientoCifrar===0 && textoCifar===0;
     console.log(validation2,desplazamientoCifrar,textoCifar);
     
    if (validation1|| validation2||validation3){
        throw new TypeError();
        
        }
      let palabra = "" + textoCifar;
      let palabracifrada = "";

      for (let i = 0; i < palabra.length; i++) {
          let posicioncifrada = 0;
          let posicionoriginal = palabra.charCodeAt(i);

          if (posicionoriginal >= 65 && posicionoriginal <= 90) {
              posicioncifrada = (posicionoriginal - 65 + desplazamientoCifrar) % 26 + 65;
          } else if (posicionoriginal >= 97 && posicionoriginal <= 122) {
              posicioncifrada = (posicionoriginal - 97 + desplazamientoCifrar) % 26 + 97;
          } else {
              
              posicioncifrada = posicionoriginal;
          }
          palabracifrada += String.fromCharCode(posicioncifrada);
      }
      return palabracifrada;
  },

  decode: (desplazamientodescifrar,textoDescifrar) => {
    let validation4= desplazamientodescifrar=== undefined || textoDescifrar === undefined;
    let validation5= desplazamientodescifrar===null && Array.isArray(textoDescifrar);
    let validation6= desplazamientodescifrar===0 && textoDescifrar===0;

    
   if (validation4|| validation5||validation6){
       throw new TypeError();
       
       }
    
    
      let palabra = "" + textoDescifrar;
      let palabracifrada = "";

      for (let i = 0; i < palabra.length; i++) {
          let posicioncifrada = 0;
          let posicionoriginal = palabra.charCodeAt(i);
          if (posicionoriginal >= 65 && posicionoriginal <= 90) {
              posicioncifrada = (posicionoriginal - 90 - desplazamientodescifrar) % 26 + 90;
          } else if (posicionoriginal >= 97 && posicionoriginal <= 122) {
              posicioncifrada = (posicionoriginal - 122 - desplazamientodescifrar) % 26 + 122;
          } else {
              
              posicioncifrada = posicionoriginal;
          }
          palabracifrada += String.fromCharCode(posicioncifrada);
      }
      return palabracifrada;
  }
};
export default cipher;



