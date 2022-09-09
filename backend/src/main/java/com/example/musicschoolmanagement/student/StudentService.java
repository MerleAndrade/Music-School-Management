package com.example.musicschoolmanagement.student;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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

    public boolean deleteStudent(String id) {
        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
            return true;
        }
        return false;
    }

    public Set<String> getAllFirstNamesStudent() {
        List<Student> students = getAllStudents();
        return students.stream()
                .map(Student::firstNameStudent)
                .collect(Collectors.toSet());
    }
}
