package com.example.musicschoolmanagement.model;

import org.springframework.data.annotation.Id;

public record Teacher(
        @Id String id,
        String firstName,
        String lastName,
        String instrument
) {
}
