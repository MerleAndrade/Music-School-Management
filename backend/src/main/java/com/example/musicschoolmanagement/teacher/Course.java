package com.example.musicschoolmanagement.teacher;


import org.springframework.data.annotation.Id;

public record Course(
        @Id String id,
        String instrument) {
}
