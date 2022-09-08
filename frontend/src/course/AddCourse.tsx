import {ChangeEvent, FormEvent, useState} from "react";
import * as React from "react";
import "./addcourse.css"


type AddCourseProps = {
    addCourse: (name: string) => Promise<void>;
    instruments: string[],
}

export default function AddCourse (props: AddCourseProps) {

    const [instrumentName, setInstrumentName] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
            setInstrumentName(event.target.value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCourse("")
            .then(() => {
                setInstrumentName("");
            })

    }

        return (
            <div className="form-style-4">
            <h1>Neuen Kurs erstellen</h1>
            <form onSubmit={handleSubmit}>
                   <label>Wähle ein Instrument aus:<span className="required">*</span></label>
                       <select
                        onChange={handleChange} value={instrumentName}>
                        {props.instruments.map(instrument => (<option value={instrument}>{instrument}</option>))}
                    </select>
                <button>Submit course</button>

            </form>
            </div>
        )
}
