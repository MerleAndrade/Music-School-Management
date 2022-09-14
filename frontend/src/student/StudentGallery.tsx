import {Student} from "./Student";
import "./studentgallery.css"
import React from "react";

type StudentGalleryProps = {
    students : Student[],
    deleteStudent : (id: string) => Promise<void>,
}

export default function StudentGallery (props: StudentGalleryProps){


    return(
        <>
            <h2>Schülerliste</h2>
            <table>
                <thead>
                <tr>
                    <th scope="col">Vorname</th>
                    <th scope="col">Nachname</th>
                    <th scope="col">Instrument</th>
                    <th scope="col">Button</th>
                </tr>
                {props.students.map(student =>
                    <tr key={student.id}>
                        <td>{student.firstNameStudent}</td>
                        <td>{student.lastNameStudent}</td>
                        <td>{student.instrumentStudent}</td>
                        <td><button onClick={() => props.deleteStudent(student.id)}>Löschen</button></td>
                    </tr>
                )}
            </thead>
            </table>
        </>
    )
}
