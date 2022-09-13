package com.example.musicschoolmanagement.course;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
@AllArgsConstructor
public class CourseService {

    private final CourseRepo courseRepo;

    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }

    public Course addCourse(NewCourse newCourse) {
        return courseRepo.save(newCourse.withRandomId());
    }

    public boolean deleteCourse(String id) {
        if (courseRepo.existsById(id)) {
            courseRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
