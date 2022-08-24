package com.example.musicschoolmanagement.teacher;

import java.util.UUID;

public record NewTeacher(String firstName,
                         String lastName,
                         String instrument) {

    public Teacher withRandomId() {
        return new Teacher(UUID.randomUUID().toString(), firstName(), lastName(), instrument());
    }
}
