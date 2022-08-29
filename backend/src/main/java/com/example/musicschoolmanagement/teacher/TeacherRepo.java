package com.example.musicschoolmanagement.teacher;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface TeacherRepo extends MongoRepository<Teacher, String> {
    Teacher findByInstrument(String instrument);
}
