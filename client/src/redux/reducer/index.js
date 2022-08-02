import {
    GET_POKEMONS,
    GET_DETAILS,
    CLEAN_POKEMONS,
    GET_POKEMON_NAME,
    GET_ALL_TYPES,
    SET_CURRENT_PAGE,
    SORT_POKEMONS,
    FILTER_CREATED
} from './../actions/actionTypes';

import { filterPokemons, sortPokemons } from './utils';

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokeDetail: [],
    currentPage: 0,
    types: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };
        case GET_DETAILS:
            return{
                ...state,
                pokeDetail: action.payload
            };
        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemons: action.payload
            };
        case CLEAN_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokeDetail: action.payload
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            };
        case FILTER_CREATED:
            return {
                ...state,
                pokemons: filterPokemons(action.payload, state.allPokemons),
            };
        case SORT_POKEMONS:
            return {
                ...state,
                pokemons: sortPokemons(action.payload, state.pokemons),
            };
        default:
            return{
                ...state
            };
    }
};

export default rootReducer;