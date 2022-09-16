import {ChangeEvent, FormEvent, useState} from "react";
import * as React from "react";
import "./addcourse.css"
import {Course, NewCourse} from "./Course";
import {toast} from "react-toastify";


type AddCourseProps = {
    addInstruments: (newCourse: NewCourse) => Promise<Course>;
    instruments: string[],
    firstNameTeachers: string[],
    firstNameStudents: string[],
}

export default function AddCourse(props: AddCourseProps) {

    const [instrumentName, setInstrumentName] = useState<string>("DEFAULT");
    const [teacherFirstName, setTeacherFirstName] = useState<string>("DEFAULT");
    const [studentFirstName, setStudentFirstName] = useState<string>("DEFAULT");

    const handleInstrument = (event: ChangeEvent<HTMLSelectElement>) => {
        setInstrumentName(event.target.value)
    }

    const handleTeacherFirstName = (event: ChangeEvent<HTMLSelectElement>) => {
        setTeacherFirstName(event.target.value)
    }

    const handleStudentFirstName = (event: ChangeEvent<HTMLSelectElement>) => {
        setStudentFirstName(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!instrumentName || !teacherFirstName || !studentFirstName) {
            toast.error("Alle Felder müssen bitte ausgefüllt werden!")
        } else {

            const course: NewCourse = {
                instrument: instrumentName,
                firstNameTeacher: teacherFirstName,
                firstNameStudent: studentFirstName
            }
            props.addInstruments(course).then(() => {
                setInstrumentName("DEFAULT");
                setTeacherFirstName("DEFAULT");
                setStudentFirstName("DEFAULT");
            })

            toast.success("Hinzufügen geklappt");
        }
    }

    return (
        <div>
            <h1>Neuen Kurs erstellen</h1>
            <ul className="form-style-4">
                <form onSubmit={handleSubmit}>
                    <li><label>Wähle einen Lehrer aus:<span className="required">*</span></label>
                        <select className="field-long"
                                onChange={handleTeacherFirstName} value={teacherFirstName}>
                            <option value={"DEFAULT"} disabled>Choose a teacher...</option>
                            {props.firstNameTeachers.map(firstNameTeacher => (
                                <option key={firstNameTeacher}>{firstNameTeacher}</option>))}
                        </select>
                    </li>
                    <li><label>Wähle einen Schüler aus:<span className="required">*</span></label>
                        <select className="field-long"
                                onChange={handleStudentFirstName} value={studentFirstName}>
                            <option value={"DEFAULT"} disabled>Choose a student...</option>
                            {props.firstNameStudents.map(firstNameStudent => (
                                <option key={firstNameStudent}>{firstNameStudent}</option>))}
                        </select>
                    </li>
                    <li><label>Wähle ein Instrument aus:<span className="required">*</span></label>
                        <select className="field-long"
                                onChange={handleInstrument} value={instrumentName}>
                            <option value={"DEFAULT"} disabled>Choose a instrument...</option>
                            {props.instruments.map(instrument => (
                                <option key={instrument}>{instrument}</option>))}
                        </select>
                    </li>
                    <li>
                        <input type="submit" value="Submit Course"/>
                    </li>
                </form>
            </ul>
        </div>
    )
}
