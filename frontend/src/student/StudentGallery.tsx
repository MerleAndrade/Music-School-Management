import {Student} from "./Student";
import "./studentgallery.css"

type StudentGalleryProps = {
    students : Student[]
    deleteStudent : (id: string) => Promise<void>
}

export default function StudentGallery (props: StudentGalleryProps){


    return(
        <div className="allStudent">

            <table>
                <caption>aktuelle Schülerliste</caption>
                <thead>
                <tr>
                    <th scope="col">Vorname</th>
                    <th scope="col">Nachname</th>
                    <th scope="col">Instrument</th>
                </tr>
                </thead>
                {props.students.map(student =>
                    <tr key={student.id}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.instrument}</td>
                        <button onClick={() => props.deleteStudent(student.id)}>Löschen</button>
                    </tr>
                )}
            </table>
        </div>
    )
}