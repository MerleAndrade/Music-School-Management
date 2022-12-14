import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {NewStudent, Student} from "./Student";
import 'react-toastify/dist/ReactToastify.css';
import "./addnewstudent.css"

type AddStudentFormularProps = {
    addStudent: (newStudent: NewStudent) => Promise<Student>;
}

export default function AddNewStudent(props: AddStudentFormularProps) {

    const [firstNameStudent, setFirstNameStudent] = useState<string>("");
    const [lastNameStudent, setLastNameStudent] = useState<string>("");
    const [instrumentStudent, setInstrumentStudent] = useState<string>("");
    const [errorMessageStudent, setErrorMessageStudent] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!firstNameStudent || !lastNameStudent || !instrumentStudent) {
            toast.error("Alle Felder müssen bitte ausgefüllt werden!")
        } else {
            props.addStudent({firstNameStudent, lastNameStudent, instrumentStudent})
                .then(() => {
                    setFirstNameStudent("");
                    setLastNameStudent("");
                    setInstrumentStudent("");
                    setErrorMessageStudent("");
                })
                .catch((error) => {
                    setErrorMessageStudent(error.response.data.message)
                });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Neuen Schüler hinzufügen</h1>
            <ul className="form-style-2">
                <li><label htmlFor="firstNameStudent"> Vorname: <span className="required">*</span>
                    <input className="field-long" type={"text"} name={"firstNameStudent"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstNameStudent(event.target.value)}
                           value={firstNameStudent}/>
                    <div> {errorMessageStudent}</div>
                </label>
                </li>
                <li><label htmlFor="lastNameStudent"> Nachname: <span className="required">*</span>
                    <input className="field-long" type={"text"} name={"lastNameStudent"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => setLastNameStudent(event.target.value)}
                           value={lastNameStudent}/>
                    <div> {errorMessageStudent}</div>
                </label>
                </li>
                <li><label htmlFor="instrumentStudent"> Instrument: <span className="required">*</span>
                    <input className="field-long" type={"text"} name={"instrumentStudent"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => setInstrumentStudent(event.target.value)}
                           value={instrumentStudent}/>
                    <div> {errorMessageStudent}</div>
                </label>
                </li>
                <li>
                    <input type="submit" value="Submit Student"/>
                </li>
            </ul>
        </form>
    )
}
