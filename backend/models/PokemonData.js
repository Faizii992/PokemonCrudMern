const mongoose = require('mongoose');
const pokemonSchema = new mongoose.Schema({
    Name: {
        required: true,
        type:String,
    },
    Type: {
        required: true,
        type:String
    }
}, {
    timestamps:true
})

const PokemonData = mongoose.model('pokemons', pokemonSchema);
module.exports = PokemonData;