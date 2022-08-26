package com.example.musicschoolmanagement.student;

import java.util.UUID;

public record NewStudent(String firstName,
                         String lastName,
                         String instrument) {

    public Student withRandomId() {
        return new Student(UUID.randomUUID().toString(), firstName(), lastName(), instrument());
    }
}
