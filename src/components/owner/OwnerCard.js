import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.png")} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="card-Owner">Jim the Owner</span>
        </h3>
        <p>Pets: Doodle the Poodle</p>
      </div>
    </div>
  );
};

export default OwnerCard;