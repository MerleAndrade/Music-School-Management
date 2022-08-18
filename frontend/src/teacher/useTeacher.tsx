import axios from "axios";
import {useEffect, useState} from "react";
import {Teacher} from "./Teacher";

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

    return{teachers}
}