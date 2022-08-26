import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {NewStudent, Student} from "./Student";
import 'react-toastify/dist/ReactToastify.css';
import "./addstudentformular.css"

type AddStudentFormularProps = {
    addStudent: (newStudent: NewStudent) => Promise <Student>; }

export default function AddStudentFormular(props: AddStudentFormularProps) {

    const[firstName, setFirstName] = useState<string> ("");
    const[lastName, setLastName] = useState<string> ("");
    const[instrument, setInstrument] = useState<string> ("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!firstName || !lastName || !instrument) {
            toast.error("Alle Felder müssen bitte ausgefüllt werden!")
        } else {
            props.addStudent({firstName, lastName, instrument})
                .then(() => {
                    setFirstName("");
                    setLastName("");
                    setInstrument("");
                    setErrorMessage("");
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message)
                });
        }
    }
    return(
        <form onSubmit ={handleSubmit}>
            <h1>Neuen Schüler hinzufügen</h1>
            <ul className="form-style-2">
                <li> <label htmlFor="firstName"> Vorname: <span className="required">*</span>
                    <input className="field-long" type={"text"}  name={"firstName"} onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)} value={firstName}/>
                </label>
                </li>
                <li> <label htmlFor="lastName"> Nachname: <span className="required">*</span>
                    <input className="field-long" type={"text"}  name={"lastName"} onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)} value={lastName}/>
                </label>
                </li>
                <li> <label htmlFor="instrument"> Instrument: <span className="required">*</span>
                    <input className="field-long" type={"text"}  name={"instrument"} onChange={(event: ChangeEvent<HTMLInputElement>) => setInstrument(event.target.value)} value={instrument}/>
                </label>
                </li>
                <li>
                    <input type="submit" value="Submit" />
                </li>
            </ul>
        </form>
    )
}