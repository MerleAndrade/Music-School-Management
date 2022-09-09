import {useEffect, useState} from "react";
import axios from "axios";
import {NewCourse} from "./Course";
import {NewFirstName} from "./FirstName";

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
        axios.get("/api/teachers/firstNameTeachers")
            .then((response) => response.data)
            .then((data) => setFirstNames(data))
    }

    const addInstruments = (instrumentName: string) => {
        const newCourse: NewCourse = {instrument: instrumentName};
        return axios.post("/api/courses", newCourse)
            .then(getAllInstruments)
    }

    const addTeacherFirstName = (teacherFirstName: string) => {
        const newFirstName: NewFirstName = {firstNameTeacher: teacherFirstName};
        return axios.post("/api/courses", newFirstName)
            .then(getAllFirstNameTeacher)
    }



    return {instruments, addInstruments, firstNames, addTeacherFirstName}
}