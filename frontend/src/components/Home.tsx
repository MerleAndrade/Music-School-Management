import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Teacher} from "../teacher/Teacher";
import AddNewTeacher from "../teacher/AddNewTeacher";
import "./home.css"
import {NewStudent, Student} from "../student/Student";
import AddStudentFormular from "../student/AddStudentFormular";
import {NewTeacher} from "../teacher/NewTeacher";


import AddCourse from "../course/AddCourse";
type HomeProps ={

    addTeacher: (newTeacher: NewTeacher) => Promise <Teacher>;
    addStudent: (newStudent: NewStudent) => Promise <Student>;
    instruments: string[];
    getAllTeachers: (teacher: Teacher) =>void,
    addCourse: (name: string) => Promise<void>

}
export default function Home (props: HomeProps) {

    const [tab, setTab] = useState("Home");

    useEffect(() => {
        document.title = tab;
    })

    return (
        <nav className= "menu">
            <NavLink className={"nav"} onClick={() => setTab("Lehrer")} to={'/teachers'}>
                <button className="button">Lehrerliste</button>
            </NavLink>
            <NavLink className={"nav"} onClick={() => setTab("Student")} to={'/students'}>
                <button className="button">Schülerliste</button>
            </NavLink>
            <NavLink className={"nav"} onClick={() => setTab("Course")} to={'/courses'}>
                <button className="button">Kursliste</button>
            </NavLink>

            <AddNewTeacher addNewTeacher={props.addTeacher}/>
            <AddStudentFormular addStudent={props.addStudent}/>
            <AddCourse instruments={props.instruments} addCourse={props.addCourse}/>

        </nav>

    )
}
