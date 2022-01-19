# Practica Tablas y Arrays

## Dado un array multidimensional con datos de dos equipos, crear una tabla siguiendo las siguientas pautas:

- Respetar estructura de tabla:
<table>
    <thead><tr><th>Nombres de columnas</th></tr></thead>
    <tbody id="tabla">Cuerpo de la tabla inicialmente vacio. Dentro crearan los <tr> y <td> desde javascript</tbody>
</table>

- El tbody de la tabla se llenara a partir del array multidimencional.
- La tabla no se cargara apenas se abre la pagina, sino cuando el usuario ejecute una accion.
- Debera existir un input de seleccion con dos valores: Rojo y Azul.
- Debera existir un boton que al dar click, llene los datos de la tabla acordes al equipo que el usuario elige.
- Si el usuario elige un equipo, carga la tabla, y luego elige otro, la tabla debe recargarse con los datos del nuevo equipo, no agregarse abajo.

## El array (Equipo - Nombre - Linea/Rol - Altura - Edad - Zona)

const equipos = [
    ["Rojo", "Faker", "Mid", 1.70, 21, "Korea"],
    ["Azul", "Doublelift", "ADC", 1.72, 23, "Korea"],
    ["Azul", "Smeb", "Top", 1.68, 22, "Korea"],
    ["Rojo", "Deft", "ADC", 1.65, 21, "Korea"],
    ["Rojo", "Perkz", "Top", 1.80, 25, "Europa"],
    ["Rojo", "Faker", "Mid", 1.70, 21, "Korea"],
    ["Azul", "Mata", "Support", 1.60, 18, "Korea"],
    ["Rojo", "Faker", "Mid", 1.70, 21, "Korea"],
    ["Azul", "Mantarraya", "Top", 1.73, 25, "LAS"],
    ["Azul", "xPeke", "Mid", 1.78, 27, "Europa"]
]

- Se espera que realicen esta practica utilizando forEach(), filter(), map() en lugar de for o for of.