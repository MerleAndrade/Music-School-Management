import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import * as React from "react";
import "./instrumentList.css"
import {toast} from "react-toastify";

type InstrumentListProps = {
    instruments: string[]
    addCourse: (instrument: string) => Promise<void>;
}

export default function InstrumentList (props: InstrumentListProps) {

    const [instrumentNameToAdd, setInstrumentNameToAdd] = useState<string>("");



    const onInstrumentSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCourse(instrumentNameToAdd)
                .then(() => setInstrumentNameToAdd(""))
                .catch((error) => {
                    notify("Hi sorry!!! " + error.message)
                });
    }
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInstrumentNameToAdd(event.target.value);
    }

    useEffect(() => {
        if (props.instruments && props.instruments.length > 0) {
            setInstrumentNameToAdd(props.instruments[0]);
        }
    }, [props.addCourse, props.instruments])

    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

        return (
            <div>
            <form onSubmit={onInstrumentSubmit}>
                <h1>Neuen Kurs erstellen</h1>
                <ul className={"form-style-3"}>
                    <li>
                    <label id={"instrument"} >Instrumente: <span className="required">*</span>
                    <select
                        value={instrumentNameToAdd}
                        onChange={
                            handleChange}>
                        {props.instruments.map(instruments =>(
                            <option className={"option"} value={instruments}>{instruments}</option>))}
                    </select>
                    </label>
                    </li>
                    <li>
                    <button type={"submit"}>Submit</button>
                    </li>
                </ul>
            </form>
            </div>
        )
}
