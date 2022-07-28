import React, { useEffect } from "react";
import {useDispatch, useSelector    } from 'react-redux'
import { getpokemons} from '../../redux/actions';
import Cards from "../Cards/Cards";

const Home = ()=>{
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=>state.pokemons); //state - reducer

    useEffect(()=>{
        dispatch(getpokemons());
        
    }, []);

    const handleClick = (e) =>{
        e.preventDefault();
        window.location.reload();
    };

    return (
        <div >
      
        <div>
          <div>
            <div>
              <Cards
                allPokemons={allPokemons}
              />
            </div>
          </div>
        </div>
    </div>
  );
    
}

export default Home;