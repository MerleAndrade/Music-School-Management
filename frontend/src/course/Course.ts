export type Course = {
    id: string,
    name: string,
}
export type NewCourse = Omit<Course, "id">