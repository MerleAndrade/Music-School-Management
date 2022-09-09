import {Teacher} from "./Teacher";

type SingleTeacherProps = { teacher: Teacher | undefined }

export default function SingleTeacher(props: SingleTeacherProps) {


    return (
        <>
            <td>{props.teacher?.firstName}</td>
            <td>{props.teacher?.lastName}</td>
            <td>{props.teacher?.instrument}</td>
        </>
    )
}
