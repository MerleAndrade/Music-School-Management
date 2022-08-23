import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import {NewTeacher, Teacher} from "../teacher/Teacher";
import AddTeacherFormular from "../teacher/AddTeacherFormular";


type HomeProps ={

    addTeacher: (newTeacher: NewTeacher) => Promise <Teacher>;
}
export default function Home (props: HomeProps) {

    const [tab, setTab] = useState("Home");

    useEffect(() => {
        document.title = tab;
    })

    return (
        <nav className= "menu">
            <NavLink className={"nav"} onClick={() => setTab("Teacher")} to={'/teachers'}>
                <Button variant="outlined" color="success">Lehrerliste</Button>
            </NavLink>
            <AddTeacherFormular addTeacher={props.addTeacher}/>
        </nav>


    )
}
