import axios from 'axios';

import {
    GET_POKEMONS,
    GET_DETAILS
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

export const getDetail = (id)=>{
    return async (dispatch)=>{
        const pokedetail = (await axios(`http://localhost:3001/pokemons/${id}`)).data
        return dispatch({
            type: GET_DETAILS,
            payload: pokedetail
        });
    };
};