var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

var nombre = document.getElementById("nombre"),
    tachenombre = document.getElementsByClassName("tacheNombre")[0],
    buenanombre = document.getElementsByClassName("buenaNombre")[0],
    mensajeNombre = document.getElementsByClassName("mensajeNombre")[0];
var celular = document.getElementById("celular"),
    tachecelular = document.getElementsByClassName("tacheCelular")[0],
    buenacelular = document.getElementsByClassName("buenaCelular")[0],
    mensajecelular = document.getElementsByClassName("mensajeCelular")[0];
var correo = document.getElementById("correo"),
    tachecorreo = document.getElementsByClassName("tacheCorreo")[0],
    buenacorreo = document.getElementsByClassName("buenaCorreo")[0],
    mensajecorreo = document.getElementsByClassName("mensajeCorreo")[0];

nombre.addEventListener("blur", () => {
    if (!regexNombre.test(nombre.value)) {
        buenanombre.classList.add("ocultar");
        nombre.classList.remove("input-buena");
        mensajeNombre.classList.toggle("ocultar");
        nombre.classList.add("input-tache");
        tachenombre.classList.remove("ocultar");
    } else {
        mensajeNombre.classList.add("ocultar");
        tachenombre.classList.add("ocultar");
        nombre.classList.remove("input-tache");
        nombre.classList.add("input-buena");
        buenanombre.classList.remove("ocultar");
    }
});

celular.addEventListener("blur", () => {
    if (!regexTelefonoNacional.test(celular.value)) {
        buenacelular.classList.add("ocultar");
        celular.classList.remove("input-buena");
        mensajecelular.classList.toggle("ocultar");
        celular.classList.add("input-tache");
        tachecelular.classList.remove("ocultar");
    } else {
        mensajecelular.classList.add("ocultar");
        tachecelular.classList.add("ocultar");
        celular.classList.remove("input-tache");
        celular.classList.add("input-buena");
        buenacelular.classList.remove("ocultar");
    }
});

correo.addEventListener("blur", () => {
    if (!regexCorreo.test(correo.value)) {
        buenacorreo.classList.add("ocultar");
        correo.classList.remove("input-buena");
        mensajecorreo.classList.toggle("ocultar");
        correo.classList.add("input-tache");
        tachecorreo.classList.remove("ocultar");
    } else {
        mensajecorreo.classList.add("ocultar");
        tachecorreo.classList.add("ocultar");
        correo.classList.remove("input-tache");
        correo.classList.add("input-buena");
        buenacorreo.classList.remove("ocultar");
    }
});
