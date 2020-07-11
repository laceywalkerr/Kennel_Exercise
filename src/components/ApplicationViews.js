import { Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard";
//only include these once they are built - previous practice exercise

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalCard />;
        }}
      />
      <Route
        path="/location"
        render={props => {
          return <LocationCard />;
        }}
      />
      <Route
        path="/employee"
        render={props => {
          return <EmployeeCard />;
        }}
      />
      <Route
        path="/owner"
        render={props => {
          return <OwnerCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;