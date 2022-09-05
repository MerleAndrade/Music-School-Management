import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import * as React from "react";
import {Course, NewCourse} from "./Course";
import {toast} from "react-toastify";
import "./instrumentList.css"
import {Select} from "@mui/material";

type InstrumentListProps = {
    instruments: string[]
    addCourse: (newCourse: NewCourse) => Promise<Course>;
}

export default function InstrumentList (props: InstrumentListProps) {

    const [instrument, setInstrument] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInstrument(event.target.value);
    }
    useEffect(() => {
            setInstrument(props.instruments[0]);
        }
    , [props.instruments])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!instrument) {
            toast.error("Alle Felder müssen bitte ausgefüllt werden!")
        } else {
            props.addCourse({instrument})
                .then(() => {
                    setErrorMessage("");
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message)
                });
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <h1>Neuen Kurs erstellen</h1>
            <ul className="form-style-3">
            <li><Select options={props.instruments.map(instruments => (
                <option className="option" value=
                    {instruments}>{instruments} onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event)}
                </option>))} />
                </li>
            </ul>
        </form>
    )
    }
