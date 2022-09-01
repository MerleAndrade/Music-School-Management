import {ChangeEvent, FormEvent, useEffect, useState} from "react";

type InstrumentListProps = {
    instruments: string[]

}

export default function InstrumentList (props: InstrumentListProps) {

    const [instrument, setInstrument] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

            <select value={instrument} onChange={() => handleChange}>
                {props.instruments.map(instruments => (
                    <option className="option" value={instruments}>{instruments}</option>))}
            </select>

            <button type={"submit"}>Submit</button>
        </form>
    )
    }
