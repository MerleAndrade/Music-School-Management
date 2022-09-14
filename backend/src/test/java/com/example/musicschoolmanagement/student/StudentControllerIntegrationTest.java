package com.example.musicschoolmanagement.student;
import com.example.musicschoolmanagement.teacher.Teacher;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class StudentControllerIntegrationTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    @DisplayName("getAllStudents")
    void getAllStudents() throws Exception {
        mockMvc.perform(get("/api/students"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                []
                """));
    }
    @Test
    @DirtiesContext
    @DisplayName("AddOneStudent")
    void addOneStudent() throws Exception {
        mockMvc.perform(post("/api/students")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                        {"firstNameStudent": "Felipe",
                        "lastNameStudent": "Andrade",
                        "instrumentStudent": "Kontrabass"}
                        """))
                .andExpect(status().isCreated())
                .andExpect(content().json("""
                {"firstNameStudent": "Felipe",
                        "lastNameStudent": "Andrade",
                        "instrumentStudent": "Kontrabass"}
                """));
    }

    @Test
    @DirtiesContext
    @DisplayName("DeleteStudentByExistingId")
    void deleteStudent() throws Exception {
        String saveResult =  mockMvc.perform(post("/api/students")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                        {"firstNameStudent": "Felipe",
                        "lastNameStudent": "Andrade",
                        "instrumentStudent": "Kontrabass"}
                        """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Student saveResultStudents = objectMapper.readValue(saveResult, Student.class);
        String id = saveResultStudents.id();

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/students/" + id))
                        .andExpect(status().is(204));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/students"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    @DirtiesContext
    @DisplayName("DeleteStudentByNotExistingID")
    void deleteStudentNoId() throws Exception {
        String id = "111";
        mockMvc.perform(MockMvcRequestBuilders.delete("http://localhost:8080/api/students/" + id))
                .andExpect(status().is(404));
    }
    @Test
    @DirtiesContext
    @DisplayName("getAllStudentsFirstName")
    void getAllFirstNamesStudent() throws Exception {

       mockMvc.perform(post("/api/students")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"firstNameStudent": "Felipe",
                                "lastNameStudent": "Andrade",
                                "instrumentStudent": "Kontrabass"}
                                """));

        mockMvc.perform(get("/api/students/firstnamestudents"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        ["Felipe"]
                        """));
    }
}
