function buscar() {
  document.getElementById("contenido").innerHTML = ''
  valor = document.getElementById("rick").value
  cadena = ""
  //conexion a la api o ruta
  url = "https://rickandmortyapi.com/api/character/?name=" + valor
  fetch(url)
    .then(response => response.json())
    .then(data => visualizar(data))
    .catch(error => console.log(error))
  const visualizar = (data => {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
      //cadena = `<strong>Nombre:</strong> ${data.id} `
      cadena += `<div>`
      cadena += `<strong>Nombre:</strong> ${data.results[i].name}<br> `
      cadena += `<strong>Especie:</strong> ${data.results[i].species}<br> `
      cadena += `<strong>Genero:</strong> ${data.results[i]. gender}<br> `
      cadena += `<img src=${data.results[i].image} width="300" heigh.t="300"></img><br>`
      cadena += `</div>`
    }
    document.getElementById("contenido").innerHTML = cadena
  })
}
