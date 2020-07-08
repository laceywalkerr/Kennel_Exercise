import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="Employee" />
        </picture>
        <h3>
          Name: <span className="card-Employee">Tom the Employee</span>
        </h3>
        <p>Job: Kennel Employee</p>
      </div>
    </div>
  );
};

export default EmployeeCard;