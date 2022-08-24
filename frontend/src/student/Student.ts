export type Student = {
    id: string,
    firstName: string,
    lastName: string,
    instrument: string,
}
export type NewStudent = Omit<Student, "id">