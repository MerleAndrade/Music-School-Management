package com.example.musicschoolmanagement.teacher;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TeacherService {
    private final TeacherRepo teacherRepo;

    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }
    public Teacher addTeacher(NewTeacher newTeacher) {
        return teacherRepo.save(newTeacher.withRandomId());
    }

    public boolean deleteTeacher(String id) {
        if (teacherRepo.existsById(id)) {
            teacherRepo.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Teacher> findByInstrument(String instrument) {
        return Optional.of(teacherRepo.findByInstrument(instrument));
    }
}
