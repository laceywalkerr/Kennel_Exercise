import React from "react";
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers';

const AnimalCard = props => {
  console.log("hello", props)
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`./dog.svg`)} alt="Pet" />
        </picture>
        <h3>Name: <span className="card-petname">
          {firstLetterCase(props.animal.name)}
        </span></h3>
        <p>Breed: {props.animal.breed}</p>
        <Link to={`/animals/${props.animal.id}`}>
        <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
      </div>
    </div>
  );
}

export default AnimalCard;