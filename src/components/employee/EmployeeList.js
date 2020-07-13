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

  const deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getAll().then(setEmployees));
  };

  useEffect(() => {
    getEmployees();
  }, []);


return(
    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard 
        key={employee.id} 
        employee={employee}
        deleteEmployee={deleteEmployee}  />
      )}
    </div>
  );
};
export default EmployeeList