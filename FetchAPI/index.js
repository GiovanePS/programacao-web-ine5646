const selectDiv = document.getElementById("unidades-federativas")
const otherSelectDiv = document.getElementById("other-select")

async function ibgeData() {
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    const data = response.json()

    return data
}

async function municipiosData(idUF) {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUF}/municipios`)
    const data = response.json()

    return data
}

selectDiv.addEventListener('change', (event) => {
    otherSelectDiv.innerHTML = `<select name="municipios" id="municipios"></select>`

    divMunicipios = document.getElementById("municipios")

    municipiosData(event.target.value).then(result => {
        for (let i = 0; i < result.length; i++) {
            divMunicipios.innerHTML += `<option value="${result[i].id}">${result[i].nome}</option>`
        }
    })
})


ibgeData().then(result => {
    for (let i = 0; i < result.length; i++) {
        selectDiv.innerHTML += `<option value="${result[i].id}">${result[i].nome}</option>`
    }
})