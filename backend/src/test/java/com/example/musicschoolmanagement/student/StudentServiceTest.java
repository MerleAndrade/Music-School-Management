package com.example.musicschoolmanagement.student;

import com.example.musicschoolmanagement.exceptions.StudentNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;

class StudentServiceTest {


    private final StudentRepo testStudentRepo = mock(StudentRepo.class);
    private final StudentService testStudentService = new StudentService(testStudentRepo);
    private final List<Student> testList = List.of(
            new Student("123", "Carlotta", "Meier", "Geige"),
            new Student("456", "Linus", "Müller", "Schlagzeug"),
            new Student("789", "Josephine", "Huber", "Gesang")
    );

    @Test
    @DisplayName("ListOfAllStudents")
    void getAllStudents() {
        //given
        when(testStudentRepo.findAll()).thenReturn(testList);
        //when
        List<Student> actual = testStudentService.getAllStudents();
        //then
        assertThat(actual).hasSameElementsAs(testList);
    }

    @Test
    @DisplayName("AddOneStudent")
    void getOneStudent() {
        //given
        NewStudent testNewStudent = new NewStudent("Felipe", "Andrade", "Kontrabass");
        Student testStudent = new Student("sldkfjlsdkj", "Felipe", "Andrade", "Kontrabass");
        when(testStudentRepo.save(any(Student.class))).thenReturn(testStudent);
        //when
        Student actual = testStudentService.addStudent(testNewStudent);
        // then
        Assertions.assertEquals(testStudent, actual);
    }

    @Test
    @DisplayName("DeleteStudentTestStudentExists")
    void deleteStudent() {
        //given
        when(testStudentRepo.existsById("1234")).thenReturn(true);
        doNothing().when(testStudentRepo).deleteById("1234");
        //when
        testStudentService.deleteStudentById("1234");
        // then
        verify(testStudentRepo).deleteById("1234");
    }

    @Test
    @DisplayName("DeleteStudentDoesNotExist")
    void deleteStudentDoesNotExistTest() {
        //given
        when(testStudentRepo.existsById("123")).thenReturn(false);
        doNothing().when(testStudentRepo).deleteById("123");

        Assertions.assertThrows(StudentNotFoundException.class, () -> testStudentService.deleteStudentById("123"));
    }

    @Test
    @DisplayName("GetAllFirstNameStudents")
    void getAllFirstNamesStudent() {
        //given
        when(testStudentRepo.findAll()).thenReturn(testList);
        //when
        Set<String> expected = new HashSet<>(List.of("Carlotta", "Josephine", "Linus"));
        Set<String> actual = testStudentService.getAllFirstNamesStudent();
        //then
        Assertions.assertEquals(expected, actual);
    }
}
