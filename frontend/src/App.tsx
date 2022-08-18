import TeacherGallery from "./teacher/TeacherGallery";
import {useEffect} from "react";
import useTeacher from "./teacher/useTeacher";

export default function App() {

  const {teachers} = useTeacher();

  return (
      <>
      <h1>Music-School-Management</h1>
    <TeacherGallery teachers={teachers}/>
        </>
  )
}
