import {ChangeEvent, FormEvent, useState} from "react";
import {NewTeacher, Teacher} from "./Teacher";

type AddTeacherFormularProps = {
    addTeacher: (newTeacher: NewTeacher) => Promise <Teacher>;
}

export default function AddTeacherFormular(props: AddTeacherFormularProps) {

    const[firstName, setFirstName] = useState<string> ("");
    const[lastName, setLastName] = useState<string> ("");
    const[instrument, setInstrument] = useState<string> ("");


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!firstName && !lastName && !instrument) {
            console.error("Lehrerdaten fehlen")
            return
        }
        props.addTeacher({firstName, lastName, instrument})
            . then(() => setFirstName(""))
            .catch(console.error)
    }

    return(
        <form onSubmit ={handleSubmit}>
            <label form="firstName">Vorname: </label>
            <input type={"text"} onFocus={(event) => event.target.select()} name={"firstName"} onChange={(event) => setFirstName(event.target.value)}/>
            <button type={"submit"}>Speichern</button>
</form>
    )


}