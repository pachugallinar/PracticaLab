function comprobarClave() {
    let clave1 = document.getElementById("clave1").value
    let clave2 = document.getElementById("clave2").value

    if (clave1 == clave2) {
      alert("Las claves coinciden")
    } else {
      alert("Las claves no coinciden")
    }
  }
const btnEnviar = document.getElementById('btn-enviar');

$(document).ready(function()
    
 const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('ecorreo'); 
  const claveUsuario1 = document.getElementById('clave1'); 
  const claveUsuario2 = document.getElementById('clave2');
  if (nombre.value === "") {
    alert("Rellene este campo");
    usuario.focus();
    return false;
  }
  if (ecorreo.value === "") {
    alert("Rellene este campo");
    email.focus();
    return false;
  }
  if (clave1.value === "") {
    alert("Rellene este campo");
    email.focus();
    return false;
  }
  if (clave2.value === "") {
    alert("Rellene este campo");
    email.focus();
    return false;
  }
  else {
    alert ("Correcta Inscripción")
  return true}

submit.addEventListener('click', validate)
}