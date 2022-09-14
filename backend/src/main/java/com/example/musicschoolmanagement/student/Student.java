package com.example.musicschoolmanagement.student;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;

public record Student(
        @Id String id,
        @NotNull
        String firstNameStudent,
        @NotNull
        String lastNameStudent,
        @NotNull
        String instrumentStudent
) {
}
