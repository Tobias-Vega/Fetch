El proyecto consiste en utilizar la función de fetch con una API en particular.
En mi caso utilicé la API de Rick and Morty para el proyecto en cuestión.
Para ello tuve que utlizar la siguiente instrucción:

const url = "https://rickandmortyapi.com/api/character"
Primero tuve que asignar en una variable la url de la API


const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link) 
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}
Con esta instrucción proceso el fetch

