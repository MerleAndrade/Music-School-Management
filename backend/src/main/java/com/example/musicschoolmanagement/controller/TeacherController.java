package com.example.musicschoolmanagement.controller;

import com.example.musicschoolmanagement.teacher.NewTeacher;
import com.example.musicschoolmanagement.teacher.Teacher;
import com.example.musicschoolmanagement.teacher.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;


@RestController
@RequestMapping("/api/teachers")
@AllArgsConstructor

public class TeacherController {

    private final TeacherService teacherService;

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

    @GetMapping("/instruments")
    public Set<String> getAllInstruments() {
        return teacherService.getAllInstruments();
    }
}
