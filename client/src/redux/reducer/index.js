import {
    GET_POKEMONS
} from './../actions/actionTypes';

const initialState = {
    pokemons: [],
    allPokemons: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };
        default:
            return{
                ...state
            };
    }
};

export default rootReducer;