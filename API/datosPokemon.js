const consultarPokemon = (id,number) => 
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)//retorna una promesa
    //capturar las respuestas
    .then(response => {
        //Para obtener promesas 
        //console.log(response);
        return response.json();
    })
    .then(data => {
        //console.log(data);
            pintarPokemon(data, number);
        })
    //capturar errores
    .catch(error => {
        console.log(error);
    });
}
consultarPokemon(999);

const btnSeleccionar = () => 
{
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);   
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2);
}

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1