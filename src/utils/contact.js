import { validarCorreo, validarNombres, validarString } from "/src/utils/validations.js";
import Swal from 'sweetalert2';

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".enviar").addEventListener('click', async (event) =>{

        event.preventDefault();

        let nombre = document.getElementById("nombre") ;
        let apellido = document.getElementById("apellido") ;
        let correo = document.getElementById("correo");
        let mensaje = document.getElementById("mensaje");

        const nombreValido = validarNombres(nombre, document.querySelector(".error1"), "Error nombre");
        const apellidoValido = validarNombres(apellido, document.querySelector(".error2"), "Error apellido");
        const correoValido = validarCorreo(correo, document.querySelector(".error3"), "Error correo");
        const mensajeValido = validarString(mensaje, document.querySelector(".error4"), "Error mensaje");
        
        if(nombreValido && apellidoValido && correoValido && mensajeValido){
            let successAlertShown = false;

            // Mostrar alerta de espera mientras se envía el correo
            let timerInterval;
            Swal.fire({
                title: "Enviando correo...",
                html: "Espera un momento, por favor.",
                timer: false, // Eliminar el temporizador
                timerProgressBar: false, // Eliminar la barra de progreso
                allowOutsideClick: false, // Bloquear el cierre de la alerta
                allowEscapeKey: false, // Bloquear el cierre de la alerta con la tecla Esc
                showConfirmButton: false, // Ocultar el botón de confirmación
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            
            const response = await fetch("/api/contacto", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre.value,
                    apellido: apellido.value,
                    correo: correo.value,
                    mensaje: mensaje.value,
                }),
            });            
            
            if(response.ok && !successAlertShown){
                Swal.fire({
                    title: "Enviado con Éxito",
                    text: "Presiona click en el botón!",
                    icon: "success",
                    showConfirmButton: true,
                    confirmButtonText: "OK",
                });
                document.querySelector("form").reset();
            }else{
                Swal.fire({
                    title: "Error al enviar el correo",
                    text: "Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.",
                    icon: "error",
                    showConfirmButton: true,
                    confirmButtonText: "OK",
                });
            }
            
        }
    })
});