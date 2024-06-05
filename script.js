const url = "https://rickandmortyapi.com/api/character";
const elContainer = document.getElementById('container');


const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link) 
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}

procesarFetch(url)
    .then((info) => {
        info.results.forEach(element => {
            elContainer.innerHTML += `
            <div class="personajes">
                <div class="imagenes">
                    <img src="${element.image}">
                </div>
            <h2 class="name">Name: ${element.name}</h2>
            <h2 class ="species">Specie: ${element.species}</h2>
            <h2 class ="origin">Origin: ${element.origin.name}</h2>
            </div>
            `;
        });
    });



