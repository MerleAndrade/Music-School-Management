package com.example.musicschoolmanagement.teacher;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepo extends MongoRepository<Teacher, String> {

}
