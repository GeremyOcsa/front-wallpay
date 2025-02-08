const URL_APELLIDO = 'https://back-wallpay.onrender.com/apellidos'
const URL_DNI = 'https://back-wallpay.onrender.com/dni'

//Funcion que fltra usuarios por apellidos
export async function filtrarxApellidos(apellidoPaterno, apellidoMaterno) {
  
  const url = new URL(URL_APELLIDO)
  const params = new URLSearchParams()

  if (apellidoPaterno) {
    params.append('apellidoPaterno', apellidoPaterno)
  }

  if (apellidoMaterno) {
    params.append('apellidoMaterno', apellidoMaterno)
  }

  url.search = params.toString()

  try {
    const res = await fetch(url)
    
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error al obtener los registros:', error)
    throw error
  }
}

//Funcion que filtra por DNI
export async function filtrarxDNI(DNI){
  const url = new URL(URL_DNI)
  const params = new URLSearchParams()

  if (DNI) {
    params.append('DNI', DNI)
  }

  url.search = params.toString()

  try {
    const res = await fetch(url)

    if(!res.ok){
      throw new Error(`Error: ${res.status} - ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error){
    console.error('Error al obtener registros:', error)
    throw error
  }
}