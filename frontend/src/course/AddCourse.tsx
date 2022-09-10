import {ChangeEvent, FormEvent, useState} from "react";
import * as React from "react";
import "./addcourse.css"
import {Course, NewCourse} from "./Course";

type AddCourseProps = {
    addInstruments: (newCourse: NewCourse) => Promise<Course>;
    instruments: string[],
    firstNameTeachers: string[],
    firstNameStudents: string[],
}


export default function AddCourse (props: AddCourseProps) {

    const [instrumentName, setInstrumentName] = useState<string>(props.instruments[0]);
    const [teacherFirstName, setTeacherFirstName] = useState<string>(props.firstNameTeachers[0]);
    const [studentFirstName, setStudentFirstName] = useState<string>(props.firstNameStudents[0]);

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

        const course: NewCourse = {
            instrument: instrumentName,
            firstNameTeacher: teacherFirstName,
            firstNameStudent: studentFirstName
        }
        props.addInstruments(course)
            .then(() => {
                setInstrumentName("");
                setTeacherFirstName("");
                setStudentFirstName("");
                })
    }

    return (
        <div>
            <h1>Neuen Kurs erstellen</h1>
            <ul className="form-style-4">
            <form onSubmit={handleSubmit}>
                <li><label>Wähle einen Lehrer aus:<span className="required">*</span></label>
                <select className="field-long"
                    onChange={handleTeacherFirstName} value={teacherFirstName}>
                    {props.firstNameTeachers.map(firstNameTeacher => (<option value={firstNameTeacher}>{firstNameTeacher}</option>))}
                </select>
                </li>
                <li><label>Wähle einen Schüler aus:<span className="required">*</span></label>
                    <select className="field-long"
                            onChange={handleStudentFirstName} value={studentFirstName}>
                        {props.firstNameStudents.map(firstNameStudent => (<option value={firstNameStudent}>{firstNameStudent}</option>))}
                    </select>
                </li>
                <li><label>Wähle ein Instrument aus:<span className="required">*</span></label>
                <select className="field-long"
                    onChange={handleInstrument} value={instrumentName}>
                    {props.instruments.map(instrument => (<option value={instrument}>{instrument}</option>))}
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
