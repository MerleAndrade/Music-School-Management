import {useEffect, useState} from "react";
import axios from "axios";
import {NewCourse} from "./Course";


export default function useCourse(){

    const [instruments, setInstruments] = useState<string[]>([]);
    const [firstNames, setFirstNames] = useState<string[]>([]);

    useEffect(() => {getAllInstruments()}, [])
    useEffect(() => {getAllFirstNameTeacher()}, [])

    const getAllInstruments = () => {
        axios.get("/api/teachers/instruments")
            .then((response) => response.data)
            .then((data) => setInstruments(data))
    }

    const getAllFirstNameTeacher = () => {
        axios.get("/api/teachers/firstnameteachers")
            .then((response) => response.data)
            .then((data) => setFirstNames(data))
    }

    const addInstruments = (newCourse: NewCourse) => {
        return axios.post("/api/courses", newCourse)
            .then((response) => {getAllInstruments()
            return response.data})
            .then((response) => {getAllFirstNameTeacher()
                return response.data})
    }

    return {instruments, addInstruments, firstNames}
}
