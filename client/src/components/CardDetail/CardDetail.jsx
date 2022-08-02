import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";

const CardDetail = ()=>{
    const dispatch = useDispatch();
    const pokemon = useSelector((state)=>state.pokeDetail);
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id));
        
    }, [dispatch, id]);

    console.log(pokemon)

    return(
        <div>
            <div>
            <Link to="/home">
              <span>
                <button>Kanto Pokedex</button>
              </span>
            </Link>
          </div>
          <div >
            <div >
              <div >
                <img
                  src=''
                  alt="img not found"
                  height="350px"
                  width="300px"
                />
              </div>
            </div>
            <div >
              <div >
                <h2>{pokemon.name}</h2>
                <p>pokemon number: {pokemon[0].id}</p>
              </div>
              <div >
                <div >
                  <h3>hp:</h3>
                  <p>{pokemon[0].hp}</p>
                  <h3>attack:</h3>
                  <p>{pokemon[0].attack}</p>
                  <h3>defense:</h3>
                  <p>{pokemon[0].defense}</p>
                </div>
                <div >
                  <h3>speed:</h3>
                  <p>{pokemon[0].speed}</p>
                  <h3>height:</h3>
                  <p>{pokemon[0].height}</p>
                  <h3>weight:</h3>
                  <p>{pokemon[0].weight}</p>
                </div>
              </div>
            </div>
          </div>
       
        </div>
    )
}

export default CardDetail;