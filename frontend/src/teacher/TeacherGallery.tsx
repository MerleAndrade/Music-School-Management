import {Teacher} from "./Teacher";
import "./teachergallery.css"
import SingleTeacher from "./SingleTeacher";
import React from "react";

type TeacherGalleryProps = {
    teachers: Teacher [],
}

export default function TeacherGallery(props: TeacherGalleryProps) {


    return (
        <span>
            <h2>Aktuelle Lehrerliste</h2>
            <table>
                <tbody>
                <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Instrument</th>
                </tr>
                {props.teachers.map((teacher) =>
                    <tr key={teacher.id}>
                        <SingleTeacher teacher={teacher}/>
                    </tr>
                )}
                </tbody>
            </table>
        </span>
    )
}

