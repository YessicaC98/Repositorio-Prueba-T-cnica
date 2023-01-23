'use strict'; 
const $form = document.getElementById('form');
const $legend = document.getElementsByTagName('legend')[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const formulario = {
  usuario: null,
  contraseña: null,
};

const alert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');
  alertPlaceholder.append(wrapper);
};

function checkFormulario() {
  if (formulario.usuario && formulario.contraseña)
    return true;
  else return false;
}

function Guardausuario(obj) {
    try {
        var xhttp = new XMLHttpRequest();

        xhttp.open("ADD", "https://localhost:7191/user/add?usuario=" + obj.usuario + "&contrasena=" + obj.contraseña, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          }
         };
    } catch (error) {
      console.log('se produjo un error en la función checkPermitido:', error);
    }
  }

$form.usuario.addEventListener('input', (e) => {
  formulario.usuario = e.target.value;
});

$form.contraseña.addEventListener('input', (e) => {
  formulario.contraseña = e.target.value;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkFormulario() === true) {
    Guardausuario(formulario);
  } else {
    $legend.classList.add('text-danger');
    alert('Todos los campos son obligatorios.', 'danger');
  }
});