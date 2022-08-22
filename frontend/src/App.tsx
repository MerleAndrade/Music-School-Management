import TeacherGallery from "./teacher/TeacherGallery";
import useTeacher from "./teacher/useTeacher";
import {HashRouter, Route, Routes} from "react-router-dom";
import AddTeacherFormular from "./teacher/AddTeacherFormular";
import Home from "./Home";

export default function App() {

  const {teachers, addTeacher} = useTeacher();

  return (
      <HashRouter>
          <Routes>
              <Route path ={"/"}
                     element={<Home/>}/>
              <Route path = {"/"}
                     element = {<TeacherGallery teachers={teachers}/>}/>
              <Route path = {"/teachers"}
                     element = {<AddTeacherFormular addTeacher={addTeacher}/>}/>
          </Routes>
      </HashRouter>
                  );}

