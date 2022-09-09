

type SingleCourseProps = {
    instruments: string[],
    firstNames: string [],
}

export default function SingleCourse(props: SingleCourseProps) {

    return (
        <>
            <td>{props.firstNames}</td>
            <td>{props.instruments}</td>
        </>
    )
}