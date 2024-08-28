const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");




function btnEncriptar() {
    alert("Vamos Bien");
    const textoEncriptado = encriptar(textArea.value);
    mensaje.values = textoEncriptado; 
    alert("Mensaje encriptado: " + mensaje);
    textArea.value="";
    mensaje.style.backgroundImage = none;
}


function encriptar(stringEncriptada) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptada = stringEncriptada.tolowerCase();

  for(let i=0; i< matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[0][i])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}


function btnDesencriptar() {
    alert("Vamos Bien");
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.values = textoEncriptado; 
    alert("Mensaje encriptado: " + mensaje);
    textArea.value="";
    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.tolowerCase();
  
    for(let i=0; i< matrizCodigo.length; i++) {
      if(stringDesencriptada.includes(matrizCodigo[i][1])) {
          stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
    return stringDesencriptada;
  }