import {
    GET_POKEMONS,
    GET_DETAILS
} from './../actions/actionTypes';

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokeDetail: []
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
        default:
            return{
                ...state
            };
    }
};

export default rootReducer;