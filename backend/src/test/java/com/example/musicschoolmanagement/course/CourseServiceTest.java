package com.example.musicschoolmanagement.course;

import com.example.musicschoolmanagement.teacher.NewTeacher;
import com.example.musicschoolmanagement.teacher.Teacher;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class CourseServiceTest {

    private final CourseRepo testCourseRepo = mock(CourseRepo.class);
    private final CourseService testCourseService = new CourseService(testCourseRepo);
    private final List<Course> testList = List.of(
            new Course("123", "Geige"),
            new Course("456", "Harfe"),
            new Course("789", "Orgel")
    );

    @Test
    @DisplayName("ListOfAllCourses")
    void getAllCourses() {
        //given
        when(testCourseRepo.findAll()).thenReturn(testList);
        //when
        List<Course> actual = testCourseService.getAllCourses();
        //then
        assertThat(actual).hasSameElementsAs(testList);
    }

    @Test
    @DisplayName("AddOneCourse")
    void AddCourse() {
        //given
        NewCourse testNewCourse = new NewCourse("Kontrabass");
        Course testCourse = new Course("234", "Kontrabass");
        when(testCourseRepo.save(any(Course.class))).thenReturn(testCourse);
        //when
        Course actual = testCourseService.addCourse(testNewCourse);
        // then
        Assertions.assertEquals(testCourse, actual);
    }
}
