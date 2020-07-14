import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm';
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      <Route path="/login" component={Login} />

                           {/* **************START ANIMALS************** */}

      <Route exact path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
           return <AnimalList {...props} />
        } else {
           return <Redirect to="/login" />
        }
      }} />

      <Route path="/animals/:animalId(\d+)" render={(props) => {
      return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
      }} />

      <Route path="/animals/new" render={(props) => {
      return <AnimalForm {...props} />
      }} />

                              {/* **************END ANIMALS************** */}

      <Route
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
      return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
      }} />

      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
      return <EmployeeWithAnimals {...props} />
      }} />


      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />


    </React.Fragment>
  );
};


export default ApplicationViews;