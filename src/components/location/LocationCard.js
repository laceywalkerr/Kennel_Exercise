import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h3>Location: <span className="card-locationname">
          {props.location.address}
        </span></h3>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
      </div>
    </div>
  );
}

export default LocationCard;
