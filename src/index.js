import cipher from "./cipher.js";
//diferentes pantallas
/*function showCipher() {
  obj1 = document.getElementById("twoOptions");
  obj1.style.display = (obj1.style.display=="block") ?"none" : "block";
  obj2 = documnt.getElementById("ciperScreen");
  obj2.style.display = (obj.style.display=="none")? "block": "block";
};

function showCipher() {
obj1 = document.getElementById("twoOptions");
obj1.style.display = (obj1.style.display=="block")? "none" : "block";
obj3 = document.getElementById("decipherScreen");
obj3.style.display = (obj3.style.display=="none") ?"block" : "none";


};*/

// MOSTRAR SECCION CIFRAR
const pantallaCifrar = document.getElementById("pantallaCifrar")
pantallaCifrar.addEventListener("click", cambiarACifrar)

function cambiarACifrar(){
  const obj1 = document.getElementById("twoOptions");
  obj1.style.display = "none";
 const obj2 = document.getElementById("cipherScreen");
  obj2.style.display = "block";
  
}

// MOSTRAR SECCION DESCIFRAR
const pantallaDescifrar = document.getElementById("pantallaDescifrar")
pantallaDescifrar.addEventListener("click", cambiarADescifrar)

function cambiarADescifrar(){
  const obj1 = document.getElementById("twoOptions");
  obj1.style.display = "none";
const obj2 = document.getElementById("decipherScreen");
obj2.style.display = "block";

}

// funcion boton cifrar
let botonCifrar = document.getElementById("botonCifrar") // lamas al btn
botonCifrar.addEventListener("click", btnCifrar) // añade manejador de evento addeventlistener

function btnCifrar(){  
 
  const texto = document.getElementById("textcipher1");
  const desplazamiento = document.getElementById("offsetEncode");
  const resultado = document.getElementById("cipheredSecret");
    
  let textoCifrado =  cipher.encode(parseInt(desplazamiento.value), texto.value);
  resultado.value= textoCifrado;
  console.log(textoCifrado);
}


// funcion boton Descifrar
let botonDescifrar = document.getElementById("botonDescifrar")
botonDescifrar.addEventListener("click", btndescifrar)

function btndescifrar(){
    
  const texto = document.getElementById("textdecipher2");
  const desplazamiento = document.getElementById("offsetDecode");
  const resultado = document.getElementById("decipheredSecret");
  
  let textoDescifrado = cipher.decode(parseInt(desplazamiento.value), texto.value);
  resultado.value= textoDescifrado;
  console.log(textoDescifrado);

 }

//BOTON VOLVER INICIO
const volverInicio1 = document.getElementById("volverInicio1")
volverInicio1.addEventListener("click", volver)

const volverInicio2= document.getElementById("volverInicio2")
volverInicio2.addEventListener("click", volver)

function volver(){

document.getElementById("twoOptions").style.display="block";
document.getElementById("cipherScreen").style.display="none";
document.getElementById("decipherScreen").style.display="none";
  
}

console.log(cipher);








