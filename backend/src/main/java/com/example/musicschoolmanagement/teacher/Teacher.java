package com.example.musicschoolmanagement.teacher;

import org.springframework.data.annotation.Id;

public record Teacher(@Id String id,
        String firstName,
        String lastName,
        String instrument
) {
}
