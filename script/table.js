// Funcion que renderiza la tabla con los datos de los usuarios
export function cargarTabla (data) {
  const tableBody = document.querySelector('#table-body')
  tableBody.innerHTML = data.map(user => `
    <tr>
      <td>${user.numero_registro}</td>
      <td>${user.dni}</td>
      <td>${user.apellidoPaterno}</td>
      <td>${user.apellidoMaterno}</td>
      <td>${user.nombre}</td>
      <td>${user.sexo}</td>
      <td>${user.fecha_nacimiento}</td>
      <td>${user.telefono}</td>
    </tr>
  `).join('')
}