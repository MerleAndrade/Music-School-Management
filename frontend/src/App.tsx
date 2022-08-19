import TeacherGallery from "./teacher/TeacherGallery";
import useTeacher from "./teacher/useTeacher";
import {HashRouter, Route, Routes} from "react-router-dom";

export default function App() {

  const {teachers} = useTeacher();

  return (
      <HashRouter>
          <Routes>
              <Route path = {"/"}
              element = {<TeacherGallery teachers={teachers}/>}/>
          </Routes>
      </HashRouter>
                  );}

