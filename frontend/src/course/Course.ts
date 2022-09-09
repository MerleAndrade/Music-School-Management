export type Course = {
    id: string,
    instrument: string,
}
export type NewCourse = Omit<Course, "id">