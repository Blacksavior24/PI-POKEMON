import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlltypes, filterCreated, setCurrentPage } from './../../redux/actions';
import './FilterType.css';

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



const FilterTypes = ({ setRefreshState }) => {
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.types);
    
    useEffect(() => {
      dispatch(getAlltypes());
    }, [dispatch]);

    const handleFilterType = (e) => {
      e.preventDefault();
      dispatch(filterCreated(e.target.alt));
      dispatch(setCurrentPage(0));
      setRefreshState((prevState) => !prevState);
    };

    return (
      <div className="filterType">
        {allTypes?.map((t, k) => (
          <button
            className="btn"
            key={k}
            onClick={(e) => handleFilterType(e)}
            value={t.name}
          >
            <div className="img-filterType">
              <img src={typeImage[t.name]} value={t.name} alt={`${t.name}`} />
            </div>
          </button>
        ))}
      </div>
    );
};
export default FilterTypes;