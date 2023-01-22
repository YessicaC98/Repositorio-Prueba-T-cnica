'use strict';
const $form = document.getElementById('form');
const $legend = document.getElementsByTagName('legend')[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const formulario = {
  username: null,
  password: null,
  accept: null,
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
  if (formulario.username && formulario.password && formulario.accept)
    return true;
  else return false;
}

function checkPermitido(obj) {
  try {



      
      var xhttp = new XMLHttpRequest();
      
      xhttp.open("GET", "https://localhost:7191/user/get?usuario=" + obj.username, true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();
  

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            var permitido = JSON.parse(this.responseText);
            if (
              obj.username === permitido.username &&
              parseInt(obj.password) === permitido.password &&
              obj.accept === permitido.accept
            ) {
              window.open('aplication.html', '_self');
            } else {
              alert(
                'Usuario no registrado. Intenta nuevamente!',
                'warning'
              );
            }
        }
       };


    
   
  } catch (error) {
    console.log('se produjo un error en la función checkPermitido:', error);
  }
}

$form.username.addEventListener('input', (e) => {
  formulario.username = e.target.value;
});

$form.password.addEventListener('input', (e) => {
  formulario.password = e.target.value;
});

$form.accept.addEventListener('change', (e) => {
  formulario.accept = e.target.checked;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkFormulario() === true) {
    checkPermitido(formulario);
  } else {
    $legend.classList.add('text-danger');
    alert('Todos los campos son obligatorios.', 'danger');
  }
});