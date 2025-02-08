//Funcionar para obtener los valores
export function obtenerValores() {
  const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim()
  const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim()
  const documento = document.getElementById('DNI').value.trim()

  return {
    apellidoPaterno,
    apellidoMaterno,
    documento
  }
}

// Funcion que disablea los inputs segun check
export function desactivarInputs() {
  const isDniChecked = document.getElementById('busDNI').checked
  const apellidoPaterno = document.getElementById('apellidoPaterno')
  const apellidoMaterno = document.getElementById('apellidoMaterno')
  const documento = document.getElementById('DNI')

  documento.disabled = !isDniChecked
  apellidoPaterno.disabled = isDniChecked
  apellidoMaterno.disabled = isDniChecked

  if (!isDniChecked) {
    documento.value = ''
  } else {
    apellidoPaterno.value = ''
    apellidoMaterno.value = ''
  }
}

export function eventosUI() {
  document.addEventListener('DOMContentLoaded', desactivarInputs)
  document.getElementById('busDNI').addEventListener('change', desactivarInputs)
  document.getElementById('busApellido').addEventListener('change', desactivarInputs)
}