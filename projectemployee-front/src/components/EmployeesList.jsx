import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import employeeService from '../services/employee.service'

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      init();
    }, []);

    const init = () => {
        employeeService
        .getAll()
        .then((resp) => {
          console.log("Printing the employees data", resp.data);
          setEmployees(resp.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }

    const handleDelete = id => {
        employeeService.remove(id)
        .then(resp => {
            console.log("Employee deleted successfully", resp.data)
            init();
        })
        .catch(error => {
            console.log("Something went wrong", error)
        })
    }

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employees</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <td>Name</td>
              <td>Location</td>
              <td>Department</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>
                    <Link className="btn btn-info ml-4" to={`/employees/edit/${employee.id}`}>Update</Link>
                    <button className="btn btn-danger ml-4" onClick={(e) => {
                        handleDelete(employee.id)
                    }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesList;
