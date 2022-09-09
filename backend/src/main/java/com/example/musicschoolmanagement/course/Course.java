package com.example.musicschoolmanagement.course;

import org.springframework.data.annotation.Id;

public record Course (
        @Id String id,
        String instrument,
        String firstNameTeacher
        ){
}
