package com.example.musicschoolmanagement.controller;

import com.example.musicschoolmanagement.teacher.NewTeacher;
import com.example.musicschoolmanagement.teacher.Teacher;
import com.example.musicschoolmanagement.teacher.TeacherService;
import org.springframework.http.HttpStatus;
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
}
