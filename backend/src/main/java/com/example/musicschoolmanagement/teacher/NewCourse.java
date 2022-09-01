package com.example.musicschoolmanagement.teacher;


import java.util.UUID;

public record NewCourse (String instrument) {

    public Course withRandomId() {
        return new Course(UUID.randomUUID().toString(), instrument());
    }
}