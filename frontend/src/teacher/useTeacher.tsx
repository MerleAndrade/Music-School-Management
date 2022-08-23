import axios from "axios";
import {useEffect, useState} from "react";
import {NewTeacher, Teacher} from "./Teacher";

export default function useTeacher(){

    const[teachers, setTeachers]= useState<Teacher[]> ([]);

    useEffect(() => {
        getAllTeachers()},
            []
    )

    const getAllTeachers = () => {
        axios.get("/api/teachers")
            .then((response) => response.data)
            .then((data) => setTeachers(data))
    }

    const addTeacher = (newTeacher: NewTeacher) => {

        return axios.post("/api/teachers", newTeacher)
            .then((response) => {getAllTeachers()
            return response.data})
    }
    return{teachers, addTeacher}
}
