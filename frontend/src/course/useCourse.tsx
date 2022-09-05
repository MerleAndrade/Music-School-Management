import {useEffect, useState} from "react";
import axios from "axios";
import {NewCourse} from "./Course";

export default function useCourse(){

    const [instruments, setInstruments] = useState<string[]>([]);



    useEffect(() => {getAllInstruments()}, [])

    const getAllInstruments = () => {
        axios.get("/api/teachers/instruments")
            .then((response) => response.data)
            .then((data) => setInstruments(data))
    }

    const addCourse = (instrumentName: string) => {
        const newCourse: NewCourse = {name: instrumentName};
        return axios.post("/api/courses", newCourse)
            .then(getAllInstruments)
    }



    return{instruments, addCourse}
}