export type Course = {
    id: string,
    instrument: string,
    firstNameTeacher: string,
}
export type NewCourse = Omit<Course, "id">
