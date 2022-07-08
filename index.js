const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')
const { searchByNameOrNumber, insertPokemon } = require("./userFileRepository");

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello Jean!"));
});

app.get(`/search/:searchTerm`, async (req, res) => {
  const foundPokemon = await searchByNameOrNumber(req.params.searchTerm);
  res.status(200).send(JSON.stringify(foundPokemon));
});

app.post(`/pokemon`, async (req, res) => {
  const foundPokemon = await searchByNameOrNumber(req.body.name);

  if (foundPokemon.length) {
    res.status(200).send("Pokemon already exists");
  } else {
    await insertPokemon(req.body);
    res.status(200).send("Successfully updated Pokedex!");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
