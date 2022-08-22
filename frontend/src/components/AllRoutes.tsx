import useTeacher from "../teacher/useTeacher";
import {Route, Routes} from "react-router-dom";
import TeacherGallery from "../teacher/TeacherGallery";
import AddTeacherFormular from "../teacher/AddTeacherFormular";
import Home from "./Home";

export default function AllRoutes () {

    const {teachers, addTeacher} = useTeacher();

    return(
        <>
            <Routes>
                <Route path ={"/"}
                       element={<Home/>}/>
                <Route path = {"/teachers"}
                       element = {<TeacherGallery teachers={teachers}/>}/>
                <Route path = {"/teachers"}
                       element = {<AddTeacherFormular addTeacher={addTeacher}/>}/>
            </Routes>

        </>
    )
}