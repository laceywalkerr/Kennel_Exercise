import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css';
 

const LocationDetail = props => {
  const [location, setLocation] = useState({ address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          address: location.address,
        });
        setIsLoading(true);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h3>Address: <span style={{ color: 'darkslategrey' }}>{location.address}</span></h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Close Location</button>
      </div>
    </div>
  );
}

export default LocationDetail;