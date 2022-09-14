import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Teacher} from "../teacher/Teacher";
import AddNewTeacher from "../teacher/AddNewTeacher";
import "./home.css"
import {NewStudent, Student} from "../student/Student";
import AddStudentFormular from "../student/AddStudentFormular";
import {NewTeacher} from "../teacher/NewTeacher";
import AddCourse from "../course/AddCourse";
import {Course, NewCourse} from "../course/Course";

type HomeProps = {

    addTeacher: (newTeacher: NewTeacher) => Promise<Teacher>;
    addStudent: (newStudent: NewStudent) => Promise<Student>;
    instruments: string[];
    firstNameTeachers: string[],
    firstNameStudents: string[],
    addInstruments: (newCourse: NewCourse) => Promise<Course>;
    getAllTeachers: (teacher: Teacher) => void,
}
export default function Home(props: HomeProps) {

    const [tab, setTab] = useState("Home");

    useEffect(() => {
        document.title = tab;
    })

    return (
        <nav>
            <div className={"wrapper"}>
                <NavLink onClick={() => setTab("Lehrer")} to={'/teachers'}>
                    <button className="button">Lehrerliste</button>
                </NavLink>
                <NavLink onClick={() => setTab("Student")} to={'/students'}>
                    <button className="button">Schülerliste</button>
                </NavLink>
                <NavLink onClick={() => setTab("Course")} to={'/courses'}>
                    <button className="button">Kursliste</button>
                </NavLink>
            </div>
            <AddNewTeacher addNewTeacher={props.addTeacher}/>
            <AddStudentFormular addStudent={props.addStudent}/>
            <AddCourse instruments={props.instruments} addInstruments={props.addInstruments}
                       firstNameTeachers={props.firstNameTeachers} firstNameStudents={props.firstNameStudents}/>
        </nav>
    )
}
