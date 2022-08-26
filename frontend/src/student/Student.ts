export type Student = {
    id: string,
    firstNameStudent: string,
    lastNameStudent: string,
    instrumentStudent: string,
}
export type NewStudent = Omit<Student, "id">
