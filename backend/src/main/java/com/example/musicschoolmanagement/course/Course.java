package com.example.musicschoolmanagement.course;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;

public record Course (
        @Id String id,
        @NotNull
        String instrument,
        @NotNull
        String firstNameTeacher,
        @NotNull
        String firstNameStudent
        ){
}
