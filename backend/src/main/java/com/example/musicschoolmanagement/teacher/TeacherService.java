package com.example.musicschoolmanagement.teacher;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TeacherService {
    private final TeacherRepo teacherRepo;

    public TeacherService(TeacherRepo teacherRepo) {this.teacherRepo = teacherRepo;}
    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }
    public Teacher addTeacher(NewTeacher newTeacher) {
        return teacherRepo.save(newTeacher.withRandomId());
    }

    public Teacher editTeacher(Teacher updatedTeacher){
        teacherRepo.save(updatedTeacher);

        return updatedTeacher;
    }

    public boolean deleteTeacher (String id) {
        if (teacherRepo.existsById(id)) {
            teacherRepo.deleteById(id);
            return true;
        }
        return false;
    }

    public Set<String> getAllInstruments() {
        List<Teacher> teachers = getAllTeachers();
        return teachers.stream()
                .map(Teacher::instrument)
                .collect(Collectors.toSet());
    }
}
