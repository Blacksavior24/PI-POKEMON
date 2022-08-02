const {getAllPokemon, getPokeName, getPokeId} = require('./utils');
const {Pokemon, Type} = require('../../db');

const getAll = async (req, res) => {
    const { name } = req.query;
    
    //const pokeTotal = await getAllPokemon();
    try {
      if (name) {
        /*
        const pokeInfo = pokeTotal.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
        );*/

        const pokeInfo = await getPokeName(name);
        console.log(pokeInfo);
        pokeInfo.length
          ? res.status(200).send(pokeInfo)
          : res.status(404).send("error");
      } else {
        const pokeTotal = await getAllPokemon();
        pokeTotal.length
          ? res.status(200).send(pokeTotal)
          : res.status(404).send("error");
      }
    } catch (error) {
      res.status(404).send(error);
    }
};

const getDetailPoke = async(req, res)=>{
    const {id} = req.params;
    const pokeDetail = await getPokeId(id);
    try {
        pokeDetail.length > 0
        ? res.status(200).send(pokeDetail)
        : res.status(404).send("not found");
    } catch (error) {
        res.status(400).send(error);
    };
};


const postCreate = async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, img, types } =
      req.body;
    try {
      if(name) {
        const allPoke = await getAllPokemon();
        const isPoke = allPoke.find((e) => e.name === name.toLowerCase());
        if (!isPoke) {
          const pokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            img,
          });
  
          const typeDb = await Type.findAll({
            where: {
              name: types,
            },
          });
          pokemon.addType(typeDb);
          return res.status(201).send(pokemon);
        }
        return res.status(404).send("Pokemon name already exist");
      }
      if (!name) return res.status(404).send("Pokemon name is obligatory");
      
    } catch (e) {
      console.log(e);
    }
};

module.exports = {getAll, getDetailPoke, postCreate}