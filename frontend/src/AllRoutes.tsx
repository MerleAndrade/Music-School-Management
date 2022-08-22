import useTeacher from "./teacher/useTeacher";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import TeacherGallery from "./teacher/TeacherGallery";
import AddTeacherFormular from "./teacher/AddTeacherFormular";

export default function AllRoutes () {

    const {teachers, addTeacher} = useTeacher();

    return(
        <>
            <Routes>
                <Route path ={"/"}
                       element={<Home/>}/>
                <Route path = {"/"}
                       element = {<TeacherGallery teachers={teachers}/>}/>
                <Route path = {"/teachers"}
                       element = {<AddTeacherFormular addTeacher={addTeacher}/>}/>
            </Routes>

        </>
    )
}