import {NewTeacher, Teacher} from "./Teacher";
import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type AddTeacherFormularProps = {
    addTeacher: (newTeacher: NewTeacher) => Promise <Teacher>; }

export default function AddTeacherFormular(props: AddTeacherFormularProps) {

    const[firstName, setFirstName] = useState<string> ("");
    const[lastName, setLastName] = useState<string> ("");
    const[instrument, setInstrument] = useState<string> ("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!firstName || !lastName || !instrument) {
            toast.error("Alle Felder müssen bitte ausgefüllt werden!")
        } else {
            props.addTeacher({firstName, lastName, instrument})
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
            <h1>Neuen Lehrer hinzufügen</h1>
            <label htmlFor="firstName">Vorname:
            <input id="firstName" type={"text"}  name={"firstName"} onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)} value={firstName}/>
            </label>
            <label htmlFor="lastName">Nachname:
                <input id="lastName" type={"text"}  name={"lastName"} onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)} value={lastName}/>
            </label>
            <label htmlFor="instrument">Instrument:
                <input id="instrument" type={"text"}  name={"instrument"} onChange={(event: ChangeEvent<HTMLInputElement>) => setInstrument(event.target.value)} value={instrument}/>
            </label>

            <button type={"submit"}>Speichern</button>
</form>
    )
}
