const inputNombre = document.getElementById('nombre')
const inputCorreo = document.getElementById('correo')
const inputMensaje = document.getElementById('mensaje')
const inputUrl = document.getElementById('url-imagen')
const inputSendButton = document.getElementById('sendButton')
const inputResetLSButton = document.getElementById('resetLSButton')
const inputShowLSButton = document.getElementById('showLSButton')

inputSendButton.addEventListener('click', onSubmit)
inputResetLSButton.addEventListener('click', resetLS)
inputShowLSButton.addEventListener('click', showLS)

function onSubmit(event) {
  event.preventDefault()
  localStorage.setItem('usuario: ' + inputNombre.value, JSON.stringify({
    nombre: inputNombre.value, //nombreValue,
    correo: inputCorreo.value, //correoValue,
    mensaje: inputMensaje.value, //mensajeValue,
    url: inputUrl.value //urlValue    
  }))
  const usuarioLS = JSON.parse(localStorage.getItem('usuario: ' + inputNombre.value,))
  console.log(usuarioLS)
}

function resetLS(event) {
  event.preventDefault()
  localStorage.clear()
}

function showLS(event) {
  event.preventDefault()
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
}