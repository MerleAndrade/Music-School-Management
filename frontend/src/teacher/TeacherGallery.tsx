import {Teacher} from "./Teacher";

type TeacherGalleryProps = {
    teachers : Teacher[]
}

export default function TeacherGallery (props: TeacherGalleryProps){


    return(
       <div>
           <h2>aktuelle Lehrerliste</h2>
           <table>
               <tr>
                   <th>Vorname</th>
                   <th>Nachname</th>
                   <th>Instrument</th>
               </tr>

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
