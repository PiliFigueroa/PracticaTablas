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
const container = document.querySelector('#datos-curiosos')

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

// PARTE 2

const juegaFaker = () => {
    equipos.forEach(arr => {
        const hayFaker = arr.some(jugador => jugador === "Faker")
        hayFaker ? container.innerHTML += "Faker juega esta partida<br>" : false
    })
}

juegaFaker()

// const noHayJungla = () => {
//     let stop = false
//     equipos.forEach(arr => {
//         const hayJungla = arr.some(rol => rol[2] === "Jungla")
//         if (!hayJungla && !stop) {
//             container.innerHTML += "No hay nadie con el rol de jungla"
//             stop = true
//         } else {
//             return false
//         }
//     })
// }

const noHayJungla = () => {
    const hayJungla = equipos.find(rol => rol[2] === "Jungla")
    if (!hayJungla) {
        container.innerHTML += "No hay nadie con el rol de jungla <br>"
    } else {
        return false
    }
}
noHayJungla()

const hayJugadorLAS = () => {
    const jugadorLAS = equipos.find(jugador => jugador[4] === "LAS")
    if (jugadorLAS) {
        container.innerHTML += "Hay al menos un jugador latinoamericano <br>"
    } else {
        return false
    }
}
hayJugadorLAS()

