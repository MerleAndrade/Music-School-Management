type CourseGalleryProps = {
    instruments : string[]
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

                    <tr>
                        <td></td>
                    </tr>
            </table>
        </>
    )
}