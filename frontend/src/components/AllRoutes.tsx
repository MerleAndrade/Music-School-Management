import useTeacher from "../teacher/useTeacher";
import {Route, Routes} from "react-router-dom";
import TeacherGallery from "../teacher/TeacherGallery";
import Home from "./Home";

export default function AllRoutes () {

    const {teachers, addTeacher} = useTeacher();

    return(
        <>
            <Routes>
                <Route path ={"/"}
                       element={<Home addTeacher={addTeacher}/>}/>
                <Route path = {"/teachers"}
                       element = {<TeacherGallery teachers={teachers}/>}/>
            </Routes>

        </>
    )
}