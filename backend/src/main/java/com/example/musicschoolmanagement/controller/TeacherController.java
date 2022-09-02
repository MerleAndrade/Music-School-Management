package com.example.musicschoolmanagement.controller;

import com.example.musicschoolmanagement.course.Course;
import com.example.musicschoolmanagement.course.CourseService;
import com.example.musicschoolmanagement.teacher.*;
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
    private final CourseService courseService;

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
    @GetMapping("/instrument")
    public Set<String> getAllInstruments()
    {
        return teacherService.getAllInstruments();
    }

    @PostMapping("/instrument")
    @ResponseStatus(code = HttpStatus.CREATED)
    public List<Course> addInstrument(@PathVariable String instrument, @RequestBody List<Course> instruments) {
        return courseService.addInstrument(instrument);
    }

}
