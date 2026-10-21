//let lista_usuarios = document.getElementById("usuarios");
import { usuarios } from "./datos.js";

function mostrarUsuarios() {
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = document.getElementById(lista_usuarios[i]);
        usuario.innerHTML = "Usuario: " + usuario.nombre + ", Email: " + usuario.email;
    }
}