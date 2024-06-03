const url = "https://rickandmortyapi.com/api/character";
const miPromesa = fetch(url);
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
            <img src="${element.image}" />
            <h2>${element.name}</h2>
            </div>
            `;
        });
    });



