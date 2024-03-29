import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemons, getAlltypes, postPokemon } from "../../redux/actions";
import style from './CreatePoke.module.css'


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


const validateName = /^[a-z]+$/i;
const validateNum = /^\d+$/;
const validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;

const validate = (input) => {
    let errors = {};
    if (!validateName.test(input.name) || input.name.length < 3) {
      errors.name = "Name required.";
    } else if (!validateNum.test(input.hp) || parseInt(input.hp) < 1) {
      errors.hp = "Number required. Higher than one";
    } else if (!validateNum.test(input.attack) || parseInt(input.attack) < 1) {
      errors.attack = "Number required. Higher than one";
    } else if (!validateNum.test(input.defense) || parseInt(input.defense) < 1) {
      errors.defense = "Number required. Higher than one";
    } else if (!validateNum.test(input.speed) || parseInt(input.speed) < 1) {
      errors.speed = "Number required. Higher than one";
    } else if (!validateNum.test(input.weight) || parseInt(input.weight) < 1) {
      errors.weight = "Number required. Higher than one";
    } else if (!validateNum.test(input.height) || parseInt(input.height) < 1) {
      errors.height = "Number required. Higher than one";
    } else if (!validateUrl.test(input.img)) {
      errors.img = "URL required";
    }
  
    return errors;
};

const valuesSubmit = (input) => {
    let values = {};
    if (input.name.length > 3) {
      values.name = input.name;
    }
    if (input.hp > 1) {
      values.hp = input.hp;
    }
    if (input.attack > 1) {
      values.attack = input.attack;
    }
    if (input.defense > 1) {
      values.defense = input.defense;
    }
    if (input.speed > 1) {
      values.speed = input.speed;
    }
    if (input.height > 1) {
      values.height = input.height;
    }
    if (input.weight > 1) {
      values.weight = input.weight;
    }
    if (input.img !== "") {
      values.img = input.img;
    }
    values.types = input.types;
    return values;
  };

const CreatePoke = ()=>{
    const dispatch = useDispatch();
    const types = useSelector((state)=>state.types);
    const history = useHistory();

    useEffect(()=>{
        dispatch(getAlltypes());
    }, [dispatch]);

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        hp:'',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
        img: ''
    });

    //cambios
    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value
            })
        );
    };

    //Select code
    const handleSelect = (e)=>{
        if(input.types.includes(e.target.value)){
            alert('Other type or create');
        }else{
            if(input.types.length < 2){
                setInput({
                    ...input,
                    types:[...input.types, e.target.value],
                });
                e.target.value = 'Select Type';
            }else{
                alert('Two types!!');
                e.target.value = 'Select type'
            }
        };
    };

    //Submit post
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!errors.name && !errors.hp && !errors.img && input.types.length >0){
            console.log(input);
            dispatch(postPokemon(valuesSubmit(input)));
            setInput({
                name: '',
                hp:'',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                types: [],
                img: ''
            });
            dispatch(cleanPokemons(dispatch));
            history.push('/home');
        }else{
            if(input.types.length <= 0){
                alert('Select types!');
            }else{
                alert('Error, Check the form');
            }
        }
    };

    //Delete 
    const handleDelete = (e)=>{
        setInput({
            ...input,
            types: input.types.filter((type)=> type !== e),
        });
    };

    //Error the form
    const handleError = (e)=>{
        e.preventDefault();
        alert('Complete the form')
    }

    return (
        <div className={style.container}>
        <div className={style.nav}>
            <Link to="/home">
            <span className={style.navTitle}>
                <button className={style.navBtn}>POKEWEB</button>
            </span>
            </Link>
        </div>
        <div className={style.main}>
            <div className={style.card}>
            <form
                onSubmit={(e) => {
                handleSubmit(e);
                }}
            >
                <div className={style.title}>
                <h2><center>New Pokemon!?</center></h2>
                </div>
                <div className={style.containerInput}>
                <div className={style.containerRight}>
                    <input
                    autocomplete="off"
                    className={style.input}
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Name"
                    />
                    <p>{errors.name}</p>
                    <input
                    className={style.input}
                    type="number"
                    value={input.hp}
                    name="hp"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="HP"
                    />
                    <p>{errors.hp}</p>
                    <input
                    className={style.input}
                    type="number"
                    value={input.attack}
                    name="attack"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Attack"
                    />
                    <p>{errors.attack}</p>
                    <input
                    className={style.input}
                    type="number"
                    value={input.defense}
                    name="defense"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Defense"
                    />
                    <p>{errors.defense}</p>
                </div>
                <div className={style.containerLeft}>
                    <input
                    className={style.input}
                    type="number"
                    value={input.speed}
                    name="speed"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder="Speed"
                    />
                    <p>{errors.speed}</p>

<input
  className={style.input}
  type="number"
  value={input.height}
  name="height"
  onChange={(e) => {
    handleChange(e);
  }}
  placeholder="Height"
/>
<p>{errors.height}</p>

<input
  className={style.input}
  type="number"
  value={input.weight}
  name="weight"
  onChange={(e) => {
    handleChange(e);
  }}
  placeholder="Weight"
/>
<p>{errors.weight}</p>

<input
  autocomplete="off"
  className={style.input}
  type="text"
  value={input.img}
  name="img"
  onChange={(e) => {
    handleChange(e);
  }}
  placeholder="URL Image..."
/>
                    <p>{errors.img}</p>
                </div>
                </div>
                <div className={style.containerTypes}>
                <div className={style.typesLeft}>
                    <select
                    className={style.select}
                    onChange={(e) => {
                        handleSelect(e);
                    }}
                    >
                    <option>Select type</option>
                    {types?.map((e) => {
                        return (
                        <option key={e.id} value={e.name}>
                            {e.name}
                        </option>
                        );
                    })}
                    </select>
                </div>
                <div className={style.typesRight}>
                    {input.types.map((e) => {
                    return (
                        <div className={style.typeSelect} key={e}>
                        <p>{e}</p>
                        <button
                            onClick={() => {
                            handleDelete(e);
                            }}
                        >
                            x
                        </button>
                        </div>
                    );
                    })}
                </div>
                </div>
                {input.name !== "" ? (
                <button className={style.btn} type="submit">
                    Create!
                </button>
                ) : (
                <button onClick={handleError} className={style.btn}>
                    Create!
                </button>
                )}
            </form>
            </div>
            {/* MUESTRA */}
            <div className={style.card}>
            <div className={style.containerImg}>
                {input.img === "" ? (
                <div></div>
                ) : (
                <img src={input.img} className={style.img} alt={input.name}/>
                )}
            </div>
            <div className={style.containerName}>
                <h2><center>{input.name}</center></h2>
            </div>
            <div>
                <h5>{input.hp}</h5>
            </div>
            <div className={style.containerType}>
                {input.types?.map((e, k) => {
                return (
                    <div key={k}>
                    <img src={typeImage[e]} alt={`Logo ${e}`} />
                    <p>{e}</p>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
        </div>
    );
};



export default CreatePoke;