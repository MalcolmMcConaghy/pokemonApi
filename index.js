const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const pokemonRouter = require('./routes/pokemon');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

app.get("/", (req, res) => {
  res.send(JSON.stringify("Hello Jean!"));
});

app.use('/pokemon', pokemonRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
