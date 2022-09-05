import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {NewTeacher, Teacher} from "../teacher/Teacher";
import AddTeacherFormular from "../teacher/AddTeacherFormular";
import "./home.css"
import {NewStudent, Student} from "../student/Student";
import AddStudentFormular from "../student/AddStudentFormular";
import AddCourse from "../course/AddCourse";

type HomeProps ={

    addTeacher: (newTeacher: NewTeacher) => Promise <Teacher>;
    addStudent: (newStudent: NewStudent) => Promise <Student>;
    addCourse: (name: string) => Promise<void>;
    instruments: string[],

}
export default function Home (props: HomeProps) {

    const [tab, setTab] = useState("Home");

    useEffect(() => {
        document.title = tab;
    })

    return (
        <nav className= "menu">
            <NavLink className={"nav"} onClick={() => setTab("Teacher")} to={'/teachers'}>
                <button className="button">Lehrerliste</button>
            </NavLink>
            <NavLink className={"nav"} onClick={() => setTab("Student")} to={'/students'}>
                <button className="button">Schülerliste</button>
            </NavLink>
            <NavLink className={"nav"} onClick={() => setTab("Course")} to={'/courses'}>
                <button className="button">Kursliste</button>
            </NavLink>

            <AddTeacherFormular addTeacher={props.addTeacher}/>
            <AddStudentFormular addStudent={props.addStudent}/>
            <AddCourse instruments={props.instruments} addCourse={props.addCourse}/>

        </nav>

    )
}
