

type SingleCourseProps = {
    instruments: string[]
}

export default function SingleCourse(props: SingleCourseProps) {

    return (
        <>
            <td>{props.instruments}</td>
        </>
    )
}