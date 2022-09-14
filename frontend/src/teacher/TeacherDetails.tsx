import {Teacher} from "./Teacher";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import SingleTeacher from "./SingleTeacher";
import "./teacherdetails.css"

type TeacherDetailsProps = {
    teachers: Teacher [],
    editTeacher: (teacher: Teacher) => void,
    deleteTeacher: (id: string) => void,
    getAllTeachers: (teacher: Teacher) => void,
}

export default function TeacherDetails(props: TeacherDetailsProps) {

    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [teacherFirstName, setTeacherFirstName] = useState('');
    const [teacherLastName, setTeacherLastName] = useState('');
    const [teacherInstrument, setTeacherInstrument] = useState('');
    const [open, setOpen] = React.useState(false);
    const teacher: Teacher | undefined = props.teachers.find(element => element.id === selectedTeacher);

    useEffect(() => {
        if (teacher) {
            setTeacherFirstName(teacher.firstName)
            setTeacherLastName(teacher.lastName)
            setTeacherInstrument(teacher.instrument)
        }
    }, [teacher])

    const handleClickOpen = (teacherToSelect: string) => {
        setOpen(true)
        setSelectedTeacher(teacherToSelect);
    };
    const handleClose = () => {
        setOpen(false)
        setSelectedTeacher('');
    };
    const handleEditTeacher = () => {
        if (props.teachers && teacher) {
            const updatedTeacher: Teacher = {
                id: teacher.id,
                firstName: teacherFirstName,
                lastName: teacherLastName,
                instrument: teacherInstrument,
            };
            props.editTeacher(updatedTeacher)
            toast.success("Update Erfolgreich");
            handleClose();
        } else {
            toast.error("Update Fehlgeschlagen")
        }
    }

    function editTeacherFirstName(event: ChangeEvent<HTMLInputElement>) {
        setTeacherFirstName(event.target.value)
    }

    function editTeacherLastName(event: ChangeEvent<HTMLInputElement>) {
        setTeacherLastName(event.target.value)
    }

    function editTeacherInstrument(event: ChangeEvent<HTMLInputElement>) {
        setTeacherInstrument(event.target.value)
    }

    return (
        <div>
            <h2 id={"container"}>Lehrerliste</h2>
            <table>
                <thead>
                <tr>
                    <th scope="col">Vorname</th>
                    <th scope="col">Nachname</th>
                    <th scope="col">Instrument</th>
                    <th scope="col">Lehrer bearbeiten</th>
                    <th scope="col">Lehrer löschen</th>
                </tr>
                {props.teachers.map(teacher =>
                    <tr key={teacher.id}>
                        <SingleTeacher teacher={teacher}/>
                        <td><Button sx={{backgroundColor: '#E1694E', marginLeft: '20px'}} variant="contained"
                                    size={"small"}
                                    onClick={() => handleClickOpen(teacher.id)}>Lehrer bearbeiten</Button></td>
                        <td><Button sx={{backgroundColor: '#E1694E', marginLeft: '20px'}} variant="contained"
                                    size={"small"}
                                    onClick={() => props.deleteTeacher(teacher.id)}>Lehrer löschen</Button></td>
                    </tr>
                )}
                </thead>
            </table>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{backgroundColor: '#e8e9ec'}} color={'#E1694E'} fontSize={"big"}>Lehrerdetails
                            bearbeiten</DialogTitle>
                        <DialogContent sx={{backgroundColor: '#e8e9ec'}}>
                            <DialogContentText sx={{color: '#000'}}>Bitte geben Sie die Änderungen
                                ein.</DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Vorname"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={teacherFirstName}
                                onChange={editTeacherFirstName}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Nachname"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={teacherLastName}
                                onChange={editTeacherLastName}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Instrument"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={teacherInstrument}
                                onChange={editTeacherInstrument}
                            />
                        </DialogContent>
                        <DialogActions sx={{backgroundColor: '#E1694E'}}>
                            <Button onClick={handleClose} sx={{color: '#e8e9ec'}}>Zurück</Button>
                            <Button onClick={handleEditTeacher} sx={{color: '#e8e9ec'}}>Speichern</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
        </div>
    )
}
