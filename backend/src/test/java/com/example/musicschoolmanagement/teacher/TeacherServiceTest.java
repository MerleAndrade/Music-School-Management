package com.example.musicschoolmanagement.teacher;

import com.example.musicschoolmanagement.teacher.NewTeacher;
import com.example.musicschoolmanagement.teacher.Teacher;
import com.example.musicschoolmanagement.teacher.TeacherRepo;
import com.example.musicschoolmanagement.teacher.TeacherService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
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
    @DisplayName("DeleteTeacher")
    void deleteTeacher() {
        //given
        Teacher testTeacher = new Teacher("sldkfjlsdkj", "Felipe", "Andrade", "Kontrabass");
        when(testTeacherRepo.existsById(testTeacher.id())).thenReturn(true);

        //when
        doNothing().when(testTeacherRepo).deleteById(testTeacher.id());
        testTeacherRepo.deleteById(testTeacher.id());

        // then
        verify(testTeacherRepo).deleteById(testTeacher.id());

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
    }
