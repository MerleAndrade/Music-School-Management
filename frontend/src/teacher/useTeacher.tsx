import axios from "axios";
import {useEffect, useState} from "react";
import {Teacher} from "./Teacher";
import {useNavigate} from "react-router-dom";
import {NewTeacher} from "./NewTeacher";

export default function useTeacher(){

    const[teachers, setTeachers]= useState<Teacher[]> ([]);
    const navigate = useNavigate();
    useEffect(() => {getAllTeachers()}, []);

    const addTeacher = (newTeacher: NewTeacher) => {

        return axios.post("/api/teachers", newTeacher)
            .then((response) => {getAllTeachers()
                return response.data})
    }

    const getAllTeachers = () => {
        axios.get("/api/teachers")
            .then((response) => response.data)
            .then((data) => setTeachers(data))
    }

    const editTeacher = (teacher:Teacher)=>{
        axios.put("/api/teachers/" + teacher.id, teacher)
            .then(getAllTeachers)
    }

    const deleteTeacher = (id: string | undefined) => {
        return axios.delete(`/api/teachers/${id}`)
            .then(() => navigate("/teachers"))
            .then(getAllTeachers);
            }

    return{teachers, addTeacher, deleteTeacher, editTeacher, getAllTeachers}
}
