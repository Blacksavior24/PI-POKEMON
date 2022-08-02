import axios from 'axios';

import {
    GET_POKEMONS,
    GET_DETAILS,
    GET_POKEMON_NAME,
    CLEAN_POKEMONS,
    SET_CURRENT_PAGE,
    GET_ALL_TYPES,
    FILTER_CREATED,
    SORT_POKEMONS
} from './actionTypes';

export const getPokemons = ()=>{
    return async(dispatch) => {
        try{
            let json = await axios('http://localhost:3001/pokemons');
            return dispatch({
                type: GET_POKEMONS,
                payload: json.data
            })
        }catch(err){
            console.log(err);         
        }
    };
}; 

export const getDetail = (id)=>{
    return async (dispatch)=>{
        const pokedetail = (await axios(`http://localhost:3001/pokemons/${id}`)).data
        return dispatch({
            type: GET_DETAILS,
            payload: pokedetail
        });
    };
};

export const cleanPokemons = (dispatch) => {
    return dispatch({
      type: CLEAN_POKEMONS,
      payload: [],
    });
};

export const getPokemonByName = (name) => {
    return async (dispatch) => {
      try {
        var json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({
          type: GET_POKEMON_NAME,
          payload: json.data,
        });
      } catch (e) {
        window.location.href = "http://localhost:3000/404";
        console.log(e);
      }
    };
};

export const getAlltypes = () => {
    return async (dispatch) => {
      try {
        const url = "http://localhost:3001/types";
        const info = await axios.get(url);
        return dispatch({
          type: GET_ALL_TYPES,
          payload: info.data,
        });
      } catch (e) {
        console.log(e);
      }
    };
};

export const postPokemon = (payload) => {
    return async () => {
      try {
        const createPoke = await axios.post(
          "http://localhost:3001/pokemons",
          payload
        );
        alert("New pokemón is created!");
        return createPoke;
      } catch (e) {
        alert("Pokemon name already exist");
        console.log(e);
      }
    };
};

export const setCurrentPage = (payload) => {
    return {
      type: SET_CURRENT_PAGE,
      payload,
    };
  };
  export const filterCreated = (payload) => {
    return {
      type: FILTER_CREATED,
      payload,
    };
  };
  export const sortPokemons = (payload) => {
    return {
      type: SORT_POKEMONS,
      payload,
    };
  };