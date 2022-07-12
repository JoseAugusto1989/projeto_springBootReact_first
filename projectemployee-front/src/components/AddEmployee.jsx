import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import employeeService from "../services/employee.service";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const history = useNavigate();

  const { id } = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { name, location, department, id };
    if (id) {
      //update
      employeeService
        .update(employee)
        .then((resp) => {
          console.log("Employee data updated sucessfully", resp.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      employeeService
        .create(employee)
        .then((resp) => {
          console.log("Employee added sucessfully", resp.data);
          history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      employeeService
        .get(id)
        .then((employee) => {
          setName(employee.data.name);
          setLocation(employee.data.location);
          setDepartment(employee.data.department);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Add New Employee</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter Department"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </div>

        <div>
          <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddEmployee;