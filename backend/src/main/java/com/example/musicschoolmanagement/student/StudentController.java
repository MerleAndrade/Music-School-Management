package com.example.musicschoolmanagement.student;

import com.example.musicschoolmanagement.exceptions.StudentNotFoundException;
import com.example.musicschoolmanagement.student.NewStudent;
import com.example.musicschoolmanagement.student.Student;
import com.example.musicschoolmanagement.student.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Void> deleteStudent(@PathVariable String id) throws StudentNotFoundException {
        boolean deleteSuccess = studentService.deleteStudent(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);
    }

    @GetMapping("/firstnamestudents")
    public Set<String> getAllFirstNamesStudent()
    {
        return studentService.getAllFirstNamesStudent();
    }
}
