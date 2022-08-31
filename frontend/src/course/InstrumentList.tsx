import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";

type InstrumentListProps = {
    addInstrument: (name: string) => Promise<void>,
    instruments: string[]

}


export default function InstrumentList (props: InstrumentListProps) {

    const [instrument, setInstrument] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addInstrument(instrument)
            .then(() => {
                setInstrument("");
            })
            .catch((error) => {
                notify("Hi sorrry!!! " + error.message)
            })
    }
    const notify = (message: string) => {
        toast.error(message, {
            position: toast.POSITION.TOP_LEFT
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInstrument(event.target.value);
    }
    useEffect(() => {
            setInstrument(props.instruments[0]);
        }
    , [props.instruments])

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

