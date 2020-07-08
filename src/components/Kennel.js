import React from "react";
import AnimalCard from './animal/AnimalCard';
import "./Kennel.css";
import EmployeeCard from './employee/EmployeeCard';
import OwnerCard from './owner/OwnerCard';
import LocationCard from './location/LocationCard';
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";


const Kennel = () => {
  return (
    <div>
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>

      <div>
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>

      <div>
        <EmployeeCard />
      </div>

      <div>
        <OwnerCard />
      </div>

      <div>
        <LocationCard />
      </div>
    </div>

  );
};

export default Kennel;