package com.example.musicschoolmanagement;

import com.example.musicschoolmanagement.model.Teacher;
import com.example.musicschoolmanagement.model.TeacherRepo;
import com.example.musicschoolmanagement.model.TeacherService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class TeacherServiceTest {

    private final TeacherRepo testTeacherRepo = mock(TeacherRepo.class);
    private final TeacherService teacherService = new TeacherService(testTeacherRepo);

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
        List<Teacher> actual = teacherService.getAllTeachers();

        //then
        assertThat(actual).hasSameElementsAs(testList);
    }

}
