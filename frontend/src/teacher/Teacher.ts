export type Teacher = {
    id: string,
    firstName: string,
    lastName: string,
    instrument: string,
}

export type NewTeacher = Omit<Teacher, "id">