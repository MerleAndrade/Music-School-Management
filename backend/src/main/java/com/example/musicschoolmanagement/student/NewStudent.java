package com.example.musicschoolmanagement.student;

import java.util.UUID;

public record NewStudent(String firstNameStudent,
                         String lastNameStudent,
                         String instrumentStudent) {

    public Student withRandomId() {
        return new Student(UUID.randomUUID().toString(), firstNameStudent(), lastNameStudent(), instrumentStudent());
    }
}
