import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);


return(
    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard key={employee.id} employee={employee} />
      )}
    </div>
  );
};
export default EmployeeList