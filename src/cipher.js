
// funcion Cifrado

const cipher = {
  encode: function (offset, string) {
    let textoCip = "";

    if(offset =="", string == ""){
      alert("por favor verifica el valor del mensaje y/o numero de desplazamiento");
    }
      for (let i = 0; i < string.length; i++) {
      let textoAscii = string.charCodeAt(i);
      let messageCip = String.fromCharCode((textoAscii - 65 + offset) % 26 + 65); textoCip += messageCip;
    

    }
    return textoCip;
  }}



// funcion descifrado


  decode: function (string, offset) {
    let textoDecip = "";

    if(offset =="", string == ""){
      alert("por favor verifica el valor del mensaje y/o numero de desplazamiento");
    }
    
    for (let i = 0; i < string.length; i++) {
      let textoAscii2 = string.charCodeAt(i)
      let messageDecip = String.fromCharCode(((textoAscii2 + 65 + parseInt(offset) % 26 ) % 26) + 65); textoDecip += messageDecip;
    

    }
    return textoDecip;
  }


export default cipher;

