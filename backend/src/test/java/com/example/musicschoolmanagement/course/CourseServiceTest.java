package com.example.musicschoolmanagement.course;

import com.example.musicschoolmanagement.exceptions.CourseNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;

class CourseServiceTest {

    private final CourseRepo testCourseRepo = mock(CourseRepo.class);
    private final CourseService testCourseService = new CourseService(testCourseRepo);
    private final List<Course> testList = List.of(
            new Course("123", "Geige", "Felipe", "Merle"),
            new Course("456", "Harfe", "Florian", "Penelope"),
            new Course("789", "Orgel", "Klara", "Esther")
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
        NewCourse testNewCourse = new NewCourse("Kontrabass", "Felipe", "Merle");
        Course testCourse = new Course("234", "Kontrabass", "Felipe", "Merle");
        when(testCourseRepo.save(any(Course.class))).thenReturn(testCourse);
        //when
        Course actual = testCourseService.addCourse(testNewCourse);
        // then
        Assertions.assertEquals(testCourse, actual);
    }

    @Test
    @DisplayName("DeleteCourseTestCourseExists")
    void deleteCourse() {
        //given
        when(testCourseRepo.existsById("1234")).thenReturn(true);
        doNothing().when(testCourseRepo).deleteById("1234");
        //when
        testCourseService.deleteCourseById("1234");
        // then
        verify(testCourseRepo).deleteById("1234");
    }

    @Test
    @DisplayName("DeleteCourseDoesNotExist")
    void deleteCourseDoesNotExistTest() {
        //given
        when(testCourseRepo.existsById("123")).thenReturn(false);
        doNothing().when(testCourseRepo).deleteById("123");

        Assertions.assertThrows(CourseNotFoundException.class, () -> testCourseService.deleteCourseById("123"));
    }
}
