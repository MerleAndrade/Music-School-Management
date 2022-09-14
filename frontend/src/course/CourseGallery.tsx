import React, {useEffect, useState} from "react";
import {Course} from "./Course";
import axios from "axios";


export default function CourseGallery(){

    const [listOfCourses, setListOfCourses] = useState<Course[]>([]);

    useEffect(() => {
        loadAllCourses()
    }, [])

    const loadAllCourses = () => {
        axios.get("/api/courses")
            .then((response) => response.data)
            .then((data) => setListOfCourses(data))
    }
    const deleteCourse = (id: string) => {
        return axios.delete(`/api/courses/${id}`)
            .then((response) => response.status)
            .catch(error => console.error(error))
            .then(loadAllCourses);
    }


    return (
        <span>
            <h2 id={"container"}>Kursliste</h2>
            <table>
                <thead>
                <tr>
                    <th scope="col">Lehrername</th>
                    <th scope="col">Schülername</th>
                    <th scope="col">Instrument</th>
                    <th scope="col">Button</th>
                </tr>
                {listOfCourses.map((course) =>
                    <tr key={course.id}>
                        <td>{course.firstNameTeacher}</td>
                        <td>{course.firstNameStudent}</td>
                        <td>{course.instrument}</td>
                        <td>
                            <button onClick={() => deleteCourse(course.id)}>Löschen</button>
                        </td>
                    </tr>)}
                </thead>
            </table>
        </span>
    )
}
