const router = require('express').Router();
//const { searchByNameOrNumber, insertPokemon } = require("../repositories/userFileRepository");
const { getAllPokemon, searchByNameOrNumber, insertPokemon } = require("../repositories/mongoDBRepository");

router.route(`/`).get(async (req, res) => {
    await getAllPokemon()
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route(`/:searchTerm`).get(async (req, res) => {
    await searchByNameOrNumber(req.params.searchTerm)
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json(`Error: ${err}`));
});
  
router.route(`/newPokemon`).post(async (req, res) => {
    const foundPokemon = await searchByNameOrNumber(req.body.name);

    if (foundPokemon?.length) {
        res.status(200).send("Pokemon already exists");
    } else {
        await insertPokemon(req.body)
            .then(string => res.json(string))
            .catch(err => res.status(400).json(`Error: ${err}`));
    }
});

module.exports = router;