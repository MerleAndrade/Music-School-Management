import {FormEvent, useState} from "react";
import {Teacher} from "./Teacher";
import {toast} from "react-toastify";
import {NewTeacher} from "./NewTeacher";
import "./addnewteacher.css"
import 'react-toastify/dist/ReactToastify.css';

type AddNewTeacherProps = {
    addNewTeacher: (teacher: NewTeacher) => Promise<Teacher>;
}

export default function AddNewTeacher(props: AddNewTeacherProps) {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [instrument, setInstrument] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState("");

    const AddTeacherSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!firstName || !lastName || !instrument) {
            toast.error("Alle Felder müssen bitte ausgefüllt werden!")
        } else {

            const teacher: NewTeacher = {
                firstName: firstName,
                lastName: lastName,
                instrument: instrument,
            }
            props.addNewTeacher(teacher)
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

    return (
        <form onSubmit={AddTeacherSubmit}>
            <h1>Neuen Lehrer hinzufügen</h1>
            <ul className="form-style-1">
                <li><label htmlFor="firstName"> Vorname: <span className="required">*</span>
                    <input className="field-long" type={"text"} name={"firstName"} value={firstName}
                           onChange={event => setFirstName(event.target.value)}/>
                    <div> {errorMessage}</div>
                </label>
                </li>
                <li><label htmlFor="lastName"> Nachname: <span className="required">*</span>
                    <input className="field-long" type={"text"} name={"lastName"} value={lastName}
                           onChange={event => setLastName(event.target.value)}/>
                </label>
                </li>
                <li><label htmlFor="instrument"> Instrument: <span className="required">*</span>
                    <input className="field-long" type={"text"} name={"instrument"} value={instrument}
                           onChange={event => setInstrument(event.target.value)}/>
                </label>
                </li>
                <li>
                    <input type="submit" value="Submit Teacher"/>
                </li>
            </ul>
        </form>
    )
}

