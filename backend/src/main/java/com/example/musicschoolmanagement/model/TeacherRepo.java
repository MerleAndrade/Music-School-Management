package com.example.musicschoolmanagement.model;

import org.springframework.data.mongodb.repository.MongoRepository;
public interface TeacherRepo extends MongoRepository<Teacher, String> {
}
