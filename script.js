const btn_encriptar = document.getElementById("btn-encriptar");
const btn_desencriptar = document.getElementById("btn-desencriptar");
const btn_copiar = document.getElementById("btn-copiar");
const btn_borrar_1 = document.getElementById("btn-borrar-1");
const btn_borrar_2 = document.getElementById("btn-borrar-2");
const filtro = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;

// Función verificar
function verificar() {
    let texto_nuevo = document.getElementById("texto-encriptar").value;
    if (texto_nuevo.match(filtro) != null) {
        limpiar();
        foco();
        // Alerta de error
        Swal.fire({
            title: 'Error!',
            text: 'Solo letras minúsculas y sin acentos',
            icon: "warning",
            imageAlt: 'Imagen de alerta',
        });
    }
}

// Función encriptar
function encriptar() {
    let texto_nuevo = document.getElementById("texto-encriptar").value.trimStart();
    texto_nuevo = texto_nuevo
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("texto-desencriptar").value = texto_nuevo;
    document.getElementById("texto-desencriptar").style.color = "#000000";
    mostrarResultado();
}

// Función desencriptar
function desencriptar() {
    let texto_nuevo = document.getElementById("texto-encriptar").value;
    texto_nuevo = texto_nuevo
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("texto-desencriptar").value = texto_nuevo;
    document.getElementById("texto-desencriptar").style.color = "#000000";
    mostrarResultado();
}

// Función copiar
function copiar() {
    let texto_des = document.getElementById("texto-desencriptar").value;
    document.getElementById("texto-encriptar").placeholder = "";

    let text_copi = document.getElementById("texto-desencriptar");
    text_copi.select();
    document.execCommand("copy");

    if (texto_des !== "") {
        limpiar();
        foco();
        // Alerta de completado
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Texto copiado",
            showConfirmButton: false,
            timer: 1500,
        });
        ocultarImagen();
    } else {
        // Alerta de error
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "No se encontró ningún texto a copiar",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

// Función mostrar resultado
function mostrarResultado() {
    let texto_desencriptado = document.getElementById("texto-desencriptar").value;
    if (texto_desencriptado.trim() !== "") {
        document.querySelector(".result_output").style.display = "flex";
        document.getElementById("cubierta").style.display = "none";
    } else {
        document.querySelector(".result_output").style.display = "none";
        document.getElementById("cubierta").style.display = "";
    }
}

// Función ocultar imagen
function ocultarImagen() {
    mostrarResultado();
}

// Función limpiar
function limpiar() {
    document.getElementById("texto-encriptar").value = "";
    document.getElementById("texto-desencriptar").value = "";
}

// Función foco
function foco() {
    document.getElementById("texto-encriptar").focus();
}

// Función borrar
function borrar() {
    document.getElementById("texto-encriptar").placeholder = "Ingrese el texto aquí";
    document.getElementById("texto-desencriptar").placeholder = "";
    document.getElementById("texto-desencriptar").style.color = "#495057";
    limpiar();
    foco();
    ocultarImagen();
}

foco();
btn_encriptar.addEventListener("click", verificar);
btn_encriptar.addEventListener("click", encriptar);

btn_desencriptar.addEventListener("click", verificar);
btn_desencriptar.addEventListener("click", desencriptar);

btn_copiar.addEventListener("click", copiar);
btn_borrar_1.addEventListener("click", borrar);
btn_borrar_2.addEventListener("click", borrar);
