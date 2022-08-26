import {Teacher} from "./Teacher";
import "./teachergallery.css"

type TeacherGalleryProps = {
    teachers : Teacher[]
    deleteTeacher : (id: string) => Promise<void>
}

export default function TeacherGallery (props: TeacherGalleryProps){


    return(
       <div className="allTeacher">

           <table>
               <caption>Aktuelle Lehrerliste</caption>
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
                       <button onClick={() => props.deleteTeacher(teacher.id)}>Löschen</button>
                   </tr>
                   )}
           </table>
       </div>
    )
}
