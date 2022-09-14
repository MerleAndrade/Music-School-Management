package com.example.musicschoolmanagement.course;

import com.example.musicschoolmanagement.exceptions.CourseNotFoundException;
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

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCourseById(@PathVariable String id) throws CourseNotFoundException {
        courseService.deleteCourseById(id);
    }
}
