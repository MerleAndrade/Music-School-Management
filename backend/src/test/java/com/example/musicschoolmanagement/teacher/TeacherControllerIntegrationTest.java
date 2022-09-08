package com.example.musicschoolmanagement.teacher;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@SpringBootTest
@AutoConfigureMockMvc
class TeacherControllerIntegrationTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    @DisplayName("getAllTeachers")
    void getAllTeachers() throws Exception {
        mockMvc.perform(get("/api/teachers"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    @DirtiesContext
    @DisplayName("AddOneTeacher")
    void addOneTeacher() throws Exception {
        mockMvc.perform(post("/api/teachers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Kontrabass"}
                                """))
                .andExpect(status().isCreated())
                .andExpect(content().json("""
                        {"firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Kontrabass"}
                        """));
    }


    @Test
    @DirtiesContext
    @DisplayName("UpdateTeacher")
    void updateTeacher() throws Exception {
        String saveResult = mockMvc.perform(
                        post("/api/teachers")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {"firstName": "Felipe",
                                        "lastName": "Andrade",
                                        "instrument": "Kontrabass"}
                                        """))
                .andExpect(status().isCreated())
                .andExpect(content().json("""
                        {
                                "firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Kontrabass"
                                }
                        """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Teacher saveResultTeacher = objectMapper.readValue(saveResult, Teacher.class);
        String id = saveResultTeacher.id();

        mockMvc.perform(
                        put("/api/teachers/" + id)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                {
                                "id": "<ID>",
                                "firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Harfe"
                                }
                                 """.replaceFirst("<ID>", id))
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                {
                                "id": "<ID>",
                                "firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Harfe"
                                }
                        """.replaceFirst("<ID>", id)));


    }

    @Test
    @DirtiesContext
    @DisplayName("DeleteTeacher")
    void deleteTeacher() throws Exception {
        String saveResult = mockMvc.perform(post("/api/teachers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Kontrabass"}
                                """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Teacher saveResultTeacher = objectMapper.readValue(saveResult, Teacher.class);
        String teacherId = saveResultTeacher.id();

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/teachers/" + teacherId))
                .andExpect(status().is(204));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/teachers"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));

    }

    @Test
    @DirtiesContext
    @DisplayName("getAllTeachers")
    void getAllInstruments() throws Exception {

        String saveResult = mockMvc.perform(post("/api/teachers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"firstName": "Felipe",
                                "lastName": "Andrade",
                                "instrument": "Kontrabass"}
                                """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Teacher saveResultTeacher = objectMapper.readValue(saveResult, Teacher.class);
        String id = saveResultTeacher.id();

        mockMvc.perform(get("/api/teachers/instruments"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        ["Kontrabass"]
                        """));
    }
}
