package com.example.musicschoolmanagement.teacher;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;

public record Teacher(
        @Id String id,
        @NotNull
        String firstName,
        @NotNull
        String lastName,
        @NotNull
        String instrument
) {
}
