


type CourseGalleryProps = {
    addCourse: (name: string) => Promise<void>;
    instruments: string[]

}

export default function CourseGallery(props: CourseGalleryProps) {


    return (
        <>
            <table>
                <caption>Aktuelle Kursliste</caption>
                <thead>
                <tr>
                    <th scope="col">Instrument</th>
                </tr>
                </thead>
                {props.instruments.map(instrument =>
                <tr>
                    <td>{instrument}</td>
                </tr>)}

            </table>

        </>
    )
}
