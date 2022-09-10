package com.example.musicschoolmanagement.controller;

import com.example.musicschoolmanagement.course.Course;
import com.example.musicschoolmanagement.course.CourseService;
import com.example.musicschoolmanagement.course.NewCourse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor

public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course addCourse(@RequestBody NewCourse course) {
        return courseService.addCourse(course);
    }


}
