const pokemon_image = document.getElementById("pokemon_image")
const pokemon_number = document.getElementById("pokemon_number")
const pokemon_name = document.getElementById("pokemon_name")
const btn_search = document.getElementById("btn-search")
const input_search = document.getElementById("input_search")
const btn_prev = document.getElementById('btn-prev')
const btn_next = document.getElementById('btn-next')
let pokemonID


const search_pokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
            pokemon_name.innerText = data.name
            pokemon_number.innerText = data.id
            pokemonID = data.id

        })
        .catch((err) => {
            pokemon_name.innerText = 'Não Encontrado'
            pokemon_number.innerText = ':('
            pokemon_image.src = ''
        })
}





btn_search.addEventListener('click', (event) => {
    event.preventDefault()
    search_pokemon(input_search.value)
})

btn_next.addEventListener('click', () => {

    pokemonID++
    search_pokemon(pokemonID)
})

btn_prev.addEventListener('click', () => {
    if (pokemonID >= 1) {
        pokemonID--
        search_pokemon(pokemonID)
    }
})



