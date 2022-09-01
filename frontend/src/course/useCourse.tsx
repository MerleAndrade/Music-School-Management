import {useEffect, useState} from "react";
import axios from "axios";

export default function useInstrument(){

    const [instruments, setInstruments] = useState<string[]>([]);


    useEffect(() => {getAllInstruments()}, [])

    const getAllInstruments = () => {
        axios.get("/api/teachers/instruments")
            .then((response) => response.data)
            .then((data) => setInstruments(data))
    }

    return{instruments}
}