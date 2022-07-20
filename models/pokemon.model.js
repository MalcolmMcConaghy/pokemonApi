const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    index: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    type: {
        type: [String],
        required: true,
    }
}, {
    timestamps: true,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;