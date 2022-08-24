package com.example.musicschoolmanagement.student;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepo studentRepo;
    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    public Student addStudent(NewStudent newStudent) {
        return studentRepo.save(newStudent.withRandomId());
    }
}
