import React from "react";
import {Link} from 'react-router-dom';
import style from './Card.module.css'

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


export default function Card({ name, image, types, id}) {
    return (
      <div  className={style.container}>
        <Link to={`/pokemon/${id}`} style={{textDecoration: "none"}}>
          <div>
            <div className={style.divimg}>
              <img
                className={style.img}
                src={image}
                alt="img not found"
                width="200px"
                height="250px"
              />
            </div>
            <div className={style.name}>
              <h2 className={style.decoration}><center>{name}</center></h2>
            </div>
            <div className={style.types} >
            {types?.map((e, k) => {
              return (
                <div key={k}>
                  <img src={typeImage[e.name]} alt={`Logo ${e.name}`} />
                  <p><center>{e.name}</center></p>
                </div>
              );
            })}
          </div>
          </div>
        </Link>
      </div>
    );
  }