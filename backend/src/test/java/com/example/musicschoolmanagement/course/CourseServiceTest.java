package com.example.musicschoolmanagement.course;

import com.example.musicschoolmanagement.student.Student;
import com.example.musicschoolmanagement.teacher.NewTeacher;
import com.example.musicschoolmanagement.teacher.Teacher;
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
    @DisplayName("DeleteCourse")
    void deleteCourse() {
        //given
        Course testCourse = new Course("sldkfjlsdkj", "Kontrabass", "Felipe", "Merle");
        when(testCourseRepo.existsById(testCourse.id())).thenReturn(true);

        //when
        doNothing().when(testCourseRepo).deleteById(testCourse.id());
        testCourseRepo.deleteById(testCourse.id());

        // then
        verify(testCourseRepo).deleteById(testCourse.id());
    }

    @Test
    @DisplayName("DeleteCourseDoesNotExist")
    void deleteCourseDoesNotExistTest() {
        Course testCourse = new Course("dfjlsdjfklj", "Kontrabass", null, null);
        when(testCourseRepo.existsById(testCourse.id())).thenReturn(false);
        doNothing().when(testCourseRepo).deleteById(testCourse.id());

        testCourseService.deleteCourse(testCourse.id());
        verify(testCourseRepo, times(0)).deleteById(testCourse.id());
    }
}
