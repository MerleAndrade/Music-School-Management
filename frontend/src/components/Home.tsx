import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {NewTeacher, Teacher} from "../teacher/Teacher";
import AddTeacherFormular from "../teacher/AddTeacherFormular";
import "./home.css"
import {NewStudent, Student} from "../student/Student";
import AddStudentFormular from "../student/AddStudentFormular";
import InstrumentList from "../course/InstrumentList";

type HomeProps ={

    addTeacher: (newTeacher: NewTeacher) => Promise <Teacher>;
    addStudent: (newStudent: NewStudent) => Promise <Student>;
    instruments: string[];
    addInstrument: (name: string) => Promise<void>,
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

            <AddTeacherFormular addTeacher={props.addTeacher}/>
            <AddStudentFormular addStudent={props.addStudent}/>
            <InstrumentList instruments={props.instruments} addInstrument={props.addInstrument}/>
        </nav>
    )
}
