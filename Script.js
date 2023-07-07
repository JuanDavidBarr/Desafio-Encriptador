const textArea1 = document.querySelector(".textarea1-content");
const textArea2 = document.querySelector(".textarea2-content");
const copia = document.querySelector(".copiar-button");


function validarTexto(){
    let textoEscrito = document.querySelector(".textarea1-content").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}



function encriptarButton(){
    if(!validarTexto()){
        const textoEncriptado = encriptar(textArea1.value)
        textArea2.value = textoEncriptado
        textArea1.value = "";
        textArea2.style.backgroundImage = "none";
    }   
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptarButton(){
    const textoEncriptado = desencriptar(textArea1.value)
    textArea2.value = textoEncriptado
    textArea1.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    textArea2.select();
    navigator.clipboard.writeText(textArea2.value)
    textArea2.value = "";
    alert("Texto Copiado")
}

