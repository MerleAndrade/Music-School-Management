import useTeacher from "../teacher/useTeacher";
import {Route, Routes} from "react-router-dom";
import TeacherGallery from "../teacher/TeacherGallery";
import Home from "./Home";
import StudentGallery from "../student/StudentGallery";
import useStudent from "../student/useStudent";

export default function AllRoutes () {

    const {teachers, addTeacher, deleteTeacher} = useTeacher();
    const {students, addStudent} = useStudent();



    return(
        <>
            <Routes>
                <Route path ={"/"}
                       element={<Home addTeacher={addTeacher} addStudent={addStudent}/>}/>
                <Route path = {"/teachers"}
                       element = {<TeacherGallery teachers={teachers}
                                                  deleteTeacher={deleteTeacher}/>}/>
                <Route path = {"/students"}
                       element = {<StudentGallery students={students}/>}/>
            </Routes>

        </>
    )
}