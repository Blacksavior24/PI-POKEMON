import axios from 'axios';

import {
    GET_POKEMONS
} from './actionTypes';

export const getpokemons = ()=>{
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
