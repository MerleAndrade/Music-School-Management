import {useEffect, useState} from "react";
import axios from "axios";
import {NewCourse} from "./Course";


export default function useCourse(){

    const [instruments, setInstruments] = useState<string[]>([]);
    const [firstNameTeachers, setFirstNameTeachers] = useState<string[]>([]);
    const [firstNameStudents, setFirstNameStudents] = useState<string[]>([]);

    useEffect(() => {getAllInstruments()}, [])
    useEffect(() => {getAllFirstNameTeacher()}, [])
    useEffect(() => {getAllFirstNameStudent()}, [])

    const getAllInstruments = () => {
        axios.get("/api/teachers/instruments")
            .then((response) => response.data)
            .then((data) => setInstruments(data))
    }

    const getAllFirstNameTeacher = () => {
        axios.get("/api/teachers/firstnameteachers")
            .then((response) => response.data)
            .then((data) => setFirstNameTeachers(data))
    }

    const getAllFirstNameStudent = () => {
        axios.get("/api/students/firstnamestudents")
            .then((response) => response.data)
            .then((data) => setFirstNameStudents(data))
    }

    const addInstruments = (newCourse: NewCourse) => {
        return axios.post("/api/courses", newCourse)
            .then((response) => {getAllInstruments()
            return response.data})
            .then((response) => {getAllFirstNameTeacher()
                return response.data})
            .then((response) => {getAllFirstNameStudent()
                return response.data})
    }

    const deleteCourse = (id: string) => {
        return axios.delete(`/api/courses/${id}`)
            .then((response) => response.status)
            .catch(error => console.error(error))
            .then(getAllInstruments);
    }

    return {instruments, addInstruments, firstNameTeachers, firstNameStudents, deleteCourse}
}
