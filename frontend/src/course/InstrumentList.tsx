import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import * as React from "react";

type InstrumentListProps = {
    instruments: string[]
}

export default function InstrumentList (props: InstrumentListProps) {

    const [instrument, setInstrument] = useState("");

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInstrument(event.target.value);
    }
    useEffect(() => {
            setInstrument(props.instruments[0]);
        }
    , [props.instruments])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();}

    return (
        <form onSubmit={handleSubmit} >
            <h1>Neuen Kurs erstellen</h1>
            <select value={instrument} onChange={(event) => handleChange(event)}>
                {props.instruments.map(instruments => (
                    <option className="option" value={instruments}>{instruments}</option>))}
            </select>
            <button type={"submit"}>Submit</button>
        </form>
    )
    }
