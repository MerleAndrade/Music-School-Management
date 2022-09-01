package com.example.musicschoolmanagement.course;


import com.example.musicschoolmanagement.teacher.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
@RequestMapping("/api/")
@AllArgsConstructor
public class CourseController {

    private CourseRepo courseRepo;
    private TeacherService teacherService;


    @PostMapping("teachers/instruments")
    public ResponseEntity createCourse(@RequestBody Course course) {
        Course savedCourse = courseRepo.save(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("course/{id}")
    public ResponseEntity getCourseById(@PathVariable String id) {
        return courseRepo.findById(id)
                .map(course -> new ResponseEntity<>(course, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("teachers/instruments")
    public Set<String> getAllInstruments() {
        return teacherService.getAllInstruments();
    }
}
