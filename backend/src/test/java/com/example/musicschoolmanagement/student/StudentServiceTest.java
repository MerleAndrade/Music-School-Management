package com.example.musicschoolmanagement.student;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

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
    @DisplayName("DeleteStudent")
    void deleteStudent() {
        //given
        Student testStudent = new Student("sldkfjlsdkj", "Felipe", "Andrade", "Kontrabass");
        when(testStudentRepo.existsById(testStudent.id())).thenReturn(true);

        //when
        doNothing().when(testStudentRepo).deleteById(testStudent.id());
        testStudentRepo.deleteById(testStudent.id());

        // then
        verify(testStudentRepo).deleteById(testStudent.id());

    }
}
