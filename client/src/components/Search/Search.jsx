import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, cleanPokemons } from "../../redux/actions";
import {HiSearch} from 'react-icons/hi'

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    //console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanPokemons(dispatch));
    if (name !== "") {
      dispatch(getPokemonByName(name));
    } else {
      return alert("hola");
    }
    // setName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={name}
        />
        <button  type="submit">
          <HiSearch /> Search {/* componenete que solo genera un icono ._. */} 
          
        </button>
      </form>
    </div>
  );
};

export default Search;