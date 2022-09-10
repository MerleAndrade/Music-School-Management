import React, {useEffect, useState} from "react";
import {Course} from "./Course";
import axios from "axios";

type CourseGalleryProps = {
    deleteCourse : (id: string) => Promise<void>,
}

export default function CourseGallery(props: CourseGalleryProps) {

    const [listOfCourses, setListOfCourses] = useState<Course[]>([]);

    useEffect(() => {
        loadAllCourses()
    }, [])

    const loadAllCourses = () => {
        axios.get("/api/courses")
            .then((response) => response.data)
            .then((data) => setListOfCourses(data))
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
                </tr>
                {listOfCourses.map((course) =>
                    <tr key={course.id}>
                        <td>{course.firstNameTeacher}</td>
                        <td>{course.firstNameStudent}</td>
                        <td>{course.instrument}</td>
                        <button onClick={() => props.deleteCourse(course.id)}>Löschen</button>
                    </tr>)}
                </thead>
            </table>
        </span>
    )
}
