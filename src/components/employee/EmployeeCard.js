import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./employee.png')} alt="Employee Photo" />
        </picture>
        <h3>Name: <span className="card-employeename">
          {props.employee.name}
        </span></h3>
        <p>Job: {props.employee.job}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;