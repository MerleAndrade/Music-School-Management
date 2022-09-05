import {useEffect, useState} from "react";
import axios from "axios";
import {NewCourse} from "./Course";


export default function useInstrument(){

    const [instruments, setInstruments] = useState<string[]>([]);


    useEffect(() => {getAllInstruments()}, [])

    const getAllInstruments = () => {
        axios.get("/api/teachers/instruments")
            .then((response) => response.data)
            .then((data) => setInstruments(data))
    }

    const addCourse = (instrument: string) => {
        const newCourse: NewCourse = {"instrument": instrument};
        return axios.post("/api/courses", newCourse)
            .then(getAllInstruments)
    }



    return{instruments, addCourse}
}