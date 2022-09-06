import useTeacher from "../teacher/useTeacher";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import StudentGallery from "../student/StudentGallery";
import useStudent from "../student/useStudent";
import useCourse from "../course/useCourse";
import CourseGallery from "../course/CourseGallery";
import TeacherDetails from "../teacher/TeacherDetails";

export default function AllRoutes () {

    const teacherHook = useTeacher();
    const {students, addStudent, deleteStudent} = useStudent();
    const {instruments} = useCourse();

    return(
        <>
            <Routes>
                <Route path ={"/"}
                       element={<Home addTeacher={teacherHook.addTeacher} addStudent={addStudent} instruments={instruments}
                       getAllTeachers={teacherHook.getAllTeachers}/>}/>
                <Route path = {"/students"}
                       element = {<StudentGallery students={students}
                                                    deleteStudent = {deleteStudent}/>}/>
                <Route path = {"/instrument"}
                       element = {<CourseGallery instruments={instruments}/>}/>
                <Route path={"/teachers"}
                       element={<TeacherDetails teachers={teacherHook.teachers} editTeacher={teacherHook.editTeacher} deleteTeacher={teacherHook.deleteTeacher} getAllTeachers={teacherHook.getAllTeachers}/>}/>

            </Routes>
        </>
    )
}