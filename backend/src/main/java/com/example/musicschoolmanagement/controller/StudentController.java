package com.example.musicschoolmanagement.controller;

import com.example.musicschoolmanagement.student.NewStudent;
import com.example.musicschoolmanagement.student.Student;
import com.example.musicschoolmanagement.student.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Student addStudent(@RequestBody NewStudent student) {
        return studentService.addStudent(student);
    }

}
