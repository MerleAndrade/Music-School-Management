export type Course = {
    id: string,
    instrument: string,
    firstNameTeacher: string,
    firstNameStudent: string,
}
export type NewCourse = Omit<Course, "id">
