package com.ciandt.projectemployee.controller;

import com.ciandt.projectemployee.dto.EmployeeDto;
import com.ciandt.projectemployee.model.EmployeeModel;
import com.ciandt.projectemployee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<EmployeeModel> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/employees/{id}")
    public EmployeeModel getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id).get();
    }

    @PostMapping("/employees")
    public EmployeeModel saveEmployeeDetails(@RequestBody EmployeeModel employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("/employees")
    public EmployeeModel updateEmployee(@RequestBody EmployeeModel employee) {
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
