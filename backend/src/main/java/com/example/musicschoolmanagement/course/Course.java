package com.example.musicschoolmanagement.course;

import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Course {
    String instrument;

    public Course(String instrument) {
        this.instrument = instrument;
    }
}
