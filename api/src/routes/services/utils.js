const axios = require('axios');
const {Pokemon, Type} = require('./../../db')

//pokemons api
const getApiInfo = async() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let pokemons = [];
    while (pokemons.length < 60) {//cantidad sin usar limit ahora de 20 en 20
      let info = await axios.get(url);
      let pokemonesApi = info.data;
      let auxPokemones = pokemonesApi.results.map((e) => {
        return {
          name: e.name,
          url: e.url,
        };
      });
      pokemons.push(...auxPokemones);
      url = pokemonesApi.next;
    }
    let pokesPromise = pokemons.map(async (p) => {
        let pokemon = await axios.get(p.url);
        return {
          id: pokemon.data.id,
          name: pokemon.data.name,
          img: pokemon.data.sprites.front_default,
          types: pokemon.data.types.map((e) => {
            return {
              name: e.type.name,
              img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
            };
          }),
          hp: pokemon.data.stats[0].base_stat,
          attack: pokemon.data.stats[1].base_stat,
          defense: pokemon.data.stats[2].base_stat,
          speed: pokemon.data.stats[5].base_stat,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
        };
      });
      pokesWithData = await Promise.all(pokesPromise);
      //console.log(pokesWithData);
      return pokesWithData;
}


//pokemons de la base de datos
const getDbInfo = async()=>{
    return await Pokemon.findAll({
        include:{
            model: Type,    
            attributes: ["name"],
        },
    });
};

//pokemons total
const getAllPokemon = async()=>{
    const ApiInfo = await getApiInfo();
    const DbInfo = await getDbInfo();
    const allPokemon = [...ApiInfo,...DbInfo];

    return allPokemon;
}
//pokemon por id
const getIdApi = async(id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = (await axios(url)).data;

    const pokemoninfo = [
        {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.front_default,
            types: pokemon.types.map((e)=>{
                return{
                    name: e.type.name,
                };
            }),
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
        },
    ];
    return pokemoninfo;
}

const getIdDb = async(id)=>{
    const pokemon = await getDbInfo();
    const pokemoninfo = pokemon.filter((e)=>e.id= id);

    return pokemoninfo;
}


//CONDICION BUSCADO
const getPokeId = async (id) => {
    let pokeDetail;
    if (id.length < 5) {
      pokeDetail = await getIdApi(id);
    } else {
      pokeDetail = await getIdDb(id);
    }
  
    return pokeDetail;
  };
  
//BUSCAR POR NAME
const getPokeName = async (name) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let pokemon = (await axios.get(url)).data;
  
    let pokemonInfo = [
      {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default,
        types: pokemon.types.map((e) => {
          return {
            name: e.type.name,
          };
        }),
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
      },
    ];
  
    return pokemonInfo;
};
/*
const getDbName = async (name) => {
    const pokemon = await getDbInfo();
    const pokename = pokemon.filter((e)=>e.name = name);
    console.log(pokename);
    return pokename;
}

const getName = async (name) => {
    const ApiName = await getPokeName(name);
    const DbName = await getDbName(name);
    if (DbName) {
        console.log(DbName);
        return DbName;
    } else {
        console.log(ApiName);
        return ApiName;
    }
}
*/


module.exports = {
    getAllPokemon,
    getPokeId,
    getPokeName
}