const textoInicial= document.querySelector(".ingresoTexto");
const textoFinal= document.querySelector(".resultadoTexto");
const resultado = document.querySelector(".texto_resultado");
const imagen = document.querySelector(".imagen");
const h3 = document.querySelector(".textoh3");

//Construcción de arreglo con las claves de encriptación

const matrizLlavesEncriptacion = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function botonEncriptar() {
    let inputTexto = document.getElementById("texto_inicial").value;
    if(textoInicial.value == 0){
        alert("Debes ingresar algún texto");
        }  
        if (!validarTextoMinusculas(inputTexto)) {
            alert("Recuerda que sólo puedes usar letras minúsculas sin acentos");
            textoInicial.value="";
        }else {
    
       
    Ocultar();
    resultado.textContent=encriptar(textoInicial.value);
    textoInicial.value="";
}
}

    function validarTextoMinusculas(texto) {
        return /^[a-z\s]+$/.test(texto);
    }

       
function Ocultar(){
imagen.classList.add("ocultar"); /* crear clase ocultar*/
h3.classList.add("ocultar");
}

function encriptar(textoEncriptado){
   // textoEncriptado=textoEncriptado.toLowerCase() //cambia el texto a minúscula

    for (let i= 0; i < matrizLlavesEncriptacion.length; i++) {
        if (textoEncriptado.includes(matrizLlavesEncriptacion[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(
                matrizLlavesEncriptacion[i][0],
                matrizLlavesEncriptacion[i][1]
            )
        }
    }
    return textoEncriptado;
}

function Copiar(){
    const botonCopiar = document.querySelector(".ingresoTexto");
        botonCopiar.addEventListener("click", Copiar = ()=>{
            let contenido =document.querySelector(".texto_resultado").textContent;
            navigator.clipboard.writeText(contenido);
        }
        )
 } 
 
function botonDesencriptar() {
    Ocultar();
    resultado.textContent=desencriptar(textoInicial.value);
    textoInicial.value="";
}

function desencriptar(textoDesencriptado){
    for (let i= 0; i < matrizLlavesEncriptacion.length; i++) {
        if (textoDesencriptado.includes(matrizLlavesEncriptacion[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(
                matrizLlavesEncriptacion[i][1],
                matrizLlavesEncriptacion[i][0]
            )
        }
    }
    return textoDesencriptado;
}

