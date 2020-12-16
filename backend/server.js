const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

const PokemonModel = require('./models/PokemonData');

const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.once('open', () => {
  console.log('Connected to mongoDb successfully');
});

app.get('/show', async (req, res) => {
  await PokemonModel.find({}, (err, result) => {
    if (!err) res.send(result);
  });
});

app.post('/insert', async (req, res) => {
  const Name = req.body.Name;
  const Type = req.body.Type;

  const newPokemon = new PokemonModel({
    Name: Name,
    Type: Type,
  });

  await newPokemon.save();
});

app.put('/edit', async (req, res) => {
  const Name = req.body.Name;
  const Type = req.body.Type;
  try {
    await PokemonModel.findById(req.body.id, (err, newPokemon) => {
      newPokemon.Name = Name;
      newPokemon.Type = Type;
      newPokemon.save();
    });
  } catch (err) {
    console.log(err);
  }
});
app.delete('/delete/:id', async (req, res) => {
  await PokemonModel.findByIdAndRemove(req.params.id).exec();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
