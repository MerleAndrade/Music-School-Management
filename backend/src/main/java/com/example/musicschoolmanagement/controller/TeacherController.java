package com.example.musicschoolmanagement.controller;

import com.example.musicschoolmanagement.model.NewTeacher;
import com.example.musicschoolmanagement.model.Teacher;
import com.example.musicschoolmanagement.model.TeacherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<Teacher> getAllTeachers() {
        return teacherService.getAllTeachers();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Teacher addTeacher(@RequestBody NewTeacher teacher) {
        return teacherService.addTeacher(teacher);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable String id) {
        boolean deleteSuccess = teacherService.deleteTeacher(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);
    }
}