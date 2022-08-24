import {useEffect, useState} from "react";
import axios from "axios";
import {NewStudent, Student} from "./Student";

export default function useStudent(){

    const[students, setStudents]= useState<Student[]> ([]);

    useEffect(() => {
            getAllStudents()},
        []
    )

    const getAllStudents = () => {
        axios.get("/api/students")
            .then((response) => response.data)
            .then((data) => setStudents(data))
    }

    const addStudent = (newStudent: NewStudent) => {

        return axios.post("/api/students", newStudent)
            .then((response) => {getAllStudents()
                return response.data})
    }
    return{students, addStudent}
}