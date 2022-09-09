import React, {useEffect, useState} from "react";
import {Course} from "./Course";
import axios from "axios";

export default function CourseGallery() {

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
            <h2>Aktuelle Kursliste</h2>
            <table>
                <thead>
                <tr>
                <th>Instrument</th>
                </tr>
                </thead>
                {listOfCourses.map((course) =>
                    <tr key={course.id}>
                <td>{course.instrument}</td>
                </tr>
                    )}
                </table>
        </span>
    )
}


