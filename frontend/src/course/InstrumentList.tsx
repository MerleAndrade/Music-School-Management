import {FormEvent, useState} from "react";
import * as React from "react";
import {Course, NewCourse} from "./Course";
import "./instrumentList.css"
import {FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import {toast} from "react-toastify";

type InstrumentListProps = {
    instruments: string[]
    addCourse: (newCourse: NewCourse) => Promise<Course>;
}

export default function InstrumentList (props: InstrumentListProps) {

    const [finalInstruments, setFinalInstruments] = useState<string>("")



    const onInstrumentSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newCourse: NewCourse = {
            instrument: finalInstruments,
        };
        props.addCourse(newCourse)
            .then(() => setFinalInstruments(""))
            .catch(() => {
                    toast.error("Ihre Eingabe konnte nicht gespeichert werden! Bitte füllen Sie alle Felder korrekt aus!")
                }
            )

    }


    const handleSelectInstrumentChange = (event: SelectChangeEvent) => {
        setFinalInstruments(event.target.value)

        return (
            <form onSubmit={onInstrumentSubmit}>
                <h1>Neuen Kurs erstellen</h1>
                <FormControl className="form-style-3">
                    <InputLabel>Instrumente</InputLabel>
                    <Select
                        value={finalInstruments}
                        onChange={handleSelectInstrumentChange}>
                        {props.instruments.map(instruments =>
                            <option className="option" value={instruments}>{instruments}</option>)}
                    </Select>
                    <button type={"submit"}>Submit</button>
                </FormControl>
            </form>
        )
    }
}
