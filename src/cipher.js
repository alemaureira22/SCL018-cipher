const cipher = {
    
 encode: (desplazamientoCifrar,textoCifar ) => {
       
     if(desplazamientoCifrar===null|| textoCifar=== 0){
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
   
       if(desplazamientodescifrar===null|| textoDescifrar=== 0){
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



