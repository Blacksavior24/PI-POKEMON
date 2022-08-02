import React, { useEffect, useState } from "react";
import {useDispatch, useSelector    } from 'react-redux'
import { getPokemons, cleanPokemons} from '../../redux/actions';
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import style from './Home.module.css'

const Home = ()=>{
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=>state.pokemons); //state - reducer

    const [, setRefreshState] = useState(false);

    useEffect(()=>{
        dispatch(getPokemons());
        return ()=>{
          dispatch(cleanPokemons(dispatch));
        }
    }, [dispatch]);

    const handleClick = (e) =>{
        e.preventDefault();
        window.location.reload();
    };

    return (
      <div className={style.body}>
        {allPokemons.length > 0 ? (
        <div>
        <Nav handleClick={handleClick} />

        <Filters setRefreshState={setRefreshState} />

        <Cards allPokemons={allPokemons} />
      </div>
      ) : (
        <Loading />
      )}
      </div>
  );
    
}

export default Home;