package com.example.musicschoolmanagement.teacher;

import com.example.musicschoolmanagement.exceptions.TeacherNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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

    @PutMapping("/{id}")
    public ResponseEntity<Teacher> updatedTeacher(
            @PathVariable String id,
            @RequestBody Teacher teacher) {
        Teacher updatedTeacherDetails = teacherService.editTeacher(teacher);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(updatedTeacherDetails);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTeacherById(@PathVariable String id) throws TeacherNotFoundException {
        teacherService.deleteTeacherById(id);
    }

    @GetMapping("/instruments")
    public Set<String> getAllInstruments() {
        return teacherService.getAllInstruments();
    }

    @GetMapping("/firstnameteachers")
    public Set<String> getAllFirstNamesTeacher() {
        return teacherService.getAllFirstNamesTeacher();
    }
}

