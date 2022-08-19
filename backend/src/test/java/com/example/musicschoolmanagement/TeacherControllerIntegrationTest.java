package com.example.musicschoolmanagement;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TeacherControllerIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    @DisplayName("getAllTeachers")
    void getAllTeachers() throws Exception {
        mockMvc.perform(get("/api/teachers"))
                .andExpect(status().isOk())
                .andExpect(content().json( """
                []
                """));
    }

    @Test
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
}
