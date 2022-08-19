import {Teacher} from "./Teacher";

type TeacherGalleryProps = {
    teachers : Teacher[]
}

export default function TeacherGallery (props: TeacherGalleryProps){

    return(
        <>
            <ul>
                {props.teachers.map(teacher => (
                    <li key = {teacher.id}>
                        {teacher.firstName} {teacher.lastName} {teacher.instrument}</li>))}
            </ul>
        </>
    )
}