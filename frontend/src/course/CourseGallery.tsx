
import React, {useEffect, useState} from "react";
import {Course} from "./Course";
import axios from "axios";

export default function CourseGallery() {

const [listOfCourses, setListOfCourses] = useState<Course[]>([]);

    useEffect(() => {loadAllCourses()}, [])


    const loadAllCourses = () => {
        axios.get("/api/courses")
            .then((response) => response.data)
            .then((data) => setListOfCourses(data))
    }



    return (
        <span>
            <h2>Aktuelle Kursliste</h2>
            <table>
                <tbody>

                {listOfCourses.map((course) => course.instrument)}

                </tbody>
                </table>
        </span>
    )
}


