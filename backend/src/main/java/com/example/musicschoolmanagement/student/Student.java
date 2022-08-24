package com.example.musicschoolmanagement.student;

import org.springframework.data.annotation.Id;

public record Student(@Id String id,
                      String firstName,
                      String lastName,
                      String instrument
) {
}
