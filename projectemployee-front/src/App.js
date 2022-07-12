import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import NotFound from "./components/NotFound";
import EmployeesList from "./components/EmployeesList";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EmployeesList/>} />
        <Route path="/add" element={<AddEmployee/>}></Route>
        <Route path="/employees/edit/:id" element={<AddEmployee/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
