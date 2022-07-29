
// funcion Cifrado

const cipher = {
  encode: function (offset, string) {
    // test de validacion
    if (offset == null || string == []){
      throw new TypeError("enter valid please enter valid arguments");
    }

    let textoCip = "";
    
    for (let i = 0; i < string.length; i++) {
    
      let messageCip = String.fromCharCode((string.charCodeAt(i) - 65 + offset) % 26 + 65); 
      textoCip += messageCip;
    }
    return textoCip;

  },

  decode: function (offset, string){ 
    if (offset == null || string == []){
      throw new TypeError("enter valid please enter valid arguments");
    }

    let textoDecip = "";
   
    for (let i = 0; i < string.length; i++) {
      
      let messageDecip = String.fromCharCode(((string.charCodeAt(i) + 65 - (offset) % 26) % 26) + 65); 
      textoDecip += messageDecip;
    
    }
    return textoDecip;
  }

}


export default cipher;
