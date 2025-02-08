import { eventosUI, obtenerValores } from "./ui.js";
import { cargarTabla } from "./table.js"
import { filtrarxApellidos, filtrarxDNI } from "./api.js";

// Funciones de ui.js
eventosUI()

// Ejecutar query de la API
document.getElementById('search-button').addEventListener('click', async (e) => {
  e.preventDefault()

  const {apellidoPaterno, apellidoMaterno, documento} = obtenerValores()

  if(!apellidoPaterno && !apellidoMaterno && !documento){
    cargarTabla([])
    return
  }

  try {
    let data

    if (documento) {
      data = await filtrarxDNI(documento)
    } else {
      data = await filtrarxApellidos(apellidoPaterno, apellidoMaterno)
    }

    cargarTabla(data)
  } catch (error){
    console.log('Error al obtener los registros'. error)
    cargarTabla([])
  }
})

