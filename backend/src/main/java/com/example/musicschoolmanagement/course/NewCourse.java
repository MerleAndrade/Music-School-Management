package com.example.musicschoolmanagement.course;

import java.util.UUID;

public record NewCourse(String instrument, String firstNameTeacher, String firstNameStudent) {

    public Course withRandomId() {
        return new Course(UUID.randomUUID().toString(), instrument(), firstNameTeacher(), firstNameStudent());
    }
}
