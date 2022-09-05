import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import * as React from "react";
import "./CourseGallery.css"
import {toast} from "react-toastify";

type AddCourseProps = {
    addCourse: (name: string) => Promise<void>;
    instruments: string[],
}

export default function AddCourse (props: AddCourseProps) {

    const [instrumentName, setInstrumentName] = useState<string>("");


    const onInstrumentSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCourse(instrumentName)
                .then(() => setInstrumentName(""))
                .catch((error) => {
                    notify("Hi sorry!!! " + error.message)
                });
    };
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInstrumentName(event.target.value);
    };

    useEffect(() => {
        if (props.instruments && props.instruments.length > 0) {
            setInstrumentName(props.instruments[0])
        }
    }, [props.addCourse, props.instruments])

    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

        return (
            <form onSubmit={onInstrumentSubmit}>
                <h1>Neuen Kurs erstellen</h1>
                <ul className={"form-style-3"}>
                    <li>
                    <label id={"instrument"} >Instrumente: <span className="required">*</span>
                    <select
                        value={instrumentName}
                        onChange={()=>
                            handleChange}>
                        {props.instruments.map(instrument =>(
                            <option value={instrument}>{instrument}</option>))}
                    </select>
                    </label>
                    </li>
                    <li>
                    <button type={"submit"}>Submit</button>
                    </li>
                </ul>
            </form>
        );
}
