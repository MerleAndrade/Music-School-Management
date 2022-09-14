package com.example.musicschoolmanagement.course;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CourseControllerIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    @DisplayName("getAllCourses")
    void getAllCourses() throws Exception {
        mockMvc.perform(get("/api/courses"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    @DirtiesContext
    @DisplayName("AddOneCourse")
    void addOneCourse() throws Exception {
        mockMvc.perform(post("/api/courses")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"instrument": "Kontrabass"}
                                """))
                .andExpect(status().isCreated())
                .andExpect(content().json("""
                        {"instrument": "Kontrabass"}
                        """));
    }

    @Test
    @DirtiesContext
    @DisplayName("DeleteCourseByExistingID")
    void deleteCourse() throws Exception {
        String saveResult =  mockMvc.perform(post("/api/courses")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                        {"firstNameStudent": "Felipe",
                        "lastNameStudent": "Andrade",
                        "instrumentStudent": "Kontrabass"}
                        """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Course saveResultCourses = objectMapper.readValue(saveResult, Course.class);
        String id = saveResultCourses.id();

        mockMvc.perform(delete("/api/courses/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/courses"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    @DirtiesContext
    @DisplayName("DeleteCourseByNotExistingID")
    void deleteCourseNoId() throws Exception {
        String id = "111";
        mockMvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/api/courses/" + id))
            .andExpect(status().is(404));
}

}
