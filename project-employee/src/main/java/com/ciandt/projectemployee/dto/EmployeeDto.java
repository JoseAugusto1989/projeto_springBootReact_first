package com.ciandt.projectemployee.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class EmployeeDto {

    @NotBlank
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String location;

    @NotBlank
    private String department;
}
