const fs = require('fs')

const pokemon = JSON.parse(fs.readFileSync('./pokemon.json'))

module.exports = Object.freeze({
  searchByNameOrNumber: async (searchTerm) => pokemon.filter(x => Object.values(x).includes(searchTerm)),
  insertPokemon: async (newPokemon) => {
    const updatedPokemon = [...pokemon, newPokemon]

    await fs.writeFileSync('./pokemon.json', JSON.stringify(updatedPokemon), err => {
        if (err) {
            throw new Error('could not write to file')
        }
    })
  }
});