import useTeacher from "../teacher/useTeacher";
import {Route, Routes} from "react-router-dom";
import TeacherGallery from "../teacher/TeacherGallery";
import Home from "./Home";
import StudentGallery from "../student/StudentGallery";
import useStudent from "../student/useStudent";
import useCourse from "../course/useCourse";
import CourseGallery from "../course/CourseGallery";

export default function AllRoutes () {

    const {teachers, addTeacher, deleteTeacher} = useTeacher();
    const {students, addStudent, deleteStudent} = useStudent();
    const {instruments} = useCourse();

    return(
        <>
            <Routes>
                <Route path ={"/"}
                       element={<Home addTeacher={addTeacher} addStudent={addStudent} instruments={instruments}/>}/>
                <Route path = {"/teachers"}
                       element = {<TeacherGallery teachers={teachers}
                                                  deleteTeacher={deleteTeacher}/>}/>
                <Route path = {"/students"}
                       element = {<StudentGallery students={students}
                                                    deleteStudent = {deleteStudent}/>}/>
                <Route path = {"/instrument"}
                       element = {<CourseGallery instruments={instruments}/>}/>
            </Routes>
        </>
    )
}