import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, cleanPokemons } from "../../redux/actions";
import {HiSearch} from 'react-icons/hi'
import style from './Search.module.css'

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanPokemons(dispatch));
    if (name !== "") {
      dispatch(getPokemonByName(name));
    } else {
      return alert("hola");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
      <div className={style.div}>
          
      <input
          className={style.input}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={name}
        />
        <button className={style.btn} type="submit">
          <HiSearch size='42px'/> {/* componenete que solo genera un icono ._. */} 
          
        </button>
        </div>
      </form>
    </div>
  );
};

export default Search;