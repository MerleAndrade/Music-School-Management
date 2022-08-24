package com.example.musicschoolmanagement.teacher;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
class TeacherServiceTest {

    private final TeacherRepo testTeacherRepo = mock(TeacherRepo.class);
    private final TeacherService testTeacherService = new TeacherService(testTeacherRepo);
    private final List<Teacher> testList = List.of(
            new Teacher("123", "Carlotta", "Meier", "Geige"),
            new Teacher("456", "Linus", "Müller", "Schlagzeug"),
            new Teacher("789", "Josephine", "Huber", "Gesang")
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
}