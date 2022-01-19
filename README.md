# Practica Tablas y Arrays

## PARTE 1 - Dado un array multidimensional con datos de dos equipos, crear una tabla siguiendo las siguientas pautas:

- Respetar estructura de tabla:
```
<table>
    <thead><tr><th>Nombres de columnas</th></tr></thead>
    <tbody id="tabla">Cuerpo de la tabla inicialmente vacio. Dentro crearan los <tr> y <td> desde javascript</tbody>
</table>
```

- El tbody de la tabla se llenara a partir del array multidimencional.
- La tabla no se cargara apenas se abre la pagina, sino cuando el usuario ejecute una accion.
- Debera existir un input de seleccion con dos valores: Rojo y Azul.
- Debera existir un boton que al dar click, llene los datos de la tabla acordes al equipo que el usuario elige.
- Si el usuario elige un equipo, carga la tabla, y luego elige otro, la tabla debe recargarse con los datos del nuevo equipo, no agregarse abajo.

## El array (Equipo - Nombre - Linea/Rol - Altura - Edad - Zona)
```
const equipos = [
    ["Rojo", "Faker", "Mid", 21, "Korea"],
    ["Azul", "Doublelift", "ADC", 23, "Korea"],
    ["Azul", "Smeb", "Top", 22, "Korea"],
    ["Rojo", "Deft", "ADC", 21, "Korea"],
    ["Rojo", "Perkz", "Top", 25, "Europa"],
    ["Rojo", "Faker", "Mid", 21, "Korea"],
    ["Azul", "Mata", "Support", 18, "Korea"],
    ["Rojo", "Faker", "Mid", 21, "Korea"],
    ["Azul", "Mantarraya", "Top", 25, "LAS"],
    ["Azul", "xPeke", "Mid", 27, "Europa"]
]
```

- Se espera que realicen esta practica utilizando forEach(), filter(), map(), some(), every(), find(), includes() en lugar de for o for of.
- De ser posible, generen la tabla utilizando template strings en lugar de hacer todo con createElement() y appendChild().

## PARTE 2 - Al final del documento, fuera de la tabla, imprimir los siguientes mensajes en etiquetas <p> dentro de un <div> a partir de funciones utilizando alguno de los metodos mencionados:
- Faker juega esta partida.
- No hay nadie con el rol de jungla.
- Hay al menos un jugador latinoamericano.
- No todos los jugadores son koreanos.
- No hay nadie de LAN.
- No hay nadie de Brasil.
