package com.example.musicschoolmanagement.student;

import com.example.musicschoolmanagement.exceptions.StudentNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStudentById(@PathVariable String id) throws StudentNotFoundException {
        studentService.deleteStudentById(id);
    }

    @GetMapping("/firstnamestudents")
    public Set<String> getAllFirstNamesStudent() {
        return studentService.getAllFirstNamesStudent();
    }
}

