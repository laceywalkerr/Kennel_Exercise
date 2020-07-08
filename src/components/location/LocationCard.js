import React from "react";

const LocationCard = () => {
    return (
    <div className="card">
        <div className="card-content">
            <picture className="img">
                <img src={require("./location.png")} alt="Location Icon" />
            </picture>
            <h3>
                Location: <span className="card-Location">Port St. Lucy</span>
            </h3>
            <p>
                1415 North Ridge Way
            </p>
        </div>
    </div>
    );
};

export default LocationCard;
