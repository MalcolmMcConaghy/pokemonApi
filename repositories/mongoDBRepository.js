let Pokemon = require('../models/pokemon.model');

module.exports = Object.freeze({
    getAllPokemon: async () => {
        return Pokemon.find()
            .then(pokemon => pokemon)
            .catch(err => err);
    },
    searchByNameOrNumber: async (searchTerm) => {
        return Pokemon.findOne({
                $or:[
                    {name: searchTerm},
                    {index: searchTerm},
                    {type: searchTerm}
                ]
            })
            .then(pokemon => pokemon)
            .catch(err => err);
    },
    insertPokemon: async (newPokemon) => {
        const newDBPokemon = new Pokemon(newPokemon);

        return newDBPokemon.save()
            .then(() => 'Successfully updated Pokedex!')
            .catch(err => err);
    }
});