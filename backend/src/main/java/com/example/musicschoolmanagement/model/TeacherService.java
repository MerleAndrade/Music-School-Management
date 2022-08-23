package com.example.musicschoolmanagement.model;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepo teacherRepo;

    public TeacherService(TeacherRepo teacherRepo) {
        this.teacherRepo = teacherRepo;
    }

    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }

    public Teacher addTeacher(NewTeacher newTeacher) {
        return teacherRepo.save(newTeacher.withRandomId());
    }
}
