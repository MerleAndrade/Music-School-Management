package com.example.musicschoolmanagement.course;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import java.util.List;


@Service
@AllArgsConstructor
public class CourseService {


    public List<Course> addInstrument(String instrument) {
         WebClient webClient = WebClient.create("https://api/teachers");

        List<Course> course = (List<Course>) webClient
                .post()
                .uri("/instrument")
                .body(Mono.just(instrument), Course.class)
                .retrieve()
                .bodyToMono(Course.class);

        return course;
    }
}
