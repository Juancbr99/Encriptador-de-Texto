
const textarea = document.querySelector(".texto-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar")


function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"],["e","enter"],["i", "imes"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i  < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
} 

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a", "ai"],["e","enter"],["i", "imes"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i  < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
} 

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value)
    mensaje.value = textoDesencriptado
    textarea.value = "";
    
}

function copiar (){
    mensaje.select()
    document.execCommand("copy");

}
btnCopiar.addEventListener("click",copiar);
    
