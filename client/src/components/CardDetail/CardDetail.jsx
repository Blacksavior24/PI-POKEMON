import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import Loading from "../Loading/Loading";

const CardDetail = ()=>{
    const dispatch = useDispatch();
    const myPokemon = useSelector((state)=>state.pokeDetail);
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id));
        
    }, [dispatch, id]);

    return (
      <div>
        {myPokemon.length > 0 ? (
          <div>
            <div >
              <Link to="/home">
                <span >
                  <button >KANTODEX</button>
                </span>
              </Link>
            </div>
            <div >
              <div >
                <div >
                  <img
                    src={myPokemon[0].img}
                    alt="img not found"
                    height="350px"
                    width="300px"
                  />
                </div>
              </div>
              <div >
                <div >
                  <h2>{myPokemon[0].name}</h2>
                  <p>pokemon number: {myPokemon[0].id}</p>
                </div>
                <div >
                  <div >
                    <h3>hp:</h3>
                    <p>{myPokemon[0].hp}</p>
                    <h3>attack:</h3>
                    <p>{myPokemon[0].attack}</p>
                    <h3>defense:</h3>
                    <p>{myPokemon[0].defense}</p>
                  </div>
                  <div >
                    <h3>speed:</h3>
                    <p>{myPokemon[0].speed}</p>
                    <h3>height:</h3>
                    <p>{myPokemon[0].height}</p>
                    <h3>weight:</h3>
                    <p>{myPokemon[0].weight}</p>
                  </div>
                </div>
                <div >
                  {myPokemon[0].types.map((t) => {
                    return (
                      <div>
                        <img src={''} alt={`Logo ${t.name}`} />
                        <p>{t.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    );
};

export default CardDetail;