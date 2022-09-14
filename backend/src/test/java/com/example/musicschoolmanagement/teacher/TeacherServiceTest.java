package com.example.musicschoolmanagement.teacher;

import com.example.musicschoolmanagement.exceptions.TeacherNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TeacherServiceTest {

    private final TeacherRepo testTeacherRepo = mock(TeacherRepo.class);
    private final TeacherService testTeacherService = new TeacherService(testTeacherRepo);
    private final List<Teacher> testList = List.of(
            new Teacher("123", "Carlotta", "Meier", "Geige"),
            new Teacher("456", "Linus", "Müller", "Schlagzeug"),
            new Teacher("789", "Josephine", "Huber", "Schlagzeug")
    );

    @Test
    @DisplayName("ListOfAllTeacher")
    void getAllTeacher() {
        //given
        when(testTeacherRepo.findAll()).thenReturn(testList);
        //when
        List<Teacher> actual = testTeacherService.getAllTeachers();
        //then
        assertThat(actual).hasSameElementsAs(testList);
    }

    @Test
    @DisplayName("AddOneTeacher")
    void getOneTeacher() {
        //given
        NewTeacher testNewTeacher = new NewTeacher("Felipe", "Andrade", "Kontrabass");
        Teacher testTeacher = new Teacher("sldkfjlsdkj", "Felipe", "Andrade", "Kontrabass");
        when(testTeacherRepo.save(any(Teacher.class))).thenReturn(testTeacher);
        //when
        Teacher actual = testTeacherService.addTeacher(testNewTeacher);
        // then
        Assertions.assertEquals(testTeacher, actual);
    }

    @Test
    void editTeacher() {
        Teacher testTeacher = new Teacher("sldkfjlsdkj", "Felipe", "Andrade", "Kontrabass");

        when(testTeacherRepo.existsById(testTeacher.id())).thenReturn(true);

        when(testTeacherRepo.save(any(Teacher.class)))
                .thenReturn(testTeacher);

        Teacher actualResult = testTeacherService.editTeacher(testTeacher);

        assertThat(actualResult).isEqualTo(testTeacher);
    }

    @Test
    @DisplayName("DeleteTeacherTestTeacherExists")
    void deleteTeacher() {
        //given
        when(testTeacherRepo.existsById("1234")).thenReturn(true);
        doNothing().when(testTeacherRepo).deleteById("1234");
        //when
        testTeacherService.deleteTeacherById("1234");
        // then
        verify(testTeacherRepo).deleteById("1234");
    }

    @Test
    @DisplayName("DeleteTeacherDoesNotExist")
    void deleteTeacherDoesNotExistTest() {
        //given
        when(testTeacherRepo.existsById("123")).thenReturn(false);
        doNothing().when(testTeacherRepo).deleteById("123");

        Assertions.assertThrows(TeacherNotFoundException.class, () -> testTeacherService.deleteTeacherById("123"));
    }


    @Test
    @DisplayName("GetAllInstruments")
    void getAllInstruments() {
        //given
        when(testTeacherRepo.findAll()).thenReturn(testList);
        //when
        Set<String> expected = new HashSet<>(List.of("Geige", "Schlagzeug"));
        Set<String> actual = testTeacherService.getAllInstruments();
        //then
        Assertions.assertEquals(expected, actual);
    }

    @Test
    @DisplayName("GetAllFirstNameTeachers")
    void getAllFirstNamesTeacher() {
        //given
        when(testTeacherRepo.findAll()).thenReturn(testList);
        //when
        Set<String> expected = new HashSet<>(List.of("Carlotta", "Josephine", "Linus"));
        Set<String> actual = testTeacherService.getAllFirstNamesTeacher();
        //then
        Assertions.assertEquals(expected, actual);
    }
}
