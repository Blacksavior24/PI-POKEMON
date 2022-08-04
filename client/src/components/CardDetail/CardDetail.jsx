import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import Loading from "../Loading/Loading";
import style from './CardDetail.module.css'

const normal = "https://typedex.app/images/ui/types/dark/normal.svg";
const fighting = "https://typedex.app/images/ui/types/dark/fighting.svg";
const flying = "https://typedex.app/images/ui/types/dark/flying.svg";
const poison = "https://typedex.app/images/ui/types/dark/poison.svg";
const ground = "https://typedex.app/images/ui/types/dark/ground.svg";
const rock = "https://typedex.app/images/ui/types/dark/rock.svg";
const bug = "https://typedex.app/images/ui/types/dark/bug.svg";
const ghost = "https://typedex.app/images/ui/types/dark/ghost.svg";
const steel = "https://typedex.app/images/ui/types/dark/steel.svg";
const fire = "https://typedex.app/images/ui/types/dark/fire.svg";
const water = "https://typedex.app/images/ui/types/dark/water.svg";
const grass = "https://typedex.app/images/ui/types/dark/grass.svg";
const electric = "https://typedex.app/images/ui/types/dark/electric.svg";
const psychic = "https://typedex.app/images/ui/types/dark/psychic.svg";
const ice = "https://typedex.app/images/ui/types/dark/ice.svg";
const dragon = "https://typedex.app/images/ui/types/dark/dragon.svg";
const dark = "https://typedex.app/images/ui/types/dark/dark.svg";
const fairy = "https://typedex.app/images/ui/types/dark/fairy.svg";

const typeImage = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};


const CardDetail = ()=>{
    const dispatch = useDispatch();
    const myPokemon = useSelector((state)=>state.pokeDetail);
    const {id} = useParams();
    useEffect(()=>{
        dispatch(getDetail(id));
        
    }, [dispatch, id]);

    return (
      <div className={style.body}>
        {myPokemon.length > 0 ? (
          <div>
            <div className={style.nav}>
              <Link to="/home">
                <span className={style.navTitle}>
                  <button className={style.navBtn}>POKEWARD</button>
                </span>
              </Link>
            </div>
            <div className={style.container}>
              <div className={style.containerLeft}>
                <div className={style.containerImg}>
                  <img
                    src={myPokemon[0].img}
                    alt="img not found"
                    height="350px"
                    width="300px"
                  />
                </div>
              </div>
              <div className={style.containerRight}>
                <div className={style.containerName}>
                  <h2>{myPokemon[0].name}</h2>
                  <p>pokemon number: {myPokemon[0].id}</p>
                </div>
                <div className={style.containerInfo}>
                  <div className={style.infoLeft}>
                    <h3>hp:</h3>
                    <p>{myPokemon[0].hp}</p>
                    <h3>attack:</h3>
                    <p>{myPokemon[0].attack}</p>
                    <h3>defense:</h3>
                    <p>{myPokemon[0].defense}</p>
                  </div>
                  <div className={style.infoRight}>
                    <h3>speed:</h3>
                    <p>{myPokemon[0].speed}</p>
                    <h3>height:</h3>
                    <p>{myPokemon[0].height}</p>
                    <h3>weight:</h3>
                    <p>{myPokemon[0].weight}</p>
                  </div>
                </div>
                <div className={style.containerTypes}>
                  {myPokemon[0].types.map((t) => {
                    return (
                      <div>
                        <img src={typeImage[t.name]} alt={`Logo ${t.name}`} />
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