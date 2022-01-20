const equipos = [
    ["Rojo", "Faker", "Mid", 21, "Korea"],
    ["Azul", "Doublelift", "ADC", 23, "Korea"],
    ["Azul", "Smeb", "Top", 22, "Korea"],
    ["Rojo", "Deft", "ADC", 21, "Korea"],
    ["Rojo", "Perkz", "Top", 25, "Europa"],
    ["Rojo", "Armani", "Support", 21, "Korea"],
    ["Azul", "Mata", "Support", 18, "Korea"],
    ["Rojo", "Quintero", "Mid", 21, "Korea"],
    ["Azul", "Mantarraya", "Top", 25, "LAS"],
    ["Azul", "xPeke", "Mid", 27, "Europa"]
]

// DECLARACION DE VARIABLES
const table = document.querySelector('#table')
const btnFilter = document.querySelector('#btn')
const userSelect = document.querySelector('#select')

// FILTRO MI ARRAY USANDO EL VALOR QUE SELECCIONA EL USUARIO
const filterTeam = () => equipos.filter(arr => arr[0] === userSelect.value)

// GENERO LA TABLA A PARTIR DEL ARRAY SELECCIONADO
const generateTable = () => {
    const equipo = filterTeam()
    equipo.forEach(array => {
        const tr = document.createElement('tr')
        array.forEach(element => {
            tr.innerHTML += `<td>${element}</td>`
        })
        table.appendChild(tr)
    })
}

// LIMPIO MI TABLA
const cleanTable = () => table.innerHTML = ""

// EVENTO QUE PRIMERO ME VACIA LA TABLA Y LUEGO LA GENERA
btnFilter.addEventListener('click', () => {
    cleanTable()
    generateTable()
})