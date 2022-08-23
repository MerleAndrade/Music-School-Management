import {Teacher} from "./Teacher";
import "./teachergallery.css"

type TeacherGalleryProps = {
    teachers : Teacher[]
}

export default function TeacherGallery (props: TeacherGalleryProps){


    return(
       <div className="allTeacher">

           <table>
               <caption>aktuelle Lehrerliste</caption>
               <thead>
               <tr>
                   <th scope="col">Vorname</th>
                   <th scope="col">Nachname</th>
                   <th scope="col">Instrument</th>
               </tr>
               </thead>
               {props.teachers.map(teacher =>
                   <tr key={teacher.id}>
                   <td>{teacher.firstName}</td>
                   <td>{teacher.lastName}</td>
                   <td>{teacher.instrument}</td>
                   </tr>
                   )}
           </table>
       </div>
    )
}
